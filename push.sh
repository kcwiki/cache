export GIT_AUTHOR_NAME="Botkaze"
export GIT_AUTHOR_EMAIL="gkpyon+1@gmail.com"
export GIT_COMMITTER_NAME="$GIT_AUTHOR_NAME"
export GIT_COMMITTER_EMAIL="$GIT_AUTHOR_EMAIL"

git add .
TZ=Asia/Tokyo git commit -m "$(date +%Y-%m-%d)"
git push git@github.com:kcwiki/cache.git master
