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
};

const getAlgo = async (req, res) => {
  const { user_id } = req.body;

  try {
    const totalAlgo = await pool.query(
      `SELECT * FROM user_algorithms LEFT JOIN algorithms ON algorithms.id = user_algorithms.algorithm_id WHERE user_id = ${user_id} `
    );

    const completedAlgo = await pool.query(
      `SELECT count(*) FROM user_algorithms WHERE solved = true AND user_id = ${user_id}`
    );
    return res.status(201).json({
      data: totalAlgo.rows,
      total: totalAlgo.rows.length,
      completed: completedAlgo.rows[0].count,
    });
  } catch (err) {
    console.log('Error adding algorithm: ', err);
    return res.status(500).send('Server Error During algoController.addAlgo');
  }
};

const updateAlgo = async (req, res) => {
  const { user_id, comfort_rating, algorithm_id } = req.body;
  console.log(user_id);
  console.log(comfort_rating);
  console.log(algorithm_id);
  try {
    const result = await pool.query(
      'UPDATE user_algorithms SET comfort_rating = $1 WHERE algorithm_id = $2 AND user_id = $3 RETURNING *',
      [comfort_rating, algorithm_id, user_id]
    );

    return res
      .status(200)
      .json({ message: 'comfort_rating updated successfully' });
  } catch (err) {
    console.error('Error updating password: ', err);
    return res.status(500).json({ message: 'Server Error' });
  }
};

const updateSolved = async (req, res) => {
  const { user_id, solved, algorithm_id } = req.body;
  try {
    await pool.query(
      'UPDATE user_algorithms SET solved = $1 WHERE algorithm_id = $2 AND user_id = $3 RETURNING *',
      [solved, algorithm_id, user_id]
    );

    return res.status(200).json({ message: 'solved updated successfully' });
  } catch (err) {
    console.error('Error updating password: ', err);
    return res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  addAlgo,
  getAlgo,
  updateAlgo,
  updateSolved,
};
