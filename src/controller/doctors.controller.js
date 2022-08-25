const express = require("express");

const DoctorsModel = require("../models/doctors.model");

const router = express.Router();
router.use(express.json());
//for getting all doctors list
router.get("/doctors", async (req, res) => {
  try {
    const doctors = await DoctorsModel.find({}).lean().exec();
    return res.status(201).json.send(doctors);
  } catch (err) {
    return res.status(500).json.send({ err });
  }
});
// find a doctor by name

// edit doctors details

// creating a new doctor
router.post("/doctors", async (req, res) => {
  try {
    const doctor = await DoctorsModel.create(req.body);
    return res.status(201).json.send(doctor);
  } catch (err) {
    return res.status(500).json.send({ err });
  }
});

module.exports = router;
