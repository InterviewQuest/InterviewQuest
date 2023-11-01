const { Pool } = require('pg');
const { parse } = require('pg-connection-string');

const config = parse(process.env.DATABASE_URL);
config.ssl = {
    rejectUnauthorized: false
};
const pool = new Pool(config);

const addUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await pool.query('INSERT INTO users(email, password) VALUES($1, $2) RETURNING *', [email, password]);
        res.status(201).json(result.rows[0]);
    } catch(err) {
        console.log('Error adding user: ', err);
        res.status(500).send('Server Error During userController.addUser');
    }
};

module.exports = {
    addUser
};