const dotenv = require('dotenv');
const express = require('express');
//const http = require("http");
const bodyParser = require('body-parser');
// var cors = require('cors');

const app = express();
//const server = http.createServer(app)
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))

const router = require('./router/auth');
app.use('/', router)

app.use(express.json());

dotenv.config({ path: './config.env'});
const PORT = process.env.PORT;
require('./db/conn');

const User = require('./model/userSchema');

app.listen(PORT, ()=>{
    console.log(`Server is running on Port ${PORT}`);
})