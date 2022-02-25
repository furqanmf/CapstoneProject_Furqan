import { useState } from "react";
import '../styles/Table.css';
import { TextField } from '@mui/material';
import { Link } from "react-router-dom";
import NavBar from "./NavBar";


const SearchPatient = (props) => {
    
    const [localState, setLocalState] = useState({ name: "" });

    const handleChange = (e) => {
        e.preventDefault();
        setLocalState({ ...localState, [e.target.name]: e.target.value });
        console.log(setLocalState);
        console.log(e.target.value);
        console.log(e.target.name);


    }

    const searchPatient = (e) => {
        e.preventDefault();
        props.searchPatient(localState.name[0].toUpperCase()+localState.name.substring(1));
    }

    // const [localState1, setLocalState1] = useState({ patientToRemove: "" });

    // const handleChange1 = (e) => {
    //     e.preventDefault();
    //     setLocalState1({ ...localState1, patientToRemove: e.target.value });

    // };


    const removePatient = (e,patientId) => {
        e.preventDefault();
        props.removePatient(patientId)

    }

    return (
        <div>
        <NavBar />
            <h1 style={{ margin: "50px" }}><b>SEARCH BY PATIENT NAME </b></h1>
            <form style={{ margin: "50px" }}>

                <TextField fullWidth label="Enter Patient Name" id="fullWidth" name="name"  value={localState.name} onChange={handleChange} /><br /><br /><button onClick={searchPatient}>SEARCH</button><hr />
                
                
                
                <table style={{ width: "100%" }}>
                    <tr>
                        <th>PATIENT NUMBER</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>GENDER</th>
                        <th>CITY</th>
                        <th>EDIT ACTION</th>
                        <th>DELETE ACTION</th>

                    </tr>
                    {props.patientData.searchResults ? props.patientData.searchResults.map((item, key) => <tr><td> {item.patientNumber}</td>
                        <td> {item.name}  </td>
                        <td> {item.age}   </td>
                        <td> {item.gender}</td>
                        <td> {item.city}  </td>
                        <td><Link to={{pathname:"/patient/edit/?patientNumber="+item.patientNumber+"&_id="+item._id+"&name="+item.name+"&age="+item.age+"&gender="+item.gender+"&city="+item.city}}>EDIT</Link></td>
                        <td><button onClick={(e) => removePatient(e,item._id)}> DELETE</button></td></tr>):""}
                </table>

                {props.patientData.deletePatientSuccess ?  props.patientData.deletePatientSuccess +  " Refresh the search results to view updated list":""}
           
            </form>
        </div>
    )
}


export default SearchPatient;