const { Pool } = require('pg');
const { parse } = require('pg-connection-string');

const config = parse(process.env.DATABASE_URL);
config.ssl = {
  rejectUnauthorized: false,
};
const pool = new Pool(config);

const addTech = async (req, res) => {
  const { userId, technology } = req.body;
  const client = await pool.connect();

  try {
    await client.query('BEGIN');
    
    const existingTech = await client.query('SELECT * FROM technologies WHERE technology = $1', [technology]);
    
    let techId;
    if (existingTech.rows.length === 0) {
      const newTech = await client.query('INSERT INTO technologies (technology) VALUES ($1) RETURNING id', [technology]);
      techId = newTech.rows[0].id;
    } else {
      techId = existingTech.rows[0].id;
    }

    await client.query('INSERT INTO user_technologies (user_id, technology_id, green, pros, cons, opinion, notes) VALUES ($1, $2, false, null, null, null, null)', [userId, techId]);
    
    await client.query('COMMIT');
    res.status(201).send('Technology added successfully');
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Error adding technology: ', err);
    res.status(500).send('Server Error During addTech');
  } finally {
    client.release();
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
    return res.status(500).send('Server Error During techController.getTech');
  }
};

const updateGreen = async (req, res) => {
  const { userId, techId } = req.body;

  try {
    const updatedTech = await pool.query('SELECT * FROM user_technologies WHERE user_id = $1 AND technology_id = $2', [userId, techId]);

    if (updatedTech.rows.length === 0) {
      return res.status(404).send('Not found :(');
    }

    const currentGreenValue = updatedTech.rows[0].green;
    const newGreenValue = !currentGreenValue;

    await pool.query('UPDATE user_technologies SET green = $1 WHERE user_id = $2 AND technology_id = $3', [newGreenValue, userId, techId]);

    return res.status(200).send('Green property updated successfully');
  } catch (err) {
    console.log('Error during updateGreen: ', err);
    return res.status(500).send('Server error during techController.updateGreen');
  }
};

const updateNotes = async (req, res) => {
  const { userId, techId, notes } = req.body;

  try {

    await pool.query('UPDATE user_technologies SET notes = $1 WHERE user_id = $2 AND technology_id = $3', [notes, userId, techId]);
    return res.status(200).send('Notes property updated successfully');

  } catch (err) {
    console.log('Error during updateNotes: ', err);
    return res.status(500).send('Server error during techController.updateNotes');
  }
}

module.exports = {
  addTech,
  getTech,
  updateGreen,
  updateNotes
};