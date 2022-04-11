const mysql = require("mysql2");

const config = {
  db: {
    /* do not put password or any sensitive info here, done only for demo purposes */
    host: process.env.DB_HOST || "34.85.164.225",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "HooHacks2022!",
    database: process.env.DB_NAME || "hoohacks-2022",
    waitForConnections: true,
    connectionLimit: process.env.DB_CONN_LIMIT || 2,
    queueLimit: 0,
    debug: process.env.DB_DEBUG || false,
  },
  listPerPage: process.env.LIST_PER_PAGE || 10,
};

const DB = new Promise((resolve, reject) => {
  const connection = mysql.createConnection(config.db);

  connection.connect((error) => {
    if (error) {
      reject(error);
    }
    resolve(connection);
  });
});

module.exports = DB;
