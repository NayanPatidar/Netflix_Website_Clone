const path = require("path");
const express = require("express");
const router = express.Router();

router.get('/signup/form', (req,res) => {
    const filePath = path.join(__dirname, '..', 'views', 'en', 'signupInfo.html');
    res.sendFile(filePath);
})

module.exports = router;