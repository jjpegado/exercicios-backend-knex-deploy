const knex = require('knex')({
    client: 'pg',
    connection: {
      host :  process.env.DB_HOST,
      port : process.env.DB_PORT,
      user : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_NEME,
      ssl: { rejectUnauthorized: false}
    }
  });

// const { Pool } = require('pg');

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'market_cubos',
//     password: 'postgres',
//     port: 5432
// });


// const query = (text, param) => {
//     return pool.query(text, param);
// }


module.exports = knex
