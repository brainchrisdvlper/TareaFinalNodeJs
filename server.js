const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { readdirSync } = require("fs");

//swager
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//sentry
const Sentry = require("@sentry/node");
//const Tracing = require("@sentry/tracing");

Sentry.init({
  dsn: process.env.DNS_SENTRY,

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

//VARIABLES ENV
require("dotenv").config();

// app
const app = express();

// db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connection DB OK"))
  .catch((err) => console.log("Connection DB with Error:", err));

// middlewares
// comment this line for production or uninstall
app.use(morgan("dev"));
app.use(express.json({ limit: "2mb" }));
app.use(cors());

// routes middlewares
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "API Entrega Final C.Sanchez",
      description: "API Information",
      contact: {
        name: "csanchezb_dev",
      },
      servers: ["http://localhost:8000"],
    },
  },
  // definition the apis with swagger
  apis: ["./routes/*.js"],
};

// final definitions with swagger-express
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
