const express = require('express')
const path = require('path')
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'src')));
app.use('/resources', express.static(path.join(__dirname, 'resources')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/MainPage', 'index.html'));
})

app.listen(port, () => {
    console.log(`Listening of the port ${port}`);
})