const express = require("express");
const router = express.Router();
const data = require('../data/data.json');

console.log('hi from project route');




router.get('/:id', (req, res) => {
	res.render('project', data.projects);
});






module.exports = router;