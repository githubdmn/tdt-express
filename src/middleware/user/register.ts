/* eslint-disable no-unused-expressions */

import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

const registerObject = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().required(),
  fullname: Joi.string().required()
})

const registerValidation = (req: Request, res: Response, next: NextFunction) => {
  const valid = registerObject.validate(req.body)
  if (valid.error) return valid.value
  else next
}

export default registerValidation
