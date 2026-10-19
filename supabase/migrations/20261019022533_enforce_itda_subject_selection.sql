alter table itda.consultation_requests
  drop constraint if exists consultation_requests_all_subjects_exclusive;
alter table itda.consultation_requests
  add constraint consultation_requests_all_subjects_exclusive
  check (not ('전과목' = any(subjects)) or cardinality(subjects) = 1);

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
    and (not ('전과목' = any(subjects)) or cardinality(subjects) = 1)
    and char_length(btrim(address)) between 2 and 100
  );
