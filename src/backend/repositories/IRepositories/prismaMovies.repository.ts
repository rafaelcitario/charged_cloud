import { Prisma, Movie } from '@prisma/client'

export interface IPrismaMovieRepository {
  create: ( data: Prisma.MovieCreateInput ) => Promise<Movie>
}

