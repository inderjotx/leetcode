import { drizzle } from 'drizzle-orm/postgres-js';
import postgres, { Sql } from 'postgres';
import { users, questions, solutions, validationSchema, schema } from '@/db/schema';


const URL = process.env.DATABASE_URL || ""


declare global {
    var queryClient: Sql<{}> | null
}

function getClient() {
    return postgres(URL)
}



export const db = drizzle(globalThis.queryClient || getClient(), { schema: schema });


if (!globalThis.queryClient && process.env.NODE_ENV !== "production") globalThis.queryClient = postgres(URL)


export type User = typeof users.$inferSelect
export type Question = typeof questions.$inferSelect
export type ValidationSchema = typeof validationSchema.$inferSelect
export type Solution = typeof solutions.$inferSelect

