/** @type { import("drizzle-kit").Config } */
import * as dotenv from 'dotenv';
dotenv.config({path: '.env.local'}); // Load environment variables from .env.local file
// const DB_PATH = process.env.NEXT_PUBLIC_DRIZZLE_DB_URL;


export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_6ZjLfFKupY9q@ep-green-glade-ad3qldxd-pooler.c-2.us-east-1.aws.neon.tech/AI%20Prep?sslmode=require&channel_binding=require',
    },
};
