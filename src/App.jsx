import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Form from './components/Form';
import Givegoldloan from './components/Givegoldloan';
import WebcamComponent from './components/webcam/';
import LandingPage from './components/Landing';


function App() {
  return (
    <Router>
      <Routes>

      <Route path="/"   element={<LandingPage/>} />

      <Route path="/register"   element={<Register/>} />
        {/* <Route path="/register"   element={<Register />} /> */}
        <Route path="/main" element={<Form />} />
        <Route path="/loandetails" element={<Givegoldloan/>} />
        <Route path="/cam" element={<WebcamComponent/>} />

      </Routes>
    </Router>
  );
}

export default App;
