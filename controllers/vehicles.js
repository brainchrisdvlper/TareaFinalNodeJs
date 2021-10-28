const Vehicles = require("../models/vehicles");

exports.create = async (req, res) => {
  try {
    const {
      idCompany,
      plateNumber,
      brand,
      model,
      year,
      vin,
      imgUrl,
      idPlatformVehicle,
      initialKm,
    } = req.body;

    res.json(
      await new Vehicles({
        idCompany,
        plateNumber,
        brand,
        model,
        year,
        vin,
        imgUrl,
        idPlatformVehicle,
        initialKm,
      }).save()
    );
  } catch (err) {
    res.status(400).send("Vehicule Not Create");
  }
};

exports.list = async (req, res) => {
  try {
    res.json(await Vehicles.find({}).sort({ createAt: -1 }).exec());
  } catch (err) {
    res.status(400).send("Vehicule Not exist");
  }
};
