const express = require('express');
const router = express.Router();

// Get Model reference
const Item = require('../../models/Item');

// @route 	GET /api/items
// @desc	GET All Items
// @access	Public
router.get('/', (req, res) => {
	Item.find({}).then(item => res.json(item))
	.catch(err => console.log('Failed fetching items: ', err));
})


// @route 	POST /api/items/add
// @desc	Add An Item
// @access	Public
router.post('/add', (req, res) => {
	// construct item object
	const newItem = new Item({
		name: req.body.name
	});

	// Save new item
	newItem.save().then(item => res.json(item))
	.catch(err => console.log('failed saving item:', err));
})


// @route 	DELETE /api/items/delete/:id
// @desc	Delete An Item
// @access	Public
router.delete('/delete/:id', (req, res) => {
	// Find id and remove
	Item.findById(req.params.id)
	.then(item => item.remove().then(() => res.json({ success: true })))
	.catch(err => res.status(404).json({ success: false }));
})


module.exports = router;

