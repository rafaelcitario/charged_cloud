import { IPrismaActorsRepository } from "../repositories/IRepositories/prismaActors.repository"
interface CreateActorParams {
  name: string,
  birth_day: string,
  nationality: string
}

export class CreateActor {
  private movieRepository
  constructor ( movieRepository: IPrismaActorsRepository ) {
    this.movieRepository = movieRepository
  }
  async execute( { name, birth_day, nationality }: CreateActorParams ) {
    await this.movieRepository.create( {
      name,
      birth_day,
      nationality
    } )
  }
  
}