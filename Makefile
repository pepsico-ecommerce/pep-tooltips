.PHONY: build clean lint server

server: node_modules/
	npm start

build: node_modules/
	cp src/styles.css dist/styles.css
	npx babel src -d dist
	npx rollup -c rollup.config.js
	npx rollup -c rollup.config.esm.js

lint: node_modules/
	npm run lint

clean:
	-rm -f package-lock.json
	-rm -r ./node_modules
	-npm cache verify
	-rm dist/*

node_modules/: package.json
	npm install
	touch node_modules/
