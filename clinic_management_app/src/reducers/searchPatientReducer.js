const searchPatientReducer = (state = {}, action) => {
    console.log(action);
    console.log(state);
    switch (action.type) {
        case "SEARCH_A_PATIENT_SUCCESSFUL":
            let newState = { ...state, searchResults: action.json }
            newState.searchPatientSuccess = "SUCCESSFULLY ADDED THE PATIENT";
            console.log(newState);
            return newState;

        case "REMOVE_PATIENT":
            let newState1 = { ...state, deleteResults: action.json }
            newState1.deletePatientSuccess = "SUCCESSFULLY DELETED THE PATIENT";
            return newState1;



        default:
            return state;

    };
}

export default searchPatientReducer;