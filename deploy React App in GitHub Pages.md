## 💡 Steps to deploy your app in GitHub Pages
---------------------------------------------
1. run `npm install gh-pages --save-dev`
2. goto `package.json`
3. add `"homepage": "http://userName.github.io/projectName"` before `"name"` attribute.
![11](https://user-images.githubusercontent.com/40190772/75101209-7e1c2e00-55e1-11ea-9a24-6c2f5d7bca40.png)
4. add `"predeploy": "npm run build", "deploy": "gh-pages -d build",` in `"scripts"` object.
![12](https://user-images.githubusercontent.com/40190772/75101206-78bee380-55e1-11ea-9aff-570174373a03.png)
5. run `git remote add origin https://github.com/userName/projectName`
6. run `git remote set-url origin https://github.com/userName/projectName`
7. note : sometimes `5.`, `6.` are already run before as your in the original `.git` so message `fatal: remote origin already exists.` appears, just ignore it and goto `8.`
8. npm run deploy
9. congratulations your app is published in the link your provide in the `package.json`


