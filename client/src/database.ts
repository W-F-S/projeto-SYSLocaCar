import { Pool } from 'pg';

// Database configuration
const pool = new Pool({
  user: 'your_username',          // Replace with your database username
  host: 'localhost',              // Replace with your database host
  database: 'your_database_name', // Replace with your database name
  password: 'your_password',      // Replace with your database password
  port: 5432,                     // Default PostgreSQL port
});

export const query = async (text: string, params?: any[]) => {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result.rows;
  } catch (error) {
    console.error('Database Query Error:', error);
    throw error;
  } finally {
    client.release();
  }
};
