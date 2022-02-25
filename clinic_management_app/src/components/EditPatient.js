import { useState } from "react";
import NavBar from "./NavBar";
import { useLocation } from "react-router";


const EditPatient = (props) => {
    const _id = new URLSearchParams(useLocation().search).get('_id');
    const patientNumber = new URLSearchParams(useLocation().search).get('patientNumber');
    const name = new URLSearchParams(useLocation().search).get('name');
    const age = new URLSearchParams(useLocation().search).get('age');
    const gender = new URLSearchParams(useLocation().search).get('gender');
    const city = new URLSearchParams(useLocation().search).get('city');

    const [localState, setLocalState] = useState({ id: _id, patientNumber: patientNumber, name: name , age: age , gender: gender, city: city });


    const handleChange = (e) => {
        e.preventDefault();
        setLocalState({ ...localState, [e.target.name]: e.target.value });

    };

    const editPatient = (e) => {
        e.preventDefault();

        props.editPatient(localState);

    }


    return (
        <div style={{ backgroundColor: "#ffe4c4", width: "2000px", height: "100vh" }} >
            <NavBar /><br /><br />

            <h1 style={{ margin: "50px", textAlign: "center", justifyContent: "center" }}><b> EDIT PATIENT DATA </b></h1>


            <form id="frm1" name="form4" action="process.php"  >

                <span style={{ color: "red" }}>{localState.errorMsg}</span><br />

                <div style={{ textAlign: "center", justifyContent: "center" }} ><br />

                    {/* text */}
                    Patient Number : <input type="text" name="patientnumber" value={localState.patientNumber} onChange={handleChange} disabled /><br /><br />
                    Patient Name : <input type="text" name="name" value={localState.name} onChange={handleChange} disabled/><br /><br />
                    Patient Age : <input type="text" name="age" value={localState.age} onChange={handleChange} disabled /><br /><br />



                    {/*radiobutton */}
                    Gender :
                    <input type="radio" name="gender" value="Male"   onChange={handleChange} disabled/>Male 
                    <input type="radio" name="gender" value="Female" onChange={handleChange}disabled />Female

                    <br /><br />
                    City : <input type="text" name="city" value={localState.city} onChange={handleChange} /><br /><br />
                    &nbsp;
                    
                     <button style={{height:"50px", width:"100px"}} onClick={editPatient} >UPDATE PATIENT</button><br /><hr /><br />
                     {props.patientData.editPatientSuccess ? props.patientData.editPatientSuccess : ""}
                </div >

            </form>
        
        </div>


    )
}
export default EditPatient;