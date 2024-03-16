import { drizzle } from 'drizzle-orm/postgres-js';
import postgres, { Sql } from 'postgres';
import { users } from '@/db/schema/user';
import * as userSchema from "@/db/schema/user"


const URL = process.env.DATABASE_URL || ""


declare global {
    var queryClient: Sql<{}> | null
}

function getClient() {
    return postgres(URL)
}



export const db = drizzle(globalThis.queryClient || getClient(), { schema: { ...userSchema } });


if (!globalThis.queryClient && process.env.NODE_ENV !== "production") globalThis.queryClient = postgres(URL)


export type User = typeof users.$inferSelect
