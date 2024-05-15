import { Prisma } from '@prisma/client'
import { prisma } from '@src/backend/lib/prisma'
import { IPrismaActorsRepository } from './IRepositories/prismaActors.repository'
export class ActorsRepository implements IPrismaActorsRepository {
  async create( data: Prisma.ActorCreateInput ) {
    const user = await prisma.actor.create( {
      data,
    } )
    return user
  }
}