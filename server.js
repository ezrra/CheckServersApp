var express     = require('express'),
    app         = express(),
    mongoose    = require('mongoose');

// Connect Mongo

mongoose.connect("mongodb://localhost:27017/check-servers-app");

// Location files static
app.use(express.static(__dirname + 'public'));

// Models
var Server = mongoose.model('Server', {
    name: String
});

// endpoints
app.get('/api/servers', function (req, res) {
    Server.find(function (err, servers) {
        if (err) {
            res.send(err);
        }
        res.json(servers);
    })
});

// 

app.get('*', function (req, res) {
    res.sendFile('./public/index.html');
});

app.listen(8080, function () {
    console.log('App listening ...')
})