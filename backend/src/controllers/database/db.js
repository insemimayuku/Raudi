import { Sequelize } from "@sequelize/core";
import dotenv from "dotenv";

dotenv.config();
const sequelize = new Sequelize({
  dialect: "mysql",
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  logging: false,
  dialectOptions: {
    socketPath:  process.env.DB_SOCKET || null,
  },
});

export default sequelize;
