:: Make sure processess are closed.
taskkill /IM node.exe /F
taskkill /IM OTOnline.exe /F
cls

:: Setup everything.
node.exe --run build
node.exe --run start
cls

:: Start the game!
:: It hangs the command prompt, which displays the server output.
"C:\Games\OldTanks Online\OTOnline.exe"

:: This line is executed when OTO is closed.
:: Make sure processess are closed.
taskkill /IM node.exe /F
taskkill /IM OTOnline.exe /F
cls