import SearchPatient from './SearchPatient';
import { connect } from 'react-redux';

// state is nothing but store that we are passing in the parameter
const mapStateToProps = (store) => {
    return {
        patientData: store.reducer1
    }
}

const mapDispatchToProps = (dispatch) => {
    //console.log();
    return {
        searchPatient: (nameVal) => dispatch({ type: "SEARCH_PATIENTS_WITH_NAME", name: nameVal }),
        removePatient: (patientId) => dispatch({type:"REMOVE_PATIENT_WITH_ID", id: patientId }),
       // editPatient: (PatientObj) => dispatch({type:"EDIT_A_DOCTOR_TO_BACKEND", Patient: PatientObj}),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPatient);