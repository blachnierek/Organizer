const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'admin',
  host: 'localhost',
  port: 5432,
  database: 'organizer'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};