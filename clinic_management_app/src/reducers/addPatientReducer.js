const addPatientReducer = (state = {}, action) => {

    console.log(action);
    console.log(state);

    switch (action.type) {

        case "ADD_A_NEW_PATIENT_SUCCESSFUL":
            let newState3 = {...state };
            newState3.addPatientSuccess = action.serverMsg;
            return newState3;

           

            
        default:
            return state;

    };
}

export default addPatientReducer;