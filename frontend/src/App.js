import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hrlogin from "./Components/Hrlogin";
import Training from "./Components/Training";
import Home from "./Components/Home";
import Policies from "./Components/Policies";
import Navbar from "./Components/Navbar";
import EmployeeProfile from "./Components/EmployeeProfile";
import Employeelogin from "./Components/Employeelogin";
import Email from "./Components/Email";
import Contact from "./Components/Contact";
import Equitments from "./Components/Equitments";


function App() {
  return (
    <>
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/EmployeeProfile" element={<EmployeeProfile />} />
        <Route path="/Training" element={<Training />} />
        <Route path="/Policies" element={<Policies />} />
        <Route path="/Hrlogin" element={<Hrlogin />} />
        <Route path="/Employeelogin" element={<Employeelogin />} />
        <Route path="/Email" element={<Email />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Equitments" element={<Equitments />} />
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
