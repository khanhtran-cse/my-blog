# Khanh Tran Blog

## Technique
This blog has been built with next module.

## Content
This blog contains my expirence.

## To deploy
- Build: ```npm run build```
- Export: ```npm run export```
- Add empty file to named ```.nojekyll``` to ```out``` folder if it doesn't exist
- Add ```out``` to git and commit
- Push ```out``` folder gh-pages branch: ```git subtree push --prefix out origin gh-pages```

## To create and publish new post
- Add post meta to ```data/meta/index.js```
- Create a file that contains the content of the post. Reference: ```data/detail/template.js```
- Import new file to ```data/detail/index.js```
- Run the deplay command.