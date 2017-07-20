var express = require('express');
var app = express();
var morgan = require('morgan');
var users = [
    {id: 1, name: 'alice'},
    {id: 2, name: 'beak'},
    {id: 3, name: 'chris'}
];

app.use(morgan('dev'));


app.get('/users', function(req, res) {
    const limit = req.query.limit;
    res.json(users.slice(0, limit));
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;