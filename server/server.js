require('dotenv').config();

const express = require('express');
const cors = require('cors');

const userRouter = require('./routes/user');
const algoRouter = require('./routes/algo');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());

//User routes go thru here
app.use('/user', userRouter);

//Algorithm routes thru here
app.use('/algo', algoRouter);

//Unknown route handler
app.use((req, res) => res.sendStatus(404));

//Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Express encountered unknown middleware error');
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));