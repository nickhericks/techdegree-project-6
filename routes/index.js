const express = require("express");
const router = express.Router();
const data = require('../data/data.json');


// When a GET request is made to the main url
router.get('/', (req, res) => {
	// Set locals to JSON object data 
	res.locals.projects = data.projects;
	res.render('index');
});


// Export 'router' so it can be accessed by app.js
module.exports = router;