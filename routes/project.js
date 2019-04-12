const express = require('express');
const router = express.Router();
const data = require('../data/data.json');
const { projects } = data;


// When a GET request is made without an id after /project
router.get('/', (req, res) => {
	res.redirect('/');
});


// When a GET request is made that includes an id after /project
router.get('/:id', (req, res) => {
	// Access id from the route parameter and assign it a variable
	const id = req.params.id;

	// Create array of all project ids
	const allIds = projects.map( project => project.id);

	// Get index of id in allIds, otherwise return -1
	const index = allIds.indexOf(parseInt(id));

	// If index equals -1, project id does not exist
	if(index === -1) {
		// Redirect user to home page
		res.redirect('/');
	}
	// When index does not equal -1, project id does exist
	else {
		// Use id as index to get specific project data and assign to variable
		const project = projects[index];

		// Render project.pug template passing 'project' object as data
		res.render('project', project);
	}
});





// Export 'router' so it can be accessed by app.js
module.exports = router;