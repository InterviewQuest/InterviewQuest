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
  getTech,
};
