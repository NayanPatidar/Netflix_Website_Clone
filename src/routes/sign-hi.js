const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/in-hi/login', (req, res) => {
    const htmlFilePath = path.join(__dirname, '..', 'views', 'hi', 'signin-hi.html');
    res.sendFile(htmlFilePath);
})

module.exports = router;