const express = require('express');

const app = express();

const exportPort = 3000;
const about_router = require('./router/about');

app.listen(exportPort, () => {
	console.log(`listening port ${exportPort}`);
})

app.use(express.static(`${__dirname}/../RoutingDemo/public`));

app.get('/', (req, res, next) => {
	res.sendFile(`${__dirname}/../RoutingDemo/public/index.html`)
})

app.use('/about', about_router);
