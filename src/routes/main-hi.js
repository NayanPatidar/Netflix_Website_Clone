const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/in-hi', (req, res) => {
    const htmlFilePath = path.join(__dirname, '..', 'views', 'hi', 'main-hi.html');
    res.sendFile(htmlFilePath);
})

router.get('/in-hi/', (req, res) => {
    res.redirect('/in-hi');
});

module.exports = router;