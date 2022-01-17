import { sample } from 'lodash'
import logger from './logger'
import jwtUtils from './jwt.utils'

export default { logger, signUser: jwtUtils.signUser, verifyUser: jwtUtils.verifyUser, sample }
