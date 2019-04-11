const express = require("express");
const router = express.Router();
const data = require('../data/data.json');
const { projects } = data;


console.log('hi from project route');




router.get('/:id', (req, res) => {
	// Access id from the route parameter and assign it a variable
	const id = req.params.id;

	// Use id as index to get specific project data and assign to variable
	const project = projects[id];
	

	res.render('project', project );
});





// Export 'router' so it can be accessed by app.js
module.exports = router;