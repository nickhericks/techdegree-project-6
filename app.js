const express = require('express');
const data = require('./data/data.json');

// Create express application and assign it to variable
const app = express();

// Serve static files located in public folder
app.use('/static', express.static('public'));

// Set view engine to Pug
app.set('view engine', 'pug');


// Import code from files in the 'routes' folder
const mainRoutes = require('./routes');
const aboutRoutes = require('./routes/about');
const projectRoutes = require('./routes/project');
app.use(mainRoutes);
app.use('/about', aboutRoutes);
app.use('/project', projectRoutes);


// This middleware runs if no routes above match what was requested.
// Meaning it grabs all 404 errors and passes them to the 
// error handling middleware below
app.use((req, res, next) => {
	const err = new Error('Page not found');
	err.status = 404;
	next(err);
});


// Error Handling Middleware (4 parameters)
// Runs if an object gets passed into a next() call
app.use((err, req, res, next) => {
	res.locals.error = err;
	res.status(err.status);
	console.log(`${err} Status: ${err.status}`);
	res.render('error');
});

// Start server and listen on port 3000
app.listen(3000, () => {
	console.log(`The application is running on localhost:3000`);
});