const express = require("express");

const router = express.Router();

// middlewares

const { getToken } = require("../middlewares/wialon");

// controller

const {
  getVehiclesAllCia,
  getVehicleCia,
  getVehicleProfile,
  execVehicleCommand,
  getGeolocation,
} = require("../controllers/wialon");

// endpoints-routes
router.get("/wialon/getVehiclesAllCia", getToken, getVehiclesAllCia);
router.get("/wialon/getVehicleCia", getToken, getVehicleCia);
router.get("/wialon/getVehicleProfile", getToken, getVehicleProfile);
router.get("/wialon/getGeolocation", getToken, getGeolocation);
router.post("/wialon/execVehicleCommand", getToken, execVehicleCommand);

module.exports = router;
