const express = require('express');
const cors = require('cors');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const morgan = require('morgan'); // Log HTTP request details
require('dotenv').config(); // Load the .env file, this line should be commented out in production

const config = require('./config');
const routes = require('./routes');
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use(routes);

const port = config.port;
app.listen(port, () => console.log('Server is listening on port', port));



