import { PrismaClient } from '@prisma/client'
import { ENV } from '@src/backend/env'
export const prisma = new PrismaClient( {
  log: ENV.NODE_ENV === 'dev' ? [ 'query' ] : []
} )