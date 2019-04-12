# Project 6 - Full Stack JavaScript Techdegree

### Portfolio site (built with Node.js, Express and Pug)

A static portfolio site with a modern landing page, about page, and several project pages.

---

<img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1555084799/portfolio/expressPortfolio.png" width="899px">

## View project
1. Download this repo.
2. Navigate to the project directory in the command line/terminal.
3. Run 'npm install' (or view the required dependencies listed in the package.json file and install each manually).
3. Run 'npm start' to view the project in your browser at:  localhost:3000

<!-- :mag: Live version available at [nickhericks.github.io/techdegree-project-6/](https://nickhericks.github.io/techdegree-project-6/) -->

## Project objective

In this project, a JSON file is used to store all the data about the earlier techdegree projects that I've built. Pug uses the JSON data and templates to generate the markup that is ultimately displayed in the browser.

Node.js and Express are used to import the required dependencies, link the JSON with the Pug templates, set up routes to handle requests, set up the middleware to utilize static files like CSS, handle errors, and set up a server to serve the project.

## Techniques and concepts

- Node.js
- npm
- express.js
- pug template engine
- middleware
- error handling

## Additional features

In addition to completing the basic requirements for this techdegree project, I also added additional features including:

- [x] Updating package.json file to allow running 'npm start' to run the app
- [x] Create custom error message Pug template
- [x] Updating CSS stylings (background, font, colors, box shadows, etc.)

## Code example

This lesson was all about AJAX, so it seems fitting to show the fetch request used:

```javascript
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
```

## Acknowledgements

This project was built as part of the [Full Stack JavaScript Techdegree](https://join.teamtreehouse.com/techdegree/) offered by [Treehouse](https://teamtreehouse.com) :raised_hands:

Also, a big thank you to the creators and maintainers of [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/), and [Pug](https://www.npmjs.com/package/pug). 👍