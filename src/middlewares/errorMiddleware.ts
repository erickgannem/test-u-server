import { NextFunction, Request, Response } from 'express'

interface HttpExceptionInterface {
  description:string;
  message: string;
}

export default function (err: HttpExceptionInterface, req: Request, res: Response, next: NextFunction) {
  return res.status(500).json({
    message: 'Oops! Something went wrong',
    description: err.message
  })
}
