const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Get current data
const today = new Date();
const dd = today.getDate();
const mm = today.getMonth()+1;
const yyyy = today.getFullYear();
const fullDate = `${mm}/${dd}/${yyyy}`;
// end of 'Get current date'

// Create Schema
const ItemSchema = Schema({
	name: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now()
	}
});

// Set model & export
module.exports = Item = mongoose.model('item', ItemSchema);;