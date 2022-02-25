import { put, takeLatest, all } from "redux-saga/effects";

//Search Patient
function* searchPatient(action) {
  console.log("Inside Patient saga");
  console.log(action);
  const json = yield fetch("http://localhost:3000/patients/search/name/" + action.name).then((response) =>

    response.json()
  );
  yield put({ type: "SEARCH_A_PATIENT_SUCCESSFUL", json: json });
}

function* actionWatcher() {
  yield takeLatest("SEARCH_PATIENTS_WITH_NAME", searchPatient);
}


//Delete patient
function* deletePatient(action) {
  console.log("Inside patient saga delete");
  console.log(action);
  const json = yield fetch("http://localhost:3000/patients/delete/" + action.id).then((response) =>

    response.json()
  );
  yield put({ type: "REMOVE_PATIENT", json: json });
}
function* deleteActionWatcher() {
  yield takeLatest("REMOVE_PATIENT_WITH_ID", deletePatient);
}


// Add a new patient

function* addPatient(action) {
  var bodyContent = {
    patientNumber:action.patient.patientNumber,
    name: action.patient.name,
    age: action.patient.age,
    gender:action.patient.gender,
    city:action.patient.city,
  };

  var stringifiedBody = JSON.stringify(bodyContent);
  console.log("Inside saga patients");

  const serverResponse = yield fetch("http://localhost:3000/patients/add", {
    method: "POST",
    body: stringifiedBody,
    headers: {
      "Content-type": "application/json;chartset=UTF-8",
    },
  }).then((res) => res.json());
  //   .then((res) => console.log(`data sent successfully to the backed and  ${res.msg}`));
  yield put({ type: "ADD_A_NEW_PATIENT_SUCCESSFUL", serverMsg: serverResponse.msg });

}

function* actionWatcher2() {
  yield takeLatest("ADD_A_NEW_PATIENT_TO_BACKEND", addPatient);
}

//Edit a patient
function* editNewPatient(action) {
  var bodyContent = {
    city: action.patient.city,
  };

  var stringifiedBody = JSON.stringify(bodyContent);
  console.log("Inside saga patients");

  const serverResponse = yield fetch("http://localhost:3000/patients/edit/" + action.patient._id, {
    
    method: "POST",
    body: stringifiedBody,
    headers: {

      
      "Content-type": "application/json;chartset=UTF-8",
    },
    
  }).then((res) => res.json());

  yield put({ type: "EDIT_A_PATIENT_SUCCESSFUL", serverMsg: serverResponse.msg, });
  
}

function* editActionWatcher() {
  yield takeLatest("EDIT_A_PATIENT_TO_BACKEND", editNewPatient);
}



// for all the above sagas, create root saga
export default function* rootSaga() {
  yield all([
    actionWatcher(),
    actionWatcher2(),
    deleteActionWatcher(),
    editActionWatcher()
  ]);
}