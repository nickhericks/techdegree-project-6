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




// app.get('/', (req, res) => {
// 	res.render('index', data.projects );
// });


// app.get('/about', (req, res) => {
// 	res.render('about', data.projects);
// });


// app.get('/:id', (req, res) => {
// 	res.render('project', data.projects);
// });




app.listen(3000, () => {
	console.log(`The application is running on localhost:3000`);
});