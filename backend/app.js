// express
const express = require('express');
const app = express();
// Load the environment variables from the .env file, this line should be commented out when push to the origin repo
require('dotenv').config();
const config = require('./config');

const port = config.port;
app.listen(port, () => console.log('Server is listening on port', port));