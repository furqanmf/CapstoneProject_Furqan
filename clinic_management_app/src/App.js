import { Route, Routes } from "react-router";
import './App.css';
import NavBar from './components/NavBar';
import NoPageFound from "./components/NoPageFound";
import SearchPatientContainer from "./components/SearchPatientContainer";
import AddPatientContainer from "./components/AddPatientContainer";
import EditPatientContainer from "./components/EditPatientContainer";
import store from "./store/myStore";
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/patient/search" element={<SearchPatientContainer />} />
        <Route path="/patient/add" element={<AddPatientContainer />} />
        <Route path="/patient/edit" element={<EditPatientContainer />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </Provider>

  );
};

function Home() {
  return (
    <div style={{ backgroundColor: "#fffff0", height:"1000px",width:"2000px"}}>
      <NavBar /><br />
      <h1 style={{ textAlign: "center" , color:"blue" }}>WELCOME TO CARE CLINIC </h1> <br />
      <h2 style={{ textAlign: "center" , color:"brown" }}> THIS IS A PATIENT MANAGEMENT SYSTEM</h2> <br />
      <h3 style={{ textAlign: "center" , color:"green" }}> Now you can Search,Add,Edit,Delete here ! </h3>
    </div>

  )
}

export default App;
