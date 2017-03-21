var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var LeaderSchema = new Schema({
  name: String,
  score: Number
});

var Leader = mongoose.model("Leader", LeaderSchema);

module.exports = Leader;