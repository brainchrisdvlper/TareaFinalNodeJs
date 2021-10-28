const User = require("../models/userApp");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

const { errorHandler } = require("../help/dbErrorHandler");

// middlewares rest
exports.signup = (req, res) => {
  const user = new User(req.body);

  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    console.log(user);
    user.salt = undefined;
    user.hashed_password = undefined;

    console.log();
    res.json({
      user,
    });
  });
};
exports.signin = (req, res) => {
  // find the user based on email

  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User does not exist. Please signup",
      });
    }

    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password dont match",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.cookie("t", token, { expire: process.env.JWT_EXPIRATION_TIME });
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, name, email, role } });
  });
};
exports.signout = (req, res) => {
  res.clearCookie("t");
  res.json({ message: "Signout success" });
};

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  userProperty: "auth",
});

exports.isAuth = (req, res) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!user) {
    return res.status(403).json({
      error: "Access denied",
    });
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.role === "Admin") {
    return res.status("403").json({
      error: "Admin resource, Access denied",
    });
  }
};
