import type { Config } from "drizzle-kit";

export default {
    schema: "./src/db/schema/*",
    out: "./src/db/migrations",
    driver: "pg",
    dbCredentials: {
        user: "postgres",
        password: process.env.DATABASE_PASSWORD,
        host: "127.0.0.1",
        port: 5432,
        database: "mydatabase",
    }
} satisfies Config;