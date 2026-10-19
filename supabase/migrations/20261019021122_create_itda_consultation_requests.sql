create schema if not exists itda;

create table if not exists itda.consultation_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  grade text not null,
  subjects text[] not null,
  address text not null,
  school text,
  concern text,
  privacy_consent boolean not null,
  status text not null default 'new',
  source_path text,
  created_at timestamptz not null default now(),
  constraint consultation_requests_name_length
    check (char_length(btrim(name)) between 2 and 40),
  constraint consultation_requests_phone_length
    check (char_length(regexp_replace(phone, '[^0-9]', '', 'g')) between 9 and 11),
  constraint consultation_requests_grade_allowed
    check (grade in ('초등', '중등', '고등', '기타/N수생/성인')),
  constraint consultation_requests_subjects_present
    check (cardinality(subjects) between 1 and 9),
  constraint consultation_requests_subjects_allowed
    check (subjects <@ array['국어','영어','수학','사회','과학','역사','논술','코딩','전과목']::text[]),
  constraint consultation_requests_address_length
    check (char_length(btrim(address)) between 2 and 100),
  constraint consultation_requests_school_length
    check (school is null or char_length(school) <= 100),
  constraint consultation_requests_concern_length
    check (concern is null or char_length(concern) <= 1000),
  constraint consultation_requests_privacy_consent_required
    check (privacy_consent is true),
  constraint consultation_requests_status_allowed
    check (status in ('new', 'contacted', 'completed', 'cancelled'))
);

comment on table itda.consultation_requests is '잇다과외 무료 상담 신청';
comment on column itda.consultation_requests.address is '시·도 및 동 단위까지만 수집';
comment on column itda.consultation_requests.privacy_consent is '개인정보 수집·이용 동의 여부';

create index if not exists consultation_requests_created_at_idx
  on itda.consultation_requests (created_at desc);
create index if not exists consultation_requests_status_created_at_idx
  on itda.consultation_requests (status, created_at desc);

alter table itda.consultation_requests enable row level security;

revoke all on schema itda from public;
revoke all on table itda.consultation_requests from public, anon, authenticated;
grant usage on schema itda to anon, authenticated, service_role;
grant insert on table itda.consultation_requests to anon, authenticated;
grant select, insert, update, delete on table itda.consultation_requests to service_role;

drop policy if exists "public_can_submit_valid_consultation"
  on itda.consultation_requests;
create policy "public_can_submit_valid_consultation"
  on itda.consultation_requests
  for insert
  to anon, authenticated
  with check (
    privacy_consent is true
    and status = 'new'
    and char_length(btrim(name)) between 2 and 40
    and char_length(regexp_replace(phone, '[^0-9]', '', 'g')) between 9 and 11
    and grade in ('초등', '중등', '고등', '기타/N수생/성인')
    and cardinality(subjects) between 1 and 9
    and subjects <@ array['국어','영어','수학','사회','과학','역사','논술','코딩','전과목']::text[]
    and char_length(btrim(address)) between 2 and 100
  );

do $$
declare
  existing_schemas text;
begin
  select substring(config_entry from length('pgrst.db_schemas=') + 1)
    into existing_schemas
  from pg_roles
  cross join lateral unnest(rolconfig) as config_entry
  where rolname = 'authenticator'
    and config_entry like 'pgrst.db_schemas=%'
  limit 1;

  existing_schemas := coalesce(existing_schemas, 'public, storage, graphql_public');
  if not ('itda' = any(regexp_split_to_array(replace(existing_schemas, ' ', ''), ','))) then
    execute format(
      'alter role authenticator set pgrst.db_schemas = %L',
      existing_schemas || ', itda'
    );
  end if;
end
$$;
notify pgrst, 'reload config';
