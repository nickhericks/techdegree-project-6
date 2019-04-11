const express = require("express");
const router = express.Router();



router.get('/', (req, res) => {
	res.render('about');
});

// Export 'router' so it can be accessed by app.js
module.exports = router;