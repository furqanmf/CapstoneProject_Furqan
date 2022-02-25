import AddPatient from "./AddPatient";
import { connect } from 'react-redux';

const mapStateToProps = (store) => {
    return {
        patientData: store.reducer2


    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        AddPatient: (patientObj) => dispatch({ type: "ADD_A_NEW_PATIENT_TO_BACKEND", patient: patientObj }),
       
        

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPatient);