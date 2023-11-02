const { Pool } = require('pg');
const { parse } = require('pg-connection-string');

const config = parse(process.env.DATABASE_URL);
config.ssl = {
  rejectUnauthorized: false,
};
const pool = new Pool(config);

const addAlgo = async (req, res) => {
  const { algorithm, difficulty, description, url } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO algorithms(algorithm, difficulty, description, url) VALUES ($1, $2, $3, $4) RETURNING *',
      [algorithm, difficulty, description, url]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log('Error adding algorithm: ', err);
    res.status(500).send('Server Error During algoController.addAlgo');
  }
  const { algorithm, difficulty, description, url } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO algorithms(algorithm, difficulty, description, url) VALUES ($1, $2, $3, $4) RETURNING *',
      [algorithm, difficulty, description, url]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log('Error adding algorithm: ', err);
    res.status(500).send('Server Error During algoController.addAlgo');
  }
};

module.exports = {
  addAlgo,
  getAlgo,
};
