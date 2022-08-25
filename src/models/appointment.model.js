const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    userInfo: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      },
      gender: {
        type: String,
        required: true,
      },
    },
    email: {
      type: String,
    },
    mobileNumber: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
    },
    appointmentdate: {
      type: Date,
      required: true,
    },
    pincode: {
      tyep: Number,
    },
    description: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const AppointmentModel = mongoose.model("appointment", appointmentSchema);

module.exports = AppointmentModel;
