//Create DB and connection here
const mongoose = require('mongoose');
const mongoUri = 'mongodb://ashcoca:12345a@ds157923.mlab.com:57923/restingdb';

const db = mongoose.connect(mongoUri, { useNewUrlParser: true });

module.exports = db;