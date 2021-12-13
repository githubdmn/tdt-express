/* eslint-disable no-tabs */
export default interface EnvVar {
	port: string | undefined,
	salt: string | undefined,
	// eslint-disable-next-line camelcase
	access_token_secret: string | undefined,
	// eslint-disable-next-line camelcase
	refresh_token_secret: string | undefined,
	// eslint-disable-next-line camelcase
	mongo_username: string | undefined,
	// eslint-disable-next-line camelcase
	mongo_password: string | undefined,
	// eslint-disable-next-line camelcase
	mongo_server: string | undefined,
	// eslint-disable-next-line camelcase
	mongo_name: string | undefined
}
