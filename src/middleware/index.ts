import loginValidation from './user/login'
import authenticateRefreshToken from './user/refresh.token'
import registerValidation from './user/register'
import authenticateToken from './user/token'

export = {
  registerValidation,
  loginValidation,
  authenticateToken,
  authenticateRefreshToken
}
