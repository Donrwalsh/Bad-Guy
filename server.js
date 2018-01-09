const express = require('express');
const bodyParser = require('body-parser');
//Heroku mongoDB connection additions
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
var req = require('request');

var SCHEMING_COLLECTION = "scheming";
var HENCHNMEN_COLLECTION = "henchmen";

const path = require('path');
const http = require('http');
const app = express();

// API file for interacting with MongoDB
//const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
//app.get
//app.use('/api', api);



// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || 'mongodb://potato:potato@ds245337.mlab.com:45337/badguy', function (err, database) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    // Save database object from the callback for reuse.
    db = database;
    console.log("Database connection ready");


    //Set Port
    const port = process.env.PORT || '5000';
    app.set('port', port);

    const server = http.createServer(app);

    server.listen(port, () => console.log(`Running on localhost:${port}`));
});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}

app.get("/api/schemes/", (req, res) => {
    console.log("I am calling the database.")
    db.collection(SCHEMING_COLLECTION).find({}).toArray(function (err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get schemes.");
        } else {
            res.status(200).json(docs);
        }
    });
});

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    const index = path.join(__dirname, 'build', 'dist/index.html');
    res.sendFile(index);
});