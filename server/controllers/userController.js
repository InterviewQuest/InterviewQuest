const { Pool } = require('pg');
const { parse } = require('pg-connection-string');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const config = parse(process.env.DATABASE_URL);
config.ssl = {
  rejectUnauthorized: false,
};
const pool = new Pool(config);

const addUser = async (req, res) => {
  const { email, password } = req.body;

  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const userResult = await client.query('INSERT INTO users(email, password) VALUES($1, $2) RETURNING *', [email, password]);
    const newUser = userResult.rows[0];

    const algorithmsResult = await client.query('SELECT id, difficulty FROM algorithms LIMIT 75');
    const values = algorithmsResult.rows.map(row => `(${newUser.id}, ${row.id}, false, null, null, 0, '${row.difficulty}')`).join(',');

    await client.query(`INSERT INTO user_algorithms(user_id, algorithm_id, solved, last_solved, interviews, comfort_rating, difficulty) VALUES ${values}`);

    const technologiesResult = await client.query('SELECT id FROM technologies LIMIT 16');
    const techValues = technologiesResult.rows.map(row => `(${newUser.id}, ${row.id}, false, null, null, null)`);

    await client.query(`INSERT INTO user_technologies(user_id, technology_id, green, pros, cons, opinion) VALUES ${techValues}`);

    await client.query('COMMIT');
    res.status(201).json(newUser);
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Error adding user: ', err);
    res.status(500).send('Server Error During userController.addUser');
  } finally {
    client.release();
  }
};

const login = async(req, res) => {
  const { email, password } = req.body;
  const client = await pool.connect();

  const loginAttempt = await client.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);
  if (loginAttempt.rows.length === 0) {
    return res.status(401).json({ success: false, message: 'Incorrect User/Password' });
  } else {
    const userId = loginAttempt.rows[0].id;

    const problemData = await client.query(`
    SELECT ua.*, a.algorithm
    FROM user_algorithms ua
    JOIN algorithms a ON ua.algorithm_id = a.id
    WHERE ua.user_id = $1
    `, [userId]);

    const technologyData = await client.query(`
    SELECT ut.*, t.technology
    FROM user_technologies ut
    JOIN technologies t ON ut.technology_id = t.id
    WHERE ut.user_id = $1
  `, [userId]);

  const pob = await client.query('SELECT * FROM algorithms ORDER BY RANDOM() LIMIT 1');

    const responseData = {
      success: true,
      problemOfTheDay: pob.rows[0],
      algorithms: problemData.rows,
      technologies: technologyData.rows,
    }


    return res.status(200).json(responseData); 

  }
};

const resetPassword = async (req, res) => {
  const { email, password } = req.body; // Assuming you have a 'newPassword' field in your request body
  try {
    const result = await pool.query(
      'UPDATE users SET password = $1 WHERE email = $2 RETURNING *',
      [password, email]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (err) {
    console.error('Error updating password: ', err);
    return res.status(500).json({ message: 'Server Error' });
  }
};

const forgetPassword = async (req, res) => {
  console.log('hello this is forget password');
  const { email } = req.body;
  console.log(req.body);
  let message;
  let emailExists;
  const secretKey = crypto.randomBytes(32).toString('hex');
  const query = 'SELECT * FROM users WHERE email = $1';

  const results = await pool.query(query, [email]);
  console.log('this is pool results', results.rowCount);
  results.rowCount === 0 ? emailExists = false : emailExists = true;
  console.log('this is email exists', emailExists)
  if (emailExists === false) {
    message = 'Sorry, this email does not exist';
    console.log('this is message', message)
    return res.status(200).json({ message: message, emailExists: emailExists });
  } else {
    //generate jwt token
    const resetToken = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
    //generate reset link
    const resetLink = `http://localhost:8080/resetpassword?token=${resetToken}`;

    //create config for createTransport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: '587',
      auth: {
        user: 'interviewquestdev', // Replace with your Gmail email
        pass: 'woxk qymy mnnr tbep', // Replace with your Gmail password
      },
      secureConnection: 'false',
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false,
      },
    });

    //create message
    const mailMessage = {
      from: 'interviewquestdev',
      to: email,
      subject: 'Interview Quest: Please reset your Password',
      html: `You have requested to reset your password. Click the following link to reset your password: ${resetLink}`,
    };
    try {
      await transporter.sendMail(mailMessage);
      message = 'password reset is sent to your email';
      return res
        .status(200)
        .json({ message: message, emailExists: emailExists });
      return next();
    } catch (err) {
      return res.status(500).send({ message: err });
    }
  }
};

module.exports = {
  addUser,
  forgetPassword,
  resetPassword,
  login
};


