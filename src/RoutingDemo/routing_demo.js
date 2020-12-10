const express = require('express');

const app = express();

const exportPort = 3000;

app.listen(exportPort, () => {
	console.log(`listening port ${exportPort}`);
})

app.get('/', (req, res, next) => {
	res.send('/');
})

app.get('/about', (req, res, next) => {
	res.send('/about');
})

app.get('/ab?cd', (req, res, next) => {
	res.send('/ab?cd');
})

app.get('/ab+cd', (req, res, next) => {
	res.send('/ab+cd');
})

app.get(/.*man$/, (req, res, next) => {
	res.send('/.*man$/');
})

app.get('/users/:userId/books/:bookId', (req, res, next) => {
	const {userId, bookId} = req.params;
	res.send(`userId: ${userId}, bookId: ${bookId}`);
})

app.get('/users/:userId-:bookId', (req, res, next) => {
	const {userId, bookId} = req.params;
	res.send(`userId: ${userId}, bookId: ${bookId}`);
})
