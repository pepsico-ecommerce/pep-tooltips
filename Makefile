.PHONY: build clean lint server

server: node_modules/
	npm start

build: node_modules/
	npx webpack

lint: node_modules/
	npm run lint

clean:
	-rm -f package-lock.json
	-rm -r ./node_modules
	-npm cache verify

node_modules/: package.json
	npm install
	touch node_modules/
