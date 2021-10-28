const mongoose = require("mongoose");

const companies = new mongoose.Schema(
  {
    legalName: {
      type: String,
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
    },
    legalCitizen: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    countryCode: {
      type: String,
      required: true,
      index: true,
    },
    phoneNumber: {
      type: String,
      required: "Fono de Compañia es requerido",
      index: true,
    },
    platformName: {
      type: String,
      required: "Plataforma de Compañia es requerido",
      index: true,
    },
    platformToken: {
      type: String,
      required: "Token de Compañia es requerido",
      unique: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Companies", companies);
