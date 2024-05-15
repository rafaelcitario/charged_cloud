import { z } from 'zod'

export const envSchema = z.object({
  NODE_ENV: z.enum(['prod', 'dev', 'test']),
  PORT: z.coerce.number().default(3000),
})