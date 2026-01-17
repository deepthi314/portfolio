git rm -r --cached node_modules > git_log.txt 2>&1
git commit -m "Remove node_modules" >> git_log.txt 2>&1
git push >> git_log.txt 2>&1
