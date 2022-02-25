const editPatientReducer = (state = {}, action) => {
    
    //console.log("inside reducer");
    // console.log(action);
    // console.log(state);

    switch (action.type) {

        case "EDIT_A_PATIENT_SUCCESSFUL":
            let newState2 = { ...state };
            newState2.editPatientSuccess = action.serverMsg;
            return newState2;


        default:
            return state;

    };
}

export default editPatientReducer;