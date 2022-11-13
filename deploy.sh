yarn build
cd dist
echo > .nojekyll
git init
git checkout -b main
git add -A
git commit -m "deploy"
git push -f git@github.com:liweicheng00/profile.git main:gh-pages   