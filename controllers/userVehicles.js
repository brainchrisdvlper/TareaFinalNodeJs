const userApp = require("../models/userVehicles");
const Companies = require("../models/companies");

exports.create = async (req, res) => {
  try {
    const { idCompany, idVehicle, idUserApp, typeUser } = req.body;

    res.json(
      await new userApp({
        idCompany,
        idVehicle,
        idUserApp,
        typeUser,
      }).save()
    );
  } catch (error) {
    res.status(400).send("Not created association with vehicle/user :" + error);
  }
};

exports.list = async (req, res) => {
  try {
    res.json(await userApp.find({}).sort({ createdAt: -1 }).exec());
  } catch (error) {
    res.status(400).send("Not found Vehicles/Users");
  }
};

exports.read = async (req, res) => {
  console.log("datos :" + req.params.email);
  //let users = await userApp.findOne({ email: req.params.email }).exec();
  // const companies = await Companies.find({ idCompany })
  //   .populate("companies")
  //   .exec();
  res.json({ message: "datos" + req.params.email });
  //res.json({
  //  users,
  //    companies,
  // });
};
