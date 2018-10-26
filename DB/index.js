//Create DB and connection here
const mongoose = require('mongoose');
const mongoUri = 'mongodb://127.0.0.1/restingdb';

const db = mongoose.connect(mongoUri);

module.exports = db;