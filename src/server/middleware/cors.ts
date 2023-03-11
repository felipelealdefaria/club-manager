import { RequestHandler, Request, Response, NextFunction } from 'express'

const cors: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  res.header('Vary', 'Origin')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, account, Authorization')
  next()
}

export default cors
