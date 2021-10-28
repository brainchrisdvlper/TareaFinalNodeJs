const userApp = require("../models/userApp");

exports.create = async (req, res) => {
  try {
    const {
      idCompany,
      username,
      name,
      lastName,
      email,
      citizenId,
      phoneNumber,
      active,
      role,
    } = req.body;

    res.json(
      await new userApp({
        idCompany,
        username,
        name,
        lastName,
        email,
        citizenId,
        phoneNumber,
        active,
        role,
      }).save()
    );
  } catch (error) {
    res.status(400).send("User Not Created :" + error);
  }
};

exports.list = async (req, res) => {
  res.json(await userApp.find({}).sort({ createAt: -1 }).exec());
};
