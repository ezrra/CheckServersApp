var Server = require('./../models/server');

module.exports = function (app) {

    app.get('/api/servers', function (req, res) {

        Server.find(function (err, servers) {
            (err) ? res.send(err) : res.json(servers);
        });

    });
}