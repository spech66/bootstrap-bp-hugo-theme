$pkgold = Get-Content "package-lock.json" | ConvertFrom-Json -AsHashtable
$bversionold = $pkgold["packages"]["node_modules/bootstrap"]["version"]
Write-Host "Bootstrap current: $bversionold"

npm update

Copy-Item -Force .\node_modules\bootstrap\dist\js\bootstrap.bundle.min.js .\assets\js\bootstrap.bundle.min.js

New-Item -Path ".\assets\sass\bootstrap\" -ItemType "Directory" -Force
Copy-Item -Path ".\node_modules\bootstrap\scss\*" -Destination ".\assets\sass\bootstrap\" -Recurse -Force

$pkg = Get-Content "package-lock.json" | ConvertFrom-Json -AsHashtable
$bversion = $pkg["packages"]["node_modules/bootstrap"]["version"]
Write-Host "Bootstrap: $bversion"
Write-Host "For tagging:"
Write-Host "git tag -a v$bversion -m ""Bootstrap version $bversion"""
Write-Host "git push origin v$bversion"
