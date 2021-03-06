
var express = require('express')
var path = require('path')

var app = express()
app.set('port', (process.env.PORT || 5000))

app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname)));

var dateipfad = path.join(__dirname, 'public', 'index.html')
 
app.get('/', function(request, response) {
    response.sendFile(dateipfad)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

/*
const express = require('express');
const app = express();

// This serves static files from the specified directory
app.use(express.static(__dirname + '/public'));

const server = app.listen(8081, () => {

  const host = server.address().address;
  const port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
*/
