const express = require("express");
const router = express.Router();


// When a GET request is made to the /about url
router.get('/', (req, res) => {
	res.render('about');
});

// Export 'router' so it can be accessed by app.js
module.exports = router;