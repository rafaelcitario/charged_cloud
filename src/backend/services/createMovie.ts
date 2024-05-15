import { IPrismaMovieRepository } from "../repositories/IRepositories/prismaMovies.repository"
interface CreateActorParams {
  name: string,
  birth_day: string,
  nationality: string
}

interface CreateMovieParams {
  title: string,
  release_date: string,
  is_available: boolean
}

export class CreateMovie {
  private movieRepository
  constructor ( movieRepository: IPrismaMovieRepository ) {
    this.movieRepository = movieRepository
  }
  async execute( { title, release_date, is_available }: CreateMovieParams ) {
    await this.movieRepository.create( {
      title,
      release_date,
      is_available,
    } )
  }

}