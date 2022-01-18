
import { verify, sign, SignOptions, JwtPayload } from 'jsonwebtoken'
import environment from '../config'
import models from '../models'

const accessSecret: any = environment().accessSecret

const refreshSecret: any = environment().refreshSecret

const generateAccessToken = (payload: Object, options?: SignOptions): string => (sign(payload, accessSecret, {
  ...(options && options),
  algorithm: 'HS256'
}))

const generateRefreshToken = (payload: Object, options?: SignOptions): string => (sign(payload, refreshSecret, {
  ...(options && options),
  algorithm: 'HS256'
}))

const verifyAccessToken = (token: string): string | JwtPayload => (verify(token, accessSecret))
const verifyRefreshToken = (token: string): string | JwtPayload => (verify(token, refreshSecret))

const reissueToken = async (refreshToken: string): Promise<any> => {
  try {
    const user = verifyRefreshToken(refreshToken)
    const exists: any = await models.LoginMongoose.findOne({ email: user.email })
    return generateAccessToken({
      username: exists._doc.email,
      password: exists._doc.password
    }, { expiresIn: '20s' })
  } catch (error) {
    return error
  }
}

export default { generateAccessToken, generateRefreshToken, verifyAccessToken, verifyRefreshToken, reissueToken }
