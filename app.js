const express = require('express');
const data = require('./data.json');
// console.log(projects[0].id);


const app = express();
app.set('view engine', 'pug');
app.use('/static', express.static('public'));





app.get('/', (req, res) => {
	// res.locals.name
	res.render('index', data.projects );
});

app.get('/about', (req, res) => {
	res.render('about', data.projects);
});




app.listen(3000, () => {
	console.log(`The application is running on localhost:3000`);
});