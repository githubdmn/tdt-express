
import { verify, sign, JsonWebTokenError, TokenExpiredError, SignOptions, JwtPayload } from 'jsonwebtoken'
import environment from '../config'

const privateKey: any = environment().privateKey

const publicKey: any = environment().privateKey

const signUser = (payload: Object, options?: SignOptions): string => (sign(payload, privateKey, {
  ...(options && options),
  algorithm: 'HS256'
}))

const verifyUser = (token: string): string | JwtPayload => (verify(token, publicKey))

export default { signUser, verifyUser, JsonWebTokenError, TokenExpiredError }
