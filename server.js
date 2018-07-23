const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Activate expressJs
const app = express();

// Setup 'body-parser' Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
.connect(db)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

// handle 'items' routes
app.use('/api/items', require('./routes/api/items'));

// Start listening for port
app.listen(process.env.PORT || 5000, () => {
	console.log('Listening on port 5000');
})