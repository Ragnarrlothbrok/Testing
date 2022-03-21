var sslRedirect = require('heroku-ssl-redirect').default;
var express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
var app = express();
// enable ssl redirect
app.use(sslRedirect([
  'other',
  'development',
  'production'
  ]));
app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
app.listen(port);