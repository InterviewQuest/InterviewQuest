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
  const { user_id } = req.body;
  try {
    const totalTech = await pool.query(
      `SELECT * FROM user_technologies WHERE user_id = ${user_id} `
    );
    const completedTech = await pool.query(
      `SELECT count(*) FROM user_technologies WHERE green = true AND user_id = ${user_id}`
    );
    return res
      .status(201)
      .json({
        data: totalTech.rows,
        total: totalTech.rows.length,
        completed: completedTech.rows[0].count,
      });
  } catch (err) {
    console.log('Error getting tech: ', err);
    return res.status(500).send('Server Error During algoController.tech');
  }
};

module.exports = {
  getTech,
};
