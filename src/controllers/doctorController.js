import doctorService from "../services/doctorService";

let controlGetTopDoctorHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 10;

  try {
    let response = await doctorService.getTopDoctorHomeService(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: `Error from server...!`,
    });
  }
};

let controlGetAllDoctors = async (req, res) => {
  try {
    let doctors = await doctorService.getAllDoctorsService();
    return res.status(200).json(doctors);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: `Error from the server!`,
    });
  }
};

let controlPostInforDoctor = async (req, res) => {
  try {
    let response = await doctorService.saveDetailInforDoctorService(req.body);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: `Error from the server!`,
    });
  }
};

let controlGetDetailDoctorById = async (req, res) => {
  try {
    let infor = await doctorService.getDetailDoctorByIdService(req.query.id);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: `Error from the server!`,
    });
  }
};

let controlBulkCreateSchedule = async (req, res) => {
  try {
    let infor = await doctorService.bulkCreateScheduleService(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: `Error from the server!`,
    });
  }
};

let controlGetScheduleByDate = async (req, res) => {
  try {
    let infor = await doctorService.getScheduleByDateService(
      req.query.doctorId,
      req.query.date
    );
    return res.status(200).json(infor);
  } catch (e) {
    console(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: `Error from the server!`,
    });
  }
};

let controlGetExtraInforDoctorById = async (req, res) => {
  try {
    let infor = await doctorService.getExtraInforDoctorByIdService(
      req.query.doctorId
    );
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: `Error from the server~!`,
    });
  }
};

let controlGetProfileDoctorById = async (req, res) => {
  try {
    let infor = await doctorService.getProfileDoctorByIdService(
      req.query.doctorId
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

let controlGetListPatientForDoctor = async (req, res) => {
  try {
    let infor = await doctorService.getListPatientForDoctorService(
      req.query.doctorId,
      req.query.date
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

let controlSendRemedy = async (req, res) => {
  try {
    let infor = await doctorService.sendRemedyService(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: `This is controlSendRemedy. Error from the server!`,
    });
  }
};

module.exports = {
  controlGetTopDoctorHome: controlGetTopDoctorHome,
  controlGetAllDoctors: controlGetAllDoctors,
  controlPostInforDoctor: controlPostInforDoctor,
  controlGetDetailDoctorById: controlGetDetailDoctorById,
  controlBulkCreateSchedule: controlBulkCreateSchedule,
  controlGetScheduleByDate: controlGetScheduleByDate,
  controlGetExtraInforDoctorById: controlGetExtraInforDoctorById,
  controlGetProfileDoctorById: controlGetProfileDoctorById,
  controlGetListPatientForDoctor: controlGetListPatientForDoctor,
  controlSendRemedy: controlSendRemedy,
};
