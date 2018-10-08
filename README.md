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
- Push ```out``` folder gh-pages branch: ```git subtree push --prefix dist origin gh-pages```