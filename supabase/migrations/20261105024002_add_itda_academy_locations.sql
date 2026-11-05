create table if not exists itda.academy_locations (
  source_id integer primary key,
  branch_name text not null,
  region_sido text not null,
  region_gugun text not null,
  road_address text not null,
  jibun_address text,
  latitude numeric(10,7),
  longitude numeric(10,7),
  source_url text not null default 'https://myoungmoon.com/academy',
  imported_at timestamptz not null default now(),
  constraint academy_locations_coordinates_pair
    check ((latitude is null) = (longitude is null)),
  constraint academy_locations_latitude_range
    check (latitude is null or latitude between 33 and 39),
  constraint academy_locations_longitude_range
    check (longitude is null or longitude between 124 and 132)
);

comment on table itda.academy_locations is
  '명문과외 공개 동네학원 목록 스냅샷. 잇다과외 제휴 및 수업 가능 여부는 별도 확인.';

create index if not exists academy_locations_region_idx
  on itda.academy_locations (region_sido, region_gugun, branch_name);

alter table itda.academy_locations enable row level security;

revoke all on table itda.academy_locations from public, anon, authenticated;
grant select on table itda.academy_locations to anon, authenticated;
grant select, insert, update, delete on table itda.academy_locations to service_role;

create policy "academy_locations_are_publicly_readable"
  on itda.academy_locations
  for select
  to anon, authenticated
  using (true);
