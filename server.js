const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

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

// serve static assets if in production
if(process.env.NODE_ENV === 'production'){
	// set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'client/build/index.html'));
	});
}

// Handle 404 status
app.use((req, res, next) => {
  res.status(404).send('NOT FOUND');
  next();
})

// Start listening for port
app.listen(process.env.PORT || 5000, () => {
	console.log('Listening on port 5000');
})