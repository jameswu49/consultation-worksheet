import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
    user: 'Jimmy',
    host: 'localhost',
    database: 'consultation',
    password: 'Postgresql4me!',
    port: 5432,
})

export default pool;
