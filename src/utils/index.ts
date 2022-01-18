import { sample } from 'lodash'
import logger from './logger'
import jwtUtils from './jwt.utils'

export default {
  logger,
  generateAccessToken: jwtUtils.generateAccessToken,
  generateRefreshToken: jwtUtils.generateRefreshToken,
  verifyAccessToken: jwtUtils.verifyAccessToken,
  verifyRefreshToken: jwtUtils.verifyRefreshToken,
  reissueToken: jwtUtils.reissueToken,
  sample
}
