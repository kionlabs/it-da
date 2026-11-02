-- Grant dashboard access only to explicitly enrolled Supabase Auth users.
create table if not exists itda.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table itda.admin_users enable row level security;
revoke all on itda.admin_users from public, anon, authenticated;
grant select, insert, delete on itda.admin_users to service_role;

create or replace function itda.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from itda.admin_users
    where user_id = (select auth.uid())
  );
$$;

revoke all on function itda.is_admin() from public, anon, authenticated;
grant execute on function itda.is_admin() to authenticated, service_role;

grant select on itda.consultation_requests to authenticated;
grant update (status) on itda.consultation_requests to authenticated;

drop policy if exists "admin_can_read_consultations" on itda.consultation_requests;
create policy "admin_can_read_consultations"
  on itda.consultation_requests
  for select
  to authenticated
  using ((select itda.is_admin()));

drop policy if exists "admin_can_update_consultation_status" on itda.consultation_requests;
create policy "admin_can_update_consultation_status"
  on itda.consultation_requests
  for update
  to authenticated
  using ((select itda.is_admin()))
  with check ((select itda.is_admin()));

notify pgrst, 'reload schema';
