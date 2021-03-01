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
    name: req.body.name,
    timeStart: req.body.start,
    timeEnd: req.body.end,
    // change this date to new dateId
    date: req.body.id,
  });

  newShift
    .save()
    .then((shift) => res.json(shift))
    .catch((err) => console.log(err));
});

// @route POST to api/shifts
// @desc delete a shift
// @access Public
router.delete("/:id", (req, res) => {
  Shift.findById(req.params.id).then((shift) =>
    shift
      .remove()
      .then(() => res.json({ success: true }))
      .catch((err) => res.status(404).json({ success: false }))
  );
});

module.exports = router;
