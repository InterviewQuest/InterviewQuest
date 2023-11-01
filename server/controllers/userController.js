const { Pool } = require('pg');
const { parse } = require('pg-connection-string');
const crypto = require('crypto');
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

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

const forgetPassword = async (req,res) => {
    const { email } = req.body;
    let message;
    let emailExists;
    const secretKey = crypto.randomBytes(32).toString('hex');
    const query = `SELECT * FROM users WHERE email = ${email}`

    await pool.query(query, (err, result) => {
        if (results.length>0) emailExists = true;
        else emailExists = false;
    })

    if (emailExists === false) {
        res.locals.message = 'Sorry, this email does not exist';
        return res.status(200).json(res.locals.message);
    }
    else {
    //generate jwt token
    const resetToken = jwt.sign({ email }, secretKey, { expiresIn: "1h" });
    //generate reset link
    const resetLink = `//localhost:3000/resetpassword?token=${resetToken}`;

    //create config for createTransport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: "587",
      auth: {
        user: "interviewquestdev", // Replace with your Gmail email
        pass: "woxk qymy mnnr tbep", // Replace with your Gmail password
      },
      secureConnection: "false",
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
    });

    //create message
    const mailMessage = {
      from: "interviewquestdev",
      to: email,
      subject: "Interview Quest: Please reset your Password",
      html: `You have requested to reset your password. Click the following link to reset your password: ${resetLink}`

    };
    try {
      await transporter.sendMail(mailMessage);
      res.locals.message = 'password reset is sent to your email';
      return res.status(200).json(res.locals.message);
      return next();
    } catch (err) {
      return res.status(500).send({ message: err });
    }
}


}

module.exports = {
    addUser,
    forgetPassword,
};