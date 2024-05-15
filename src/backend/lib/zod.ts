import { z } from 'zod'

export const envSchema = z.object( {
  NODE_ENV: z.enum( [ 'prod', 'dev', 'test' ] ).default( 'dev' ),
  PORT: z.coerce.number().default( 3000 ),
} )

export const moviesSchemaValidadeBody = z.object( {
  title: z.string(),
  release_date: z.coerce.string(),
  is_available: z.boolean()
} )