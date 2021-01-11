const express = require("express");
const router = express.Router();

// Shift model
const Shift = require("../../models/Shift");

// @route GET to api/shifts
// @desc Get all shifts
// @access Public
router.get("/", (req, res) => {
  Shift.find({}).then((shifts) => res.json(shifts));
});

// @route POST to api/shifts
// @desc Create a shift
// @access Public
router.post("/", (req, res) => {
  const newShift = new Shift({
    timeStart: req.body.start,
    timeEnd: req.body.end,
    date: Date.now(),
  });

  newShift
    .save()
    .then((shift) => res.json(shift))
    .catch((err) => console.log(err));
});

module.exports = router;
