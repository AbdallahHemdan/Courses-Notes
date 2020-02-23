## 💡 Steps to deploy your app in GitHub Pages
---------------------------------------------
1. run `npm install gh-pages --save-dev`
2. goto `package.json`
3. add `"homepage": "http://userName.github.io/projectName"` before `"name"` attribute.
4. add `"predeploy": "npm run build", "deploy": "gh-pages -d build",` in `"scripts"` object.
5. run `git remote add origin https://github.com/userName/projectName`
6. run `git remote set-url origin https://github.com/userName/projectName`
7. note : sometimes `5.`, `6.` are already run before as your in the original `.git`
8. npm run deploy
9. congratulations your app is published in the link your provide in the `package.json`
