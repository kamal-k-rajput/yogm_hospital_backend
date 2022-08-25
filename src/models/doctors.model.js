const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: Number,
      required: true,
    },
    education: [
      {
        degreeName: {
          type: String,
          required: true,
        },
        collegeName: {
          type: String,
          required: true,
        },
      },
    ],
    specialisation: [
      {
        type: String,
        required: true,
      },
    ],
    location: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const DoctorsModel = new mongoose.model("doctor", doctorSchema);

module.exports = DoctorsModel;
