const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
	res.send('get about');
})

router.post('/', (req, res, next) => {
	res.send('post about');
})

module.exports = router;

