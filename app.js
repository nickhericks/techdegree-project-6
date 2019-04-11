const express = require('express');
const data = require('./data/data.json');
// console.log(projects[0].id);


const app = express();
app.use('/static', express.static('public'));

app.set('view engine', 'pug');


// Import code from index.js file in the 'routes' folder
const mainRoutes = require('./routes');
const aboutRoutes = require('./routes/about');
const projectRoutes = require('./routes/project');
app.use(mainRoutes);
app.use('/about', aboutRoutes);
app.use('/project', projectRoutes);




// This middleware runs if no routes above match what was requested.
// Meaning it grabs all 404 errors and passes them to
app.use((req, res, next) => {
	const err = new Error('Not found');
	err.status = 404;
	next(err);
});

// Error Handling Middleware (4 parameters)
// Runs if an object gets passed into a next() call
app.use((err, req, res, next) => {
	res.locals.error = err;
	res.status(err.status);
	res.render('error');
});




app.listen(3000, () => {
	console.log(`The application is running on localhost:3000`);
});