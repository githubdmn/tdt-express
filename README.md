# tdt-express-basic
ExpressJS in TypeScript - basic RESTful API

TODO: https://www.makeareadme.com/

### Setup steps

1) npx tsc --init
2) mkdir ./src
3) touch ./src/app.ts
4) npm install --save-dev ts-node-dev typescript
5) package.json :
			"scripts": {
				"dev": "ts-node-dev --respawn --transpile-only ./src/app.ts"
			}
6) npm install express
7) npm install --save-dev @types/node @types/express
