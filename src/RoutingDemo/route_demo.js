const express = require('express');
const app = express();
const exportPort = 3000;

app.listen(exportPort, () => {
	console.log(`listening port ${exportPort}`);
})

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res, next) => {
	res.sendFile(`${__dirname}/public/index.html`)
})

app.get('/about', (req, res, next) => {
	res.send('get about');
})

app.post('/about', (req, res, next) => {
	res.send('post about')
})

app.route('/about')
	.get( (req, res, next) => {
		res.send('get about');
	})
	.post((req, res, next) => {
		res.send('post about')
	})

