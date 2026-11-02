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

$secret = Read-Host 'Supabase service_role key (hidden)' -AsSecureString
$password = Read-Host 'New admin password (hidden)' -AsSecureString
$confirmation = Read-Host 'Confirm new password (hidden)' -AsSecureString

$secretText = [System.Net.NetworkCredential]::new('', $secret).Password
$passwordText = [System.Net.NetworkCredential]::new('', $password).Password
$confirmationText = [System.Net.NetworkCredential]::new('', $confirmation).Password

try {
    if (-not $secretText.StartsWith('eyJ')) {
        throw 'Enter the legacy service_role JWT key from your Supabase project.'
    }
    if ($passwordText.Length -lt 8) {
        throw 'The new password must be at least 8 characters.'
    }
    if ($passwordText -cne $confirmationText) {
        throw 'The passwords do not match.'
    }

    $uri = "https://iokhvcxbgmdxntlbnopk.supabase.co/auth/v1/admin/users/$($userIds[$Email])"
    $body = @{ password = $passwordText } | ConvertTo-Json -Compress
    Invoke-RestMethod -Uri $uri -Method Put -Headers @{
        apikey = $secretText
        Authorization = "Bearer $secretText"
    } -ContentType 'application/json; charset=utf-8' -Body ([System.Text.Encoding]::UTF8.GetBytes($body)) | Out-Null

    Write-Host "Password updated for $Email. Sign in at https://itda-edu.vercel.app/admin"
}
finally {
    $secretText = $null
    $passwordText = $null
    $confirmationText = $null
    $body = $null
}
