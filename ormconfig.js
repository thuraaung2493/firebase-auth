const host = process.env.DB_HOST || "localhost";
const port = process.env.DB_PORT || 3390;
const username = process.env.DB_USERNAME || "root";
const password = process.env.DB_PASSWORD || "root";
const database = process.env.DB_DATABASE || "firebase_auth";

module.exports = {
  type: "mysql",
  host: host,
  port: port,
  username: username,
  password: password,
  database: process.env.NODE_ENV === "test" ? "database_test" : database,
  synchronize: true,
  logging: false,
  timezone: "+06:30", //for writing to database
  entities: ["dist/entity/**/*.js"],
  migrations: ["dist/migration/**/*.js"],
  subscribers: ["dist/subscriber/**/*.js"],
};
