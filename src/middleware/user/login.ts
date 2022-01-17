/* eslint-disable no-unused-expressions */

import { Request } from 'express'
import Joi from 'joi'

const loginObject = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().required()
})

const loginValidation = (req: Request): Object => {
  const valid: any = loginObject.validate(req.body)
  const isError = Joi.isError(valid.error)
  return {
    error: isError,
    message: isError ? valid.error.details[0].message : 'Data is valid'
  }
}

export default loginValidation
