const express = require('express');

const app = express();

const expressPort = 3000;

app.listen(expressPort, () => {
	console.log(`listening on ${expressPort}`);
})

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res, next) => {
	res.sendFile(`${__dirname}/public/index.html`)
})
