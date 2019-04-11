const express = require("express");
const router = express.Router();
const data = require('../data/data.json');

console.log('hi from index route');




router.get('/', (req, res) => {
	res.render('index', data );
});





module.exports = router;