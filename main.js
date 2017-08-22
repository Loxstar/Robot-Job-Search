const data = require("/Users/adamlocklear/Robo-daily/public/data.js");
const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('robo.mustache', { users: data.users })
});

app.listen(3000, function () {
    console.log('Ham Sammich!')
});