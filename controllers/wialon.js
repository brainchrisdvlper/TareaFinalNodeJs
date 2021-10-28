axios = require("axios");
//sentry

exports.getVehiclesAllCia = async (req, res) => {
  try {
    const sid = res.locals.sid;
    Url_search =
      process.env.BASE_URL_WIALON +
      "svc=core/search_items&params=" +
      `{"spec":{"itemsType":"avl_unit","propName":"sys_name","propValueMask":"*","sortType":"sys_name"},"force":1,"flags":1,"from":0,"to":0}"&sid=` +
      sid;
    console.log(Url_search);
    //console.log("variable local:" + res.locals.sid);

    // buscar Token por Empresa
    const vehicleAllCia = await axios.get(Url_search);
    // console.log(vehicleCia.data.items);
    //console.log(res);
    res.status("200").send(vehicleAllCia.data.items);
    // res.send();
  } catch (err) {
    res.status("400").send(err);
  }
};

exports.getVehicleCia = async (req, res) => {
  try {
    const { plateNumber } = req.body;
    const sid = res.locals.sid;
    Url_search =
      process.env.BASE_URL_WIALON +
      "svc=core/search_items&params=" +
      `{"spec":{"itemsType":"avl_unit","propName":"sys_name","propValueMask":"${plateNumber}","sortType":"sys_name"},"force":1,"flags":8388608,"from":0,"to":0}"&sid=` +
      sid;
    //console.log(Url_search);
    //console.log("variable local:" + res.locals.sid);

    // buscar Token por Empresa
    const vehicleCia = await axios.get(Url_search);
    // console.log(vehicleCia.data.items);
    //console.log(res);
    if (vehicleCia.data.items !== null) {
      res.status("200").send(vehicleCia.data.items);
    } else {
      // res.send();
      errTxt = JSON.parse('{"Err": "No encontrado"}');
      res.status("400").send(errTxt);
    }
  } catch (err) {
    res.status("400").send(err);
  }
};

exports.getVehicleProfile = async (req, res) => {
  try {
    const { plateNumber } = req.body;
    const sid = res.locals.sid;
    Url_search =
      process.env.BASE_URL_WIALON +
      "svc=core/search_items&params=" +
      `{"spec":{"itemsType":"avl_unit","propName":"sys_name","propValueMask":"${plateNumber}","sortType":"sys_name"},"force":1,"flags":4611686018427387903,"from":0,"to":0}"&sid=` +
      sid;
    //console.log(Url_search);
    //console.log("variable local:" + res.locals.sid);

    // buscar Token por Empresa
    const vehicleCia = await axios.get(Url_search);
    console.log("datos :" + vehicleCia.data.items);

    if (vehicleCia.data.items !== null) {
      res.status("200").send(vehicleCia.data.items);
    } else {
      // res.send();
      errTxt = JSON.parse('{"Err": "No encontrado"}');
      res.status("400").send(errTxt);
    }
  } catch (err) {
    res.status("400").send(err);
  }
};

exports.execVehicleCommand = async (req, res) => {
  try {
    const { plateNumber, command } = req.body;
    const sid = res.locals.sid;
    Url_search =
      process.env.BASE_URL_WIALON +
      "svc=unit/exec_cmd&params=" +
      `{"itemId":23415191,"commandName":"${command}","linkType":"gsm","param":"","timeout":1}&sid=` +
      sid;
    console.log(Url_search);
    console.log("variable local:" + res.locals.sid);

    // buscar Token por Empresa
    const exeCommand = await axios.get(Url_search);
    //    console.log(exeCommand.statusText);
    //  console.log(exeCommand.status);
    console.log(exeCommand.data.error);

    //console.log(exeCommand);

    if (exeCommand.data.error === 5) {
      errTxt = JSON.parse('{"Status": "NOK"}');
      res.status("400").send(errTxt);
    } else {
      // res.send();
      errTxt = JSON.parse('{"Status": "OK"}');
      res.status("200").send(errTxt);
    }
  } catch (err) {
    res.sendStatus(400).send(errTxt);
  }
};

exports.getGeolocation = async (req, res) => {
  try {
    const { plateNumber } = req.body;
    const sid = res.locals.sid;
    Url_search =
      process.env.BASE_URL_WIALON +
      "svc=core/search_items&params=" +
      `{"spec":{"itemsType":"avl_unit","propName":"sys_name","propValueMask":"${plateNumber}","sortType":"sys_name"},"force":1,"flags":1024,"from":0,"to":0}"&sid=` +
      sid;
    //console.log(Url_search);
    //console.log("variable local:" + res.locals.sid);

    // buscar Token por Empresa
    const Geolocation = await axios.get(Url_search);
    console.log("datos :" + Geolocation.data);

    if (Geolocation.data.items !== null) {
      res.status("200").send(Geolocation.data);
    } else {
      errTxt = JSON.parse('{"Err": "No encontrado"}');
      res.status("400").send(errTxt);
    }
  } catch (err) {
    res.status("400").send(err);
  }
};
