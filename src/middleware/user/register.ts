/* eslint-disable no-unused-expressions */

import { Request } from 'express'
import Joi from 'joi'

const registerObject = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().required(),
  fullname: Joi.string().required()
})

const registerValidation = (req: Request): Object => {
  const valid: any = registerObject.validate(req.body)
  const isError = Joi.isError(valid.error)
  return {
    error: isError,
    message: isError ? valid.error.details[0].message : 'Data is valid'
  }
}

export default registerValidation
