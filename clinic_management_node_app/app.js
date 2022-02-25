import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import "./src/models/appointments.js";
import "./src/models/doctors.js";
import "./src/models/patientHistory.js";
import "./src/models/patients.js";
import "./src/models/specialities.js";
import "./src/models/timeslots.js";

import bodyParser from 'body-parser';

// adding logger

import SimpleNodeLoggerr from 'simple-node-logger';
const opts = {
                logFilePath:'mylogfile.log',
                timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
        };
const log = SimpleNodeLoggerr.createSimpleLogger( opts );



const connectionStr = `mongodb://localhost:27017/clinicdb`;
mongoose.connect(connectionStr)
  .then(() => {
    console.log(`connected to database`);
    log.info(`connected to mongodb`);
  })
  .catch((err) => {
    console.log(err.message);
    log.err(`err.mesage`);

  })

const doctors = mongoose.model("doctors");// doctors collection
const appointments = mongoose.model("appointments");// appointments collection
const patients = mongoose.model("patients");// patients collection
const patientHistory = mongoose.model("patientHistory");// patientHistory collection
const specialities = mongoose.model("specialities");// specialities collection
const timeslots = mongoose.model("timeslots");// timeslots collection

const app = express();

app.use(express.static('public'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello")
});

// GET all doctors
app.get('/doctors', (req, res) => {
  doctors.find({}, function (err, docs) {
    res.send(docs);
    log.info(`searched for all the doctors`);
  });
});

// GET all appointments
app.get('/appointments', (req, res) => {
  appointments.find({}, function (err, docs) {
    res.send(docs);
    log.info(`searched for all the apponitments`);
  });
});

// GET all patients
app.get('/patients', (req, res) => {
  patients.find({}, function (err, docs) {
    res.json(docs);
    log.info(`searched for all the patients`);
  });
});

// GET all patientHistory
app.get('/patientHistory', (req, res) => {
  patientHistory.find({}, function (err, docs) {
    res.send(docs);
  })
    .catch((err) => {
      console.log(err);
    });

});

// GET all specialities
app.get('/specialities', (req, res) => {
  specialities.find({}, function (err, docs) {
    res.json(docs);
  });
});

// GET all timeslots
app.get('/timeslots', (req, res) => {
  timeslots.find({}, function (err, docs) {
    res.json(docs);
  });
});

// GET patients by name
app.get('/patients/search/name/:name', (req, res) => {
  log.info(`obtain request for searching a patient by its name ${req.params.name}`)
  const pName = req.params.name;
  patients.find({ name: pName }, function (err, docs) {
    res.json(docs);

  });
});

// GET patients by gender
app.get('/patients/search/gender/:gender', (req, res) => {
  log.info(`obtain request for searching a patient by gender ${req.params.gender}`) 
  const pGender = req.params.gender;
  patients.find({ gender:pGender }, function (err, docs) {
    res.json(docs);

  });
});

//POST a new patient
app.post('/patients/add', (req, res) => {
  log.info(`obtain request for adding a patient ${req.body.name}`)
  patients.create(req.body).then((ans) => {
    res.status(200).send({ msg: "Patient added successfully" });
    log.info(`a new patient is added to the database with ID ${doc._id}`) 
  }).catch((err) => {
    console.log(err);
  });


});

//Edit patients by id
app.post('/patients/edit/:_id', (req, res) => {  
  log.info(`obtain request for editing a patient by its ID ${req.body}`)
  patients.findByIdAndUpdate(req.params._id, req.body).then((ans) => {
    log.info(`patient info is updated`)
    res.status(200).send({ msg: "Patient Updated successfully" });
    log.info(`one patient info is updated to the database with ID ${doc._id}`)
  }).catch((err) => {
    log.error(err);
  });


});

// DELETE patient by id
app.get('/patients/delete/:id', (req, res) => {
  log.info(`obtain request for deleting a patient by its ID ${req.params.id}`);
  patients.findByIdAndDelete(req.params.id).then((ans) => {
    og.info("one patient deleted")
    res.status(200).send({ msg: "Patient removed successfully" });
    log.info(`one patient is deleted to the database with ID ${doc._id}`) 
    log.info(`patient deleted by its ID`)
  }).catch((err) => {
    log.error(err);
    res.status(400).send({msg:"Patient with that id doesn't exist"});
  });


});

export default app;