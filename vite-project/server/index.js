import express from 'express';
import pool from './db.js';

const app = express();
app.use(express.json());

app.get('/form', async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM public.mortgages')
        res.json(results.rows)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: err });
    }
})

app.listen(3001, () => {
    console.log('Listening on port 3001!');
});
