const express = require("express");

// const { body, validationResult } = require("express-validator");

const AppointmentModel = require("../models/appointment.model");
const inputFormatter = require("../middlewares/inputFormatter");
const router = express.Router();
router.use(express.json());
//create an appointment
router.post("/", inputFormatter, async (req, res) => {
  try {
    console.log(req.body);
    const appointment = await AppointmentModel.create(req.body);

    return res.status(201).send(appointment);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
// getting all appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await AppointmentModel.find({
      $sort: {
        appointmentdate: -1,
      },
    })
      .lean()
      .exec();
    return res.status(201).send(appointments);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
