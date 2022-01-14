/* eslint-disable no-unused-expressions */

import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

const loginObject = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().required()
})

const loginValidation = (req: Request, res: Response, next: NextFunction) => {
  const valid = loginObject.validate(req.body)
  if (valid.error) return valid.value
  else next
}

export default loginValidation
