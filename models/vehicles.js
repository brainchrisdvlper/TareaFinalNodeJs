const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const vehicles = new mongoose.Schema(
  {
    idCompany: {
      type: ObjectId,
      ref: "companies",
    },
    plateNumber: {
      type: String,
      required: "Identificacion de Vehiculo es requerido",
      index: true,
      unique: true,
    },
    brand: {
      type: String,
      required: "Marca de Vehiculo es requerido",
    },
    model: {
      type: String,
      required: "Modelo de Vehiculo es requerido",
    },
    year: {
      type: Number,
      required: "Año de Vehiculo es requerido",
      maxlength: 4,
    },
    vin: {
      type: String,
      required: "VIN de Vehiculo es requerido",
    },
    imgUrl: {
      type: String,
    },
    idPlatformVehicle: {
      type: String,
      required: "Id de Vehiculo es requerido",
    },
    initialKm: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vehicles", vehicles);
