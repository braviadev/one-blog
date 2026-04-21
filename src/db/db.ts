import 'server-only'

import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

import { env } from '@/env'

import * as schema from './schema'

// 1. Create a connection pool and forcefully enable SSL
const pool = new Pool({
  connectionString: env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

// 2. Initialize Drizzle with the new pool
export const db = drizzle({ client: pool, schema })
