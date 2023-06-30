import express from 'express';
import cors from "cors"
import pool from './db.js';

const app = express();
app.use(express.json());
app.use(cors())

app.get('/', async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM contacts')
        res.json(results.rows)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: err });
    }
})

app.post('/', async (req, res) => {
    try {
        const { firstName, lastName, phone, email } = req.body;

        // Perform the database insertion
        const query = 'INSERT INTO contacts (first_name, last_name, phone_number, email) VALUES ($1, $2, $3, $4)';
        await pool.query(query, [firstName, lastName, phone, email]);
        // const results = await pool.query("INSERT INTO contacts (first_name, last_name, phone_number, email) VALUES ($1, $2, $3, $4)", [firstName, lastName, phone, email])
        // console.log(results)
        // Respond with a success message or any additional data as needed
        res.json({ message: 'Contact info inserted successfully' });
    } catch (error) {
        console.error('Error inserting contact info:', error);
        res.status(500).json({ error: 'An error occurred while inserting contact info' });
    }
});

app.listen(3001, () => {
    console.log('Listening on port 3001!');
});
