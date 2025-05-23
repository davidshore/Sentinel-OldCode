import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.PG_HOST || "localhost",
  // port: process.env.DB_PORT || 5432,
  database: process.env.PGDATABASE || "Sentinel",
  username: process.env.PGUSER || "your_pg_user",
  password: process.env.PGPASSWORD || "your_pg_password",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

export default sequelize;
