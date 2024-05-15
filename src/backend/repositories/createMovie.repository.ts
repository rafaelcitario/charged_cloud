import { Prisma } from '@prisma/client'
import { prisma } from '@src/backend/lib/prisma'
import { IPrismaMovieRepository } from './IRepositories/prismaMovies.repository'
export class MovieRepository implements IPrismaMovieRepository {
  async create( data: Prisma.MovieCreateInput ) {
    const user = await prisma.movie.create( {
      data,
    } )
    return user
  }
}