require("dotenv").config();
const mysql = require("mysql2/promise");
const app = require("./src/app");

const port = parseInt(process.env.APP_PORT ?? "5000", 10);

const database = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.warn(`Server is listening on ${port}`);
  }
});

module.exports = database;
