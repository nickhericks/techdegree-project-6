const express = require("express");
const router = express.Router();
const data = require('../data/data.json');

console.log('hi from about route');




router.get('/', (req, res) => {
	res.render('about', data.projects);
});





module.exports = router;