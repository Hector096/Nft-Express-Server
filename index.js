const express = require('express');

const app = express();
const port = 3000;
const mongoose = require('mongoose');

app.use(express.json());

// Routes
const indexRoute = require('./routes/index');

// Express body parser
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRoute);

mongoose.connect('mongodb+srv://test111:dm4bFMnDOW1evqUP@cluster0.codfd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => {
  app.listen(process.env.PORT || port, () => {
  });
}).catch(() => {

});
