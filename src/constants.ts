export const DBconfig = {
  host: process.env.POSTGRES_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.flowersDB,
  port: process.env.POSTGRES_PORT,
  ssl: true,
};
