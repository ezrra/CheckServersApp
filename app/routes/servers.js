// var express = require('express');
// var router = express.Router();

// router.get('/', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });   
// });

// module.exports = router;

var Server = require('./../models/server');

function getAll (res) {

    Server.find(function (err, servers) {

        if (err) {
            res.send(err);
        }

        res.json(servers);
    });
};

module.exports = function (app) {

    app.get('/api/servers', function (req, res) {

        getAll(res);
    });

    app.post('/api/servers', function (req, res) {

        Server.create({
            name: req.body.name,
            website: req.body.website
        }, function (err, server) {
            if (err) {
                res.send(err)
            }
        });
    });

    app.get('/api/servers/:id', function (req, res) {

        Server.findById({ _id: req.params.id}, function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    });

    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });
}