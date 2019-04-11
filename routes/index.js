const express = require("express");
const router = express.Router();
const data = require('../data/data.json');

console.log('hi from index route');




router.get('/', (req, res) => {
	res.locals.projects = data.projects;
	res.render('index');
});




// Export 'router' so it can be accessed by app.js
module.exports = router;