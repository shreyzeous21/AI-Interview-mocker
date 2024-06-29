/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://portfolio_manager_owner:PR4Uvg5erzLp@ep-polished-cake-a5zi2gww.us-east-2.aws.neon.tech/Ai-interview?sslmode=require',
    }
  };