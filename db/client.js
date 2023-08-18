const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  port: '5433',
  password: 'Myname91.',
  database: 'fitness-dev',
})

module.exports = client;