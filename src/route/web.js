import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import doctorController from "../controllers/doctorController";
import patientController from "../controllers/patientController";
import specialtyController from "../controllers/specialtyController";
import clinicController from "../controllers/clinicController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  router.get("/crud", homeController.getCRUD);

  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.displayGetCRUD);
  router.get("/edit-crud", homeController.getEditCRUD);

  router.post("/put-crud", homeController.putCRUD);
  router.get("/delete-crud", homeController.deleteCRUD);

  router.post("/api/login", userController.handleLoggin);
  router.get("/api/get-all-users", userController.handleGetAllUsers);
  router.post("/api/create-new-user", userController.handleCreateNewUser);
  router.put("/api/edit-user", userController.handleEditUser);
  router.delete("/api/delete-user", userController.handleDeleteUser);

  router.get("/api/allcode", userController.getAllCode);

  //Api Doctor-control
  router.get("/api/top-doctor-home", doctorController.controlGetTopDoctorHome);
  router.get("/api/get-all-doctors", doctorController.controlGetAllDoctors);
  router.post(
    "/api/save-infor-doctor",
    doctorController.controlPostInforDoctor
  );
  router.get(
    "/api/get-detail-doctor-by-id",
    doctorController.controlGetDetailDoctorById
  );
  router.post(
    "/api/bulk-create-schedule",
    doctorController.controlBulkCreateSchedule
  );
  router.get(
    "/api/get-schedule-doctor-by-date",
    doctorController.controlGetScheduleByDate
  );

  router.get(
    "/api/get-extra-infor-doctor-by-id",
    doctorController.controlGetExtraInforDoctorById
  );

  router.get(
    "/api/get-profile-doctor-by-id",
    doctorController.controlGetProfileDoctorById
  );

  router.get(
    "/api/get-list-patient-for-doctor",
    doctorController.controlGetListPatientForDoctor
  );

  router.post("/api/send-remedy", doctorController.controlSendRemedy);

  //Api Patient

  router.post(
    "/api/patient-book-appointment",
    patientController.controlPostBookAppointment
  );
  router.post(
    "/api/verify-book-appointment",
    patientController.controlPostVerifyBookAppointment
  );

  router.post(
    "/api/create-new-specialty",
    specialtyController.controlCreateNewSpecialty
  );
  router.get(
    "/api/get-all-specialty",
    specialtyController.controlGetAllSpecialty
  );
  router.get(
    "/api/get-detail-specialty-by-id",
    specialtyController.controlGetDetailSpecialtyById
  );

  //Rout clinic
  router.get("/api/get-all-clinic", clinicController.controlGetAllClinic);
  router.get(
    "/api/get-detail-clinic-by-id",
    clinicController.controlGetDetailClinicById
  );

  router.post("/api/create-new-clinic", clinicController.controlCreateClinic);

  return app.use("/", router);
};

module.exports = initWebRoutes;
