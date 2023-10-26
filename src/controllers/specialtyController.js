import specialtyService from "../services/specialtyService";

let controlCreateNewSpecialty = async (req, res) => {
  try {
    let infor = await specialtyService.createNewSpecialtyService(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: `Error from the server!`,
    });
  }
};

let controlGetAllSpecialty = async (req, res) => {
  try {
    let infor = await specialtyService.getAllSpecialtyService(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: `Error from the server!`,
    });
  }
};

let controlGetDetailSpecialtyById = async (req, res) => {
  try {
    let infor = await specialtyService.getDetailSpecialtyByIdService(
      req.query.id,
      req.query.location
    );
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: `Error from the server!`,
    });
  }
};
module.exports = {
  controlCreateNewSpecialty: controlCreateNewSpecialty,
  controlGetAllSpecialty: controlGetAllSpecialty,
  controlGetDetailSpecialtyById: controlGetDetailSpecialtyById,
};
