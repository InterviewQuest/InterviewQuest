const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "../client")));

//Handle Multiple Routes to different page
app.get('*', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, './client/index.html'));
  });
  

app.listen(3000, ()=> {
    console.log('listening to port 3000...')
})