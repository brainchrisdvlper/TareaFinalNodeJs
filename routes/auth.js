const express = require("express");
const router = express.Router();

const { signin, signout, signup } = require("../controllers/auth");

// routes
router.post("/auth/signup", signup);
/**
 * @swagger
 * /api/auth/signup:
 *  post:
 *    summary: signup user
 *    description: Use to request signup user
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            properties:
 *              idCompany:
 *                  type: string
 *                  description: Id Company
 *                  example    : 6148da3fee39efbaaef058ba
 *              username:
 *                  type: string
 *                  example: usuarioprueba1
 *              name:
 *                  type: string
 *                  example: Usuario
 *              lastName:
 *                  type: string
 *                  example: Prueba
 *              email:
 *                  type: string
 *                  example: prueba@gmail.com
 *              password:
 *                  type: string
 *                  example: prueba
 *              citizenId:
 *                  type: string
 *                  example: 11111111-1
 *              phoneNumber:
 *                  type: string
 *                  example: +5696112233
 *              active:
 *                  type: boolean
 *                  example: true
 *              role:
 *                  type: string
 *                  example: suscriptor
 *    responses:
 *      "200":
 *         description: A successful response
 *      "400":
 *         description: A bad request response
 */

router.post("/auth/signin", signin);
/**
 * @swagger
 * /api/auth/signin:
 *  post:
 *    summary: signin user
 *    description: Use to request signin user
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            properties:
 *              email:
 *                  type: string
 *                  description: email user valid
 *              password:
 *                  type: string
 *                  description: password user valid
 *    responses:
 *      "200":
 *         description: A successful response
 *      "400":
 *         description: A bad request response
 */

router.get("/auth/signout", signout);

module.exports = router;
