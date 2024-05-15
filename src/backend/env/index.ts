import { envSchema } from '@src/backend/lib/zod'
import 'dotenv/config'

const _env = envSchema.safeParse( process.env )
if ( _env.success === false ) {
  console.log( 'some enviroments variables is not found', _env.error.format() )
  throw new Error( 'some enviroments variables is not found' )
}

export const ENV = _env.data