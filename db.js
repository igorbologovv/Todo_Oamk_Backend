const { Pool } = require('pg');
require('dotenv').config();
console.log(process.env)
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: process.env.SSL
});

// Function to execute SQL queries
const query = async (sql, values = []) => {
    try {
        const result = await pool.query(sql, values);
        return result.rows;
    } catch (error) {
        throw new Error(`Database error: ${error.message}`);
    }
};

module.exports = { query, pool };


