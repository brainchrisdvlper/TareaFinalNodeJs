const express = require("express");

const router = express.Router();

// controller

const { create, list, read } = require("../controllers/userVehicles");

router.post("/userVehicles", create);
router.get("/userVehicles", list);
router.get("/userVehicles/read", read);

module.exports = router;
