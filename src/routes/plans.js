const express = require('express');
const Router = express.Router();
const path = require('path');

Router.get('/signup/planform', (req,res) => {
    const htmlFilePath = path.join(__dirname, '..', 'views', 'en', 'plans.html');
    res.sendFile(htmlFilePath);
})

module.exports = Router;