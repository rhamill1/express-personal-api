var mongoose = require("mongoose");

// process.env.MONGODB_URI
module.exports.Book = require("./book.js");
module.exports.Profile = require("./profile.js");

mongoose.connect( "mongodb://localhost/personal-api");
