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
# Tag = MAJOR.MINOR.(PATCH * 100 + release), release 0 after a Bootstrap update (see CLAUDE.md)
$parts = $bversion.Split(".")
$tag = "v{0}.{1}.{2}" -f $parts[0], $parts[1], ([int]$parts[2] * 100)
Write-Host "For tagging (after commit and push!):"
Write-Host "git tag -a $tag -m ""Bootstrap version $bversion"""
Write-Host "git push origin $tag"
