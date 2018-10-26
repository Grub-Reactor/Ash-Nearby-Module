//Create DB and connection here
const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/RestDB';

const db = mongoose.connect(mongoUri);

module.exports = db;