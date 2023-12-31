require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const userRouter = require('./routes/user');
const algoRouter = require('./routes/algo');
const techRouter = require('./routes/tech');

const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const PORT = process.env.PORT || 3000;

// app.use(cors({ origin: 'http://localhost:3000' }));
app.use(cors());
app.use(express.json());

// Assuming your compiled React files are in "../client/build"
app.use(express.static(path.resolve(__dirname, '../build')));

//Tech routes go thru here
app.use('/tech', techRouter);

//Routes for login, signup, forgot password thru here
app.use('/user', userRouter);

//Algorithm routes thru here
app.use('/algo', algoRouter);

// All requests that don't match static files should return index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

//Unknown route handler
app.use((req, res) => res.sendStatus(404));

//Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Express encountered unknown middleware error');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
