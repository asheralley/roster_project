const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ShiftSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  timeStart: {
    type: Number,
    required: true,
  },
  timeEnd: {
    type: Number,
    required: true,
  },
  dateId: {
    type: String,
    required: true,
  },
});

module.exports = Shift = mongoose.model("shift", ShiftSchema);
