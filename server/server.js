require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const userRouter = require('./routes/user');
const algoRouter = require('./routes/algo');

const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const PORT = process.env.PORT || 3000;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

//Handle Multiple Routes to different page
app.get('*', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

//User routes go thru here
app.use('/user', userRouter);

//Algorithm routes thru here
app.use('/algo', algoRouter);

//Handle Multiple Routes to different page
app.get('*', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

//Unknown route handler
app.use((req, res) => res.sendStatus(404));

//Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Express encountered unknown middleware error');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
