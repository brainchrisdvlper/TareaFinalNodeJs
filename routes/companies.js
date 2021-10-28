const express = require("express");

const router = express.Router();

// middlewares

//const { autCheck, adminCheck } = require("../middlewares/auth");

/**
 * @swagger
 * /api/companies:
 *    post:
 *     summary: Create a companies
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               legalName:
 *                 type: string
 *                 description: Legal name.
 *                 example: Legal Name Example
 *               name:
 *                 type: string
 *                 description: short name.
 *                 example: Short Name Example
 *               legalCitizen:
 *                 type: string
 *                 description: legal Citizen.
 *                 example: 2222222-2
 *               countryCode:
 *                 type: string
 *                 description: country code.
 *                 example: CL
 *               phoneNumber:
 *                 type: string
 *                 description: phone Number.
 *                 example: +5696334567
 *               platformName:
 *                 type: string
 *                 description: platform Name GPS.
 *                 example: WIALON
 *               platformToken:
 *                 type: string
 *                 description: platform Token GPS.
 *                 example: 9ab5c7611b54e7723de2634cd9959e0aBAA24AA81FA82277FC73DB0E834AFBC3B03F369
 *               active:
 *                 type: boolean
 *                 description: platform Token GPS.
 *                 example: true
 *     responses:
 *       200:
 *         description: login
 *         schema:
 *           type: object
 *           $ref: '#/definitions/companies'
 */

/**
 * @swagger
 * /api/companies:
 *  get:
 *    summary: list companies
 *    description: Use to request for list companies
 *    responses:
 *      "200":
 *        description: A successful response
 */

/**
 * @swagger
 * definitions:
 *   companies:
 *     required:
 *       - legalName
 *       - name
 *       - legalCitizen
 *       - countryCode
 *       - name
 *       - phoneNumber
 *       - platformName
 *       - platformToken
 *     properties:
 *       legalName:
 *         type: string
 *       name:
 *         type: string
 *       legalCitizen:
 *         type: string
 */

// controller

const {
  create,
  // read,
  // update,
  // remove,
  list,
} = require("../controllers/companies");

// endpoints-routes
//router.post("/companies", autCheck, adminCheck, create);
router.post("/companies", create);
router.get("/companies", list);
//router.get("/companies/:slug", read);
//router.put("/companies/:slug", autCheck, adminCheck, update);
//router.delete("/companies/:slug", autCheck, adminCheck, remove);
//router.get("/companies/:_id", getCompanies);

module.exports = router;
