const { response } = require("express");
const Companies = require("../models/companies");

axios = require("axios");

exports.getToken = async (req, res, next) => {
  const { id } = req.body;
  //console.log("pasando por getToken :" + id);

  // buscar Token por Empresa
  const platform = await Companies.findById(id).exec();

 

  if (!platform) {
    errTxt = JSON.parse('{"Err": "No encontrado"}');
    //throw new Error("error del backend");
    //   console.log("No encontrado");
   

    res.send(errTxt).status("400");
  } else {
    // console.log("encontrado :" + platform.platformToken);

    cadena_cmd =
      process.env.BASE_URL_WIALON +
      `svc=token/login&params={"token": "${platform.platformToken}","operatingAs": "apiMovinguard"}`;

    // console.log("cadena: " + cadena_cmd);
    const resp = await axios.get(cadena_cmd);
    sid = resp.data.eid;
    res.locals.sid = resp.data.eid;
    // console.log("resultado sid: " + sid);
    //    res.json({ sid });
    next();
  }
};
