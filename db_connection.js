const mysql = require('mysql2/promise');
require('dotenv/config');

const connection = mysql.createPool(
  {
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,

    connectionLimit: 10,
    queueLimit: 0,
    waitForConnections: true
  }
);

async function checkDBConnection(connection) {
  
  const isConnectionOk = await connection.getConnection();

  if (isConnectionOk) {
    console.log('DB is connected!');
  }
  else {
    console.log('DB is not connected!');
    return;
  }

}

checkDBConnection(connection);


module.exports = connection;