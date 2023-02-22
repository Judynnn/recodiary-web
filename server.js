const express = require('express')
const app = express();
const port = 7272;

app.listen(port, function() {
    console.log('server on');
}); 

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/main.html');
});

app.get('/todo', function(req, res) {
    res.sendFile(__dirname + '/public/todo.html');
});

app.get('/note', function(req, res) {
    res.sendFile(__dirname + '/public/note.html');
});

app.get('/vnote', function(req, res) {
    res.sendFile(__dirname + '/public/vnote.html');
});

