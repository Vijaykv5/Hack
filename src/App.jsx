import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Form from './components/Form';
import Givegoldloan from './components/Givegoldloan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"   element={<Register />} />
        <Route path="/main" element={<Form />} />
        <Route path="/loandetais" element={<Givegoldloan/>} />

      </Routes>
    </Router>
  );
}

export default App;
