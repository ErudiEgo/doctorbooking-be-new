import { reject } from "lodash";
import clinicService from "../services/clinicService";

let controlCreateClinic = async (req, res) => {
  try {
    let infor = await clinicService.createClinicService(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: `Error from the server!!!`,
    });
  }
};

let controlGetAllClinic = async (req, res) => {
  try {
    let infor = await clinicService.getAllClinicService(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: `Error from the server!! Now`,
    });
  }
};
let controlGetDetailClinicById = async (req, res) => {
  try {
    let infor = await clinicService.getDetailClinicByIdService(req.query.id);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: `Error from the server!!! Now`,
    });
  }
};
module.exports = {
  controlCreateClinic: controlCreateClinic,
  controlGetAllClinic: controlGetAllClinic,
  controlGetDetailClinicById: controlGetDetailClinicById,
};
