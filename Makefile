serve:
	npm start

deps:
	npm install

deploy-init:
	npm run deploy

build:
	GENERATE_SOURCEMAP=true npm run build
	echo "avobeso.com" > dist/CNAME

deploy:
	git push origin `git subtree split --prefix dist master`:gh-pages --force

.PHONY: build
