const mongo = require("mongoose");
require("dotenv").config();
const connection = mongo.connect(process.env.MONGODB);

module.exports = connection;