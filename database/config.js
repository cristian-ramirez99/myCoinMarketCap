const { Pool } = require('pg');

const dbConnection = async () => {
  try {
    const pool = new Pool({
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: process.env.POSTGRES_PORT,
    });
    await pool.connect();
    console.log('DB connected');
  } catch (error) {
    console.log(error);
    throw new Error('Error could not intialize connection to db ');
  }
};

// const dbconnection = async () => {
//   try {
//     const client = new Client({
//       user: process.POSTGRES_USER,
//       host: process.POSTGRES_HOST,
//       database: process.POSTGRES_DB,
//       password: process.POSTGRES_PASSWORD,
//       port: process.POSTGRES_PORT,
//     });
//     await client.connect();
//     console.log('DB online');
//   } catch (error) {
//     throw new Error('Error could not intialize connection to db');
//   }
// };

module.exports = {
  dbConnection,
};
