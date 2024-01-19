const express = require('express');
const Router = express.Router();
const path = require('path');

Router.get('/in/signup', (req,res) => {
    const htmlFilePath = path.join(__dirname, '..', 'views', 'en', 'planInfo.html');
    res.sendFile(htmlFilePath);
})

module.exports = Router;