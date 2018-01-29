
if %computername%==L560-CNA set https_proxy=http://192.168.1.29:8080

ng build --prod --base-href /angdir/

rem npm i -g angular-cli-ghpages

git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/cristianalecu/bets.git
git push -u origin master
rem ng build --prod --base-href http://cristianalecu.github.io/FinAng/
ngh
