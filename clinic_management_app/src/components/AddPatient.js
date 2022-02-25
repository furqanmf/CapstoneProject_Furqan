import '../styles/Table.css'
import { useState } from "react";
import NavBar from "./NavBar";

const AddPatient = (props) => {

    const [localState3, setLocalState] = useState({patientNumber:null,name:"",age:"",gender:"",city:""})


    const handleChange = (e) => {
        e.preventDefault();
        setLocalState({ ...localState3, [e.target.name]: e.target.value });

    };

    const OnClickAddPatient = (e) => {
        e.preventDefault();
        props.AddPatient(localState3);
    }



    return (
        <div style={{ backgroundColor: "#e0ffff", width: "2000px", height: "100vh" }} >
            <NavBar /><br /><br />

            <h1 style={{margin: "50px",  textAlign: "center", justifyContent:"center" }}><b> NEW PATIENT REGISTERATION </b></h1>
            <br />
          
            <form id="frm1" name="form4" action="process.php"  >
               
                <span style={{ color: "red" }}>{localState3.errorMsg}</span>
               
                <div style={{ textAlign:"center",justifyContent:"center"}} ><br />
                   
                    {/* text */}
                    Enter Patient Number : <input type="text" name="patientNumber" value={localState3.patientNumber} onChange={handleChange} /><br /><br />
                    Enter Patient Name : <input type="text" name="name" value={localState3.name} onChange={handleChange} /><br /><br />
                    Enter Patient Age : <input type="text" name="age" value={localState3.age} onChange={handleChange} /><br /><br />



                    {/*radiobutton */}
                    Enter Gender :
                    <input type="radio" name="gender" value="Male" onChange={handleChange} />Male
                    <input type="radio" name="gender" value="Female" onChange={handleChange} />Female

                    <br /><br />
                    Enter City : <input type="text" name="city" value={localState3.city} onChange={handleChange} /><br /><br />

                     <button style={{ height: "50px", width: "200px" }} type="submit" name="button4" onClick={OnClickAddPatient}>Submit</button> <br /><br /><br />
                    {props.Data && props.patientData.addPatientSuccess ? props.patientData.addPatientSuccess : ""}
                </div >
            </form><br />
        </div>


    )
}

export default AddPatient;