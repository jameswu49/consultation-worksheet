import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
    user: 'Jimmy',
    host: 'localhost',
    database: 'consultation',
    password: '',
    port: 5432,
})

// const query = async (text, params) => {
//     try {
//         const result = await pool.query(text, params);
//         return result.rows;
//     } catch (error) {
//         console.error('Error executing query', error);
//         throw error;
//     }
// };

export default pool;
