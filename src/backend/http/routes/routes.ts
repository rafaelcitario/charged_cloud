import { createMovieController } from '@src/backend/http/controllers/createMovie.controller'
import express from '@src/backend/lib/express'
import { NextFunction, Request, Response } from 'express'

const router = express.Router()

router.use( ( req: Request, res: Response, next: NextFunction ) => {
  console.log( `Horário: ${ Date.now() }` )
  next()
} )

router.post( '/filme', createMovieController )


module.exports = router