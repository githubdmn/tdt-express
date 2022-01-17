
import { verify, sign, JsonWebTokenError, TokenExpiredError, SignOptions, JwtPayload } from 'jsonwebtoken'

const privateKey: string = 'FRGNFEkT51oWzp4PS9qTWN0ZdqxdIConElLNlkAXc1HvzzGsDnN'

const publicKey: string = 'xltTDhHDNf6RxdAsQJ5EPzB0ag6JUxzqRCOcQKBgQDQz782Q10mH5v6T'

const signUser = (payload: Object, options?: SignOptions): string => (sign(payload, privateKey, {
  ...(options && options),
  algorithm: 'HS256'
}))

const verifyUser = (token: string): string | JwtPayload => (verify(token, publicKey))

export default { signUser, verifyUser, JsonWebTokenError, TokenExpiredError }
