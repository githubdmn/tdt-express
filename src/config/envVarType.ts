/* eslint-disable no-tabs */
export default interface EnvVar {
	port: string | undefined,
	// eslint-disable-next-line camelcase
	publicKey: string | undefined,
	// eslint-disable-next-line camelcase
	privateKey: string | undefined,
	// eslint-disable-next-line camelcase
	mongo_username: string | undefined,
	// eslint-disable-next-line camelcase
	mongo_password: string | undefined,
	// eslint-disable-next-line camelcase
	mongo_server: string | undefined,
	// eslint-disable-next-line camelcase
	mongo_name: string | undefined
}
