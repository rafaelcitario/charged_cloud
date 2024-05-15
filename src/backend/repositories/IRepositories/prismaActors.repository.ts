import { Actor, Prisma } from '@prisma/client'
export interface IPrismaActorsRepository {
  create: ( data: Prisma.ActorCreateInput ) => Promise<Actor>
}