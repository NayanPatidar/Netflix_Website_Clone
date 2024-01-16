const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/in');
});

router.get('/in', (req, res) => {
    const htmlFilePath = path.join(__dirname, '..', 'views', 'en', 'main.html');
    res.sendFile(htmlFilePath);
})

module.exports = router;