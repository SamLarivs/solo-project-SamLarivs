const { Pool } = require('pg');

// Connection string for PostgreSQL
const PG_URI = 'postgresql://postgres.gwlsndrpxxlcsvhodudp:whoarethesepeople@aws-0-us-east-1.pooler.supabase.com:6543/postgres';

// Create a new pool using the connection string
const pool = new Pool({
    connectionString: PG_URI
});

// Export a query function for use in your application
module.exports = {
    query: async (text, params) => {
        console.log('QUERY MADE', text);
        try {
            return await pool.query(text, params);
        } catch (err) {
            console.error('QUERY FAILED IN DATABASE', err);
            throw err;
        }
    }
};