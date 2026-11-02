param(
    [Parameter(Mandatory = $true)]
    [ValidateSet('educo1111@naver.com', 'kionlabs@gmail.com')]
    [string]$Email
)

$ErrorActionPreference = 'Stop'

$userIds = @{
    'educo1111@naver.com' = 'e9dd0771-1a7d-4f44-a57c-6cd1ea3ea19a'
    'kionlabs@gmail.com' = '7abb8054-7f43-445d-8a6f-18a4bdd56b0f'
}

$secret = Read-Host 'Supabase service_role key (입력 내용 숨김)' -AsSecureString
$password = Read-Host '새 관리자 비밀번호 (입력 내용 숨김)' -AsSecureString
$confirmation = Read-Host '새 비밀번호 확인 (입력 내용 숨김)' -AsSecureString

$secretText = [System.Net.NetworkCredential]::new('', $secret).Password
$passwordText = [System.Net.NetworkCredential]::new('', $password).Password
$confirmationText = [System.Net.NetworkCredential]::new('', $confirmation).Password

try {
    if (-not $secretText.StartsWith('eyJ')) {
        throw 'Supabase 프로젝트의 legacy service_role JWT 키를 입력해 주세요.'
    }
    if ($passwordText.Length -lt 12) {
        throw '새 비밀번호는 12자 이상으로 설정해 주세요.'
    }
    if ($passwordText -cne $confirmationText) {
        throw '새 비밀번호와 확인 입력이 다릅니다.'
    }

    $uri = "https://iokhvcxbgmdxntlbnopk.supabase.co/auth/v1/admin/users/$($userIds[$Email])"
    $body = @{ password = $passwordText } | ConvertTo-Json -Compress
    Invoke-RestMethod -Uri $uri -Method Put -Headers @{
        apikey = $secretText
        Authorization = "Bearer $secretText"
    } -ContentType 'application/json' -Body $body | Out-Null

    Write-Host "$Email 계정의 비밀번호가 변경됐습니다. /admin에서 로그인해 주세요."
}
finally {
    $secretText = $null
    $passwordText = $null
    $confirmationText = $null
    $body = $null
}
