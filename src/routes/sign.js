const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/in/login', (req, res) => {
    const htmlFilePath = path.join(__dirname, '..', 'views', 'en', 'signin.html');
    res.sendFile(htmlFilePath);
})

module.exports = router;