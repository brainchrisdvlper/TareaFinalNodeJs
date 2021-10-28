const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userVehicles = new mongoose.Schema(
  {
    idCompany: {
      type: ObjectId,
      ref: "companies",
    },
    idVehicle: {
      type: ObjectId,
      ref: "vehicles",
    },
    idUserApp: {
      type: ObjectId,
      ref: "userapp",
    },
    typeUser: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("userVehicles", userVehicles);
