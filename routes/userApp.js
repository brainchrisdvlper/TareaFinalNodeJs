const express = require("express");

const router = express.Router();

// middlewares: validations
const { adminCheck, enterpriseCheck } = require("../middlewares/userApp");

// Controller
const { create, list } = require("../controllers/userApp");

/**
 * @swagger
 * /api/userApp:
 *  get:
 *    summary: list user
 *    description: Use to request for list users
 *    responses:
 *      "200":
 *        description: A successful response
 */

// endpoints

router.post("/userApp", adminCheck, create);
router.get("/userApp", list);

module.exports = router;
