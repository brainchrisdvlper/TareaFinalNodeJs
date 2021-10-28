const Companies = require("../models/companies");
const slugify = require("slugify");

// create

exports.create = async (req, res) => {
  try {
    const {
      legalName,
      name,
      legalCitizen,
      countryCode,
      phoneNumber,
      platformName,
      platformToken,
      active,
    } = req.body;

    res.json(
      await new Companies({
        legalName,
        name,
        legalCitizen,
        countryCode,
        phoneNumber,
        platformName,
        platformToken,
        active,
      }).save()
    );
    //res.status(200).send("Company created");
  } catch (err) {
    res.status(400).send("Company create failed" + err);
  }
};
exports.list = async (req, res) => {
  try {
    res.json(await Companies.find({}).sort({ createAt: -1 }).exec());
  } catch (err) {
    res.status(400).send("Error Get Companies");
  }
};
