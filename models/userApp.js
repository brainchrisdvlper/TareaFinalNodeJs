const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { ObjectId } = mongoose.Schema;

const userAppSchema = new mongoose.Schema(
  {
    idCompany: {
      type: ObjectId,
      ref: "companies",
    },
    username: {
      type: String,
      required: "Usuario es requerido",
      unique: true,
    },
    name: {
      type: String,
      required: "Nombre de Usuario es requerido",
    },
    lastName: {
      type: String,
      required: "Apellido de Usuario es requerido",
    },
    email: {
      type: String,
      required: "Email de Usuario es requerido",
    },
    hashed_password: {
      type: String,
      required: true,
    },
    citizenId: {
      type: String,
      required: "Identificacion de Usuario es requerido",
    },
    phoneNumber: {
      type: String,
      required: "Fono de Usuario es requerido",
    },
    active: {
      type: Boolean,
      required: true,
    },
    role: {
      type: String,
    },
  },
  { timestamps: true }
);

// virtual field
userAppSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

userAppSchema.methods = {
  authenticate: function (plainText) {
    return bcrypt.compareSync(plainText, this.hashed_password);
  },

  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return bcrypt.hashSync(password, 10);
    } catch (err) {
      return err;
    }
  },
};

module.exports = mongoose.model("UserApp", userAppSchema);
