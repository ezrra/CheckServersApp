// var express = require('express');
// var router = express.Router();
// router.get('/', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });   
// });
// module.exports = router;

var Server = require('./../models/server');
var request = require('request');

function getAll (res) {
    Server.find(function (err, servers) {
        if (err) res.send(err);
        res.json(servers);
    });
};

module.exports = function (app) {

    app.get('/api/servers', function (req, res) {
        getAll(res);
    });

    app.get('/api/servers/:id/check', function (req, res) {
        var id = req.params.id;
        Server.findById({ _id: id }, function (err, server) {
            if (err) res.send(err);
            request(server.website, function (error, response, body) {
                // res.json({ status: response.statusCode });
            });
        });
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
        var id = req.params.id;
        Server.findById({ _id: id }, function (err, server) {
            if (err) res.send(err);
            res.json(server);
        });
    });

    app.put('/api/servers/:id', function (req, res) {
        var name = req.body.name;
        var website = req.body.website;

        Server.findById({ _id: req.params.id }, function (err, server) {
            if (err) {
                return res.send(err);
            };
            server.update({
                name: name,
                website: website
            }, function (err) {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Updated' });
            });
        });
    });

    app.delete('/api/servers/:id', function (req, res) {
        Server.findOneAndRemove({ _id: req.params.id }, function (err, server) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Deleted' });
        });
    });

    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });
}