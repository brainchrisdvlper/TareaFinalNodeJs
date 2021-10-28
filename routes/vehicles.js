const express = require("express");

const router = express.Router();

// middlewares

//const { autCheck, adminCheck } = require("../middlewares/auth");

/**
 * @swagger
 * /api/vehicles:
 *  get:
 *    summary: list vehicles
 *    description: Use to request for list vehicles
 *    responses:
 *      "200":
 *        description: A successful response
 */

// controller

const {
  create,
  // read,
  // update,
  // remove,
  list,
} = require("../controllers/vehicles");

// endpoints-routes
//router.post("/companies", autCheck, adminCheck, create);
router.post("/vehicles", create);
router.get("/vehicles", list);
//router.get("/companies/:slug", read);
//router.put("/companies/:slug", autCheck, adminCheck, update);
//router.delete("/companies/:slug", autCheck, adminCheck, remove);
//router.get("/companies/:_id", getCompanies);

module.exports = router;
