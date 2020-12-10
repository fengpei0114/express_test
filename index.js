const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, There is main page!');
})

app.get('/helloworld', (req, res) => {
    res.send('hello world!')
})
app.set('/views', './views');
app.set('view engine', 'ejs');

app.get('/view', (req, res) => {
    res.render('index', {title:'测试'})
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000')
})

app.use(express.static('public'));

