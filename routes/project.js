const express = require("express");
const router = express.Router();
const data = require('../data/data.json');
const { projects } = data;


console.log('hi from project route');




router.get('/:id', (req, res) => {

	const id = req.params.id;
	console.log(id);

	const project = data.projects[id];
	// console.log(project);


	const templateData = { id };

	res.render('project', project );
});






module.exports = router;