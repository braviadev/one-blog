import type { Config } from 'drizzle-kit'
import * as dotenv from 'dotenv'

// This loads the variables from your .env file into the system memory
dotenv.config({
  path: '.env.local' // Since your file is named .env.local
})

export default {
  dialect: 'postgresql',
  schema: './src/db/schema/index.ts',
  dbCredentials: {
    // We use process.env directly here to bypass the validation crash
    url: process.env.DATABASE_URL!
  },
  out: './src/db/migrations',
  strict: true,
  verbose: true
} satisfies Config
