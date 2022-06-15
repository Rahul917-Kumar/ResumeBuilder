import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
//import Home from "./Components/Home";
import Signin from "./AuthProvider/Signin";
import SignUp from "./AuthProvider/SignUp";
import Dashboard from "./Components/Dashboard";
import ResumeFillUp from "./Components/ResumeFillUp";
import Alert from "./Components/Alert";
import TemplatePreview from "./Components/TemplatePrevies"


function App() {
  
  return (
    <div >  
            <Alert></Alert>
        
      <Router>
        
        
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Signin />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/resume" element={<ResumeFillUp />}></Route>
          <Route exact path="/preview" element={<TemplatePreview />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
