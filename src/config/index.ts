
import { resolve } from 'path'
import { env } from 'process'
import { config } from 'dotenv'
import EnvVar from './envVarType'

const environment = (envFlag: String[]): EnvVar => {
  console.log(envFlag) // TODO: remove this line
  /* eslint-env node, mocha */
  // const envVar = process.argv[2] ? '.env.test' : '.env'
  const envVar = '.env'
  config({
    path: resolve(__dirname, `../../${envVar}`)
  })

  return {
    port: env.PORT,
    salt: env.SALT_WORK_FACTOR,
    access_token_secret: env.ACCESS_TOKEN_SECRET,
    refresh_token_secret: env.REFRESH_TOKEN_SECRET,
    mongo_username: env.MONGO_USERNAME,
    mongo_password: env.MONGO_PASSWORD,
    mongo_server: env.MONGO_SERVER,
    mongo_name: env.MONGO_NAME
  }
}

export default environment
