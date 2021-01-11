const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ShiftSchema = new Schema({
  timeStart: {
    type: Number,
    required: true,
  },
  timeEnd: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Shift = mongoose.model("shift", ShiftSchema);
