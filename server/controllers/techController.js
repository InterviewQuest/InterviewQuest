const { Pool } = require('pg');
const { parse } = require('pg-connection-string');

const config = parse(process.env.DATABASE_URL);
config.ssl = {
  rejectUnauthorized: false,
};
const pool = new Pool(config);

// const addTech = async (req, res) => {
//   const { algorithm, difficulty, description, url } = req.body;
//   try {
//   } catch (err) {
//     console.log('Error adding algorithm: ', err);
//     res.status(500).send('Server Error During algoController.addAlgo');
//   }
// };

const addTech = async (req, res) => {
  const { userId, technology, pros, cons, opinion, notes, green } = req.body;
  try {
    console.log('addTech');
    const insertQuery = `
    INSERT INTO user_technologies (user_id, technology, pros, cons, opinion, notes, green)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `;
    const result = await pool.query(insertQuery, [
      userId,
      technology,
      pros,
      cons,
      opinion,
      notes,
      green,
    ]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log('Error adding algorithm: ', err);
    res.status(500).send('Server Error During algoController.addAlgo');
  }
};

const getTech = async (req, res) => {
  try {
    const totalTech = await pool.query('SELECT * FROM user_technologies');
    const completedTech = await pool.query(
      'SELECT * FROM user_technologies WHERE green = true'
    );
    return res
      .status(201)
      .json({ total: totalTech.rowCount, completed: completedTech.rowCount });
  } catch (err) {
    console.log('Error getting tech: ', err);
    return res.status(500).send('Server Error During algoController.tech');
  }
};

module.exports = {
  addTech,
  getTech,
};
