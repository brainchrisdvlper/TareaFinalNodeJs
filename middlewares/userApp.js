const User = require("../models/userApp");

// middlewares functions

//exports.authCheck = async (req, res, next) => {

exports.adminCheck = async (req, res, next) => {
  const { username } = req.body;

  console.log(username);

  const adminUser = await User.findOne({ username }).exec();

  if (adminUser.role !== "admin") {
    res.status(403).json({
      err: "Admin resource. Access Denied",
    });
  } else {
    next();
  }
};

exports.enterpriseCheck = async (req, res, next) => {
  const { email } = req.body;

  const adminUser = await User.findOne({ email }).exec();

  if (adminUser.role !== "enterprise") {
    res.status(403).json({
      err: "Enterprise resource. Access Denied",
    });
  } else {
    next();
  }
};
