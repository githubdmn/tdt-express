/* eslint-disable no-unused-expressions */

import { Request } from 'express'
import Joi from 'joi'

const registerObject = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().required(),
  fullname: Joi.string().required()
})

const registerValidation = (req: Request): string | null => {
  const valid = registerObject.validate(req.body)
  if (Joi.isError(valid.error)) return valid.error.details[0].message
  else return null
}

export default registerValidation
