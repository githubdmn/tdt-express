# tdt-express-basic
ExpressJS in TypeScript - basic RESTful API

TODO: https://www.makeareadme.com/

### Setup steps

1) npx tsc --init
2) mkdir ./src
3) touch ./src/app.ts
4) 
	npm install --save-dev typescript nodemon crypto eslint ts-node-dev 
5) package.json :
			"scripts": {
				"dev": "npx ts-node-dev --respawn --transpile-only ./src/app.ts",
				"lint": "npx eslint src/*.ts",
				"lint-fix": "npx eslint src/*.ts --fix"
			}
6) 
	npm install express \
			bcrypt \
			jsonwebtoken \
			lodash \
			mongoose \
			nanoid \
			pino \
			pino-pretty \
			dayjs \
			dotenv \
			joi \

7) 
	npm install --save-dev @types/express \
				@types/node \ 
				@types/bcrypt \
				@types/jsonwebtoken \
				@types/lodash \
				@types/mongoose \
				@types/nanoid \
				@types/pino 
