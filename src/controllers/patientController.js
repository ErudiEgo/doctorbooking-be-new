import patientService from "../services/patientService";

let controlPostBookAppointment = async (req, res) => {
  try {
    let infor = await patientService.postBookAppointmentService(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: `Error from the server!`,
    });
  }
};

let controlPostVerifyBookAppointment = async (req, res) => {
  try {
    let infor = await patientService.postVerifyBookAppointmentService(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    return res.status(200).json({
      errCode: -1,
      errMessage: `Error from the server!`,
    });
  }
};

module.exports = {
  controlPostBookAppointment: controlPostBookAppointment,
  controlPostVerifyBookAppointment: controlPostVerifyBookAppointment,
};
