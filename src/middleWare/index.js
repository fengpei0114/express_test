const express = require('express');

const app = express();

const exportPort = 3000;

app.listen(exportPort, () => {
	console.log(`listening port ${exportPort}`);
})


app.use('/', (req, res, next) => {
	console.log("use middleware");
	next();
})

app.get('/', (req, res, next) => {
	console.log("middleware");
	next();
},(req, res, next) => {
	res.send("hello");
})

app.get('/about',(req, res, next) => {
	res.send("about");
})
