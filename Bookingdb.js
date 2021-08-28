import mongoose from 'mongoose';
import express from 'express';


import https from 'https';
import fs from 'fs';
import routes from './Routes/routes'

const app = express();

const port = 3000;

const bodyParser = require('body-parser');

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

mongoose.connect('mongodb://localhost:27017/BookingDatabase', {
    "useNewUrlParser": true,
    "useUnifiedTopology": true,
    'useCreateIndex' : true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected')
});

app.use('/routes',routes)

app.listen(port, () => console.log(`Example app listening on 
  : ${port}!`))

  