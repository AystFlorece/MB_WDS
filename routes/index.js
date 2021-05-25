const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/hotdog', (req, res) => {
    res.render('index2');
});

router.get('/valorant', (req, res) => {
    res.render('valorant');
});


module.exports = router;