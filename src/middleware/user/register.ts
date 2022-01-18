/* eslint-disable no-unused-expressions */

import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

const registerObject = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().required(),
  fullname: Joi.string().required()
})

const registerValidation = (req: Request, res: Response, next: NextFunction): any => {
  const valid: any = registerObject.validate(req.body)
  return Joi.isError(valid.error) ? res.status(400).send(valid.error.details[0].message) : next()
}

export default registerValidation
