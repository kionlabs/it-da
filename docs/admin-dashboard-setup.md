# 잇다과외 신청 관리 설정

관리자 화면은 `/admin`입니다. 신청 폼은 기존대로 `itda.consultation_requests`에 저장됩니다. 관리자 조회와 상태 변경은 Supabase Auth 사용자 중 `itda.admin_users`에 등록된 사용자만 허용합니다. 웹사이트에는 Supabase 서비스 역할 키를 배포하지 않습니다.

## Supabase에서 한 번만 설정

1. 이 프로젝트와 연결된 Supabase 프로젝트의 **SQL Editor**에서 [`20261102000000_itda_admin_access.sql`](../supabase/migrations/20261102000000_itda_admin_access.sql)을 실행합니다. 기존 신청 테이블은 유지됩니다.
2. **Authentication → Users**에서 `educo1111@naver.com` 계정이 있는지 확인하고 이메일 인증을 완료합니다. `kionlabs@gmail.com`도 관리자 화면을 사용할 경우 이 계정이 프로젝트의 Auth 사용자 목록에 있어야 합니다. Supabase 대시보드 로그인 계정과 프로젝트의 Auth 사용자는 별개입니다.
3. SQL Editor에서 아래 SQL을 실행합니다. 등록된 계정의 사용자 ID가 반환되어야 합니다.

```sql
insert into itda.admin_users (user_id)
select id from auth.users
where lower(email) in ('educo1111@naver.com', 'kionlabs@gmail.com')
on conflict (user_id) do nothing
returning user_id;
```

이미 등록된 계정이라 `returning` 결과가 비어 있다면 다음 쿼리로 확인합니다.

```sql
select u.email, a.created_at
from itda.admin_users a
join auth.users u on u.id = a.user_id
where lower(u.email) in ('educo1111@naver.com', 'kionlabs@gmail.com');
```

관리자 권한을 회수할 때는 해당 사용자 ID의 `itda.admin_users` 행만 삭제합니다. Auth 계정 자체를 삭제할 필요는 없습니다.

## 동작 확인

1. 관리자 화면에 로그인해 신청 목록이 열리는지 확인합니다.
2. 실제 신청 폼을 테스트하려면 이름을 `테스트신청`, 학습 고민을 `관리자 대시보드 저장 확인용`처럼 명확히 적고, 연락이 가지 않을 테스트용 번호를 사용합니다. 실사용자 번호나 실제 개인정보를 테스트에 사용하지 않습니다.
3. 제출 성공 후 관리자 목록에서 해당 행, 과목, 신청 시각을 확인하고 상태를 `취소`로 바꿉니다.
4. 로그아웃한 뒤 `/api/admin/leads`가 `401`을 반환하는지 확인합니다.

관리자 화면은 검색 엔진에 색인되지 않도록 `noindex`와 `robots.txt` 차단을 설정했습니다. 서버의 RLS 권한 검사가 실제 접근 제어입니다.
