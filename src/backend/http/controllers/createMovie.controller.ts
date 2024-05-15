import { moviesSchemaValidadeBody } from '@src/backend/lib/zod'
import { MovieRepository } from '@src/backend/repositories/createMovie.repository'
import { CreateMovie } from '@src/backend/services/createMovie'
import { NextFunction, Request, Response } from 'express'


export async function createMovieController( request: Request, response: Response, next: NextFunction ) {
  const { title, release_date, is_available } = moviesSchemaValidadeBody.parse( request.body )

  const movieRepository = new MovieRepository()
  const createMovie = new CreateMovie( movieRepository )

  try {
    await createMovie.execute( { title, release_date, is_available } )
  } catch ( error ) {
    return response.status( 409 ).send()
  }
  return response.status( 201 ).send()
}
