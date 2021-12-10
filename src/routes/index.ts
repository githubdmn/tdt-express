import { Router, Request, Response } from 'express'

export default Router()
  .get('/health', (req: Request, res: Response) => {
    res.status(200).send('OK')
  })
