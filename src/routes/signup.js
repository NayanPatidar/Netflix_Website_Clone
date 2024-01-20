const path = require("path");
const express = require("express");
const router = express.Router();

router.get('/signup/registration', (req,res) => {
    const filePath = path.join(__dirname, '..', 'views', 'en', 'signup.html');
    res.sendFile(filePath);
})

module.exports = router;