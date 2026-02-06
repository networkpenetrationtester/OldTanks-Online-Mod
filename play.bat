node --run build
taskkill /IM OTOnline.exe /F
taskkill /IM node.exe /F
node --run start
start /b "C:\Games\OldTanks Online\OTOnline.exe"
exit