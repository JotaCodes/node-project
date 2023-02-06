const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DB_LINK
});

//apenas testando a conexão
exports.connection = pool;
