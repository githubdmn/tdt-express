import { Router, Request, Response } from 'express'

export default Router()
  .get('/:id', (req: Request, res: Response) => {
    res.status(200).send(`Get user with id ${req.params.id}`)
  })
  .post('/register', (req: Request, res: Response) => {})
  .put('/:id/update', (req: Request, res: Response) => { })
  .patch('/:id/patch', (req: Request, res: Response) => { })
  .delete('/:id/delete', (req: Request, res: Response) => { })
