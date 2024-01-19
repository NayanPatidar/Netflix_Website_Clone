const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, 'src')));

const mainRoute = require('./src/routes/main');
const main_hiRoute = require('./src/routes/main-hi');
const signinRoute = require('./src/routes/sign');
const signin_hiRoute = require('./src/routes/sign-hi');
const plansInfo = require('./src/routes/plansInfo');
const plans = require('./src/routes/plans');

app.use('/', mainRoute);
app.use('/', main_hiRoute);
app.use('/', signinRoute);
app.use('/', signin_hiRoute);
app.use('/', plansInfo);
app.use('/', plans);

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Server is running on the http://localhost:${port}`);
});

