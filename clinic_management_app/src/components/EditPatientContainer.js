import EditPatient from "./EditPatient";
import { connect } from 'react-redux';

// state is nothing but store that we are passing in the parameter
const mapStateToProps = (store) => {
    return {
        patientData: store.reducer3
    }
}

const mapDispatchToProps = (dispatch) => {
    //console.log("inside container");
    return {
        editPatient: (patientObj) => dispatch({type:"EDIT_A_PATIENT_TO_BACKEND", patient: patientObj}),
       

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPatient);