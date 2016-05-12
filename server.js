var express     = require('express'),
    app         = express(),
    mongoose    = require('mongoose'),
    path        = require('path'),
    bodyParser  = require('body-parser');
    router      = express.Router(),
    methodOverride = require('method-override');

// Connect Mongo
mongoose.connect("mongodb://localhost:27017/check-servers-app");

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

// configure app
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride('X-HTTP-Method-Override'));

require('./app/routes/index.js')(app);
require('./app/routes/servers.js')(app);

app.use(function (req, res, next) {
    var err = new Error("Not found" + req);
    err.status = 404;
    next(err);
});

app.listen(8080, function () {
    console.log('App listening ...')
})