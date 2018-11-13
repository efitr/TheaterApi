
// This is a simple Javascript api

var express = require('express');

var app = express();

var myLogger = function (req, res, next) {
  console.log("Logged");
  next();
};

app.use(myLogger);

app.get('/theather/name-of-route', function (req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in part 2.`});
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
