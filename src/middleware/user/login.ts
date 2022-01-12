// TODO

import { object, string } from 'joi'

export default object({
  email: string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: string().required()
})
