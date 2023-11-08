
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Authentication from './Components/Authentication';
import Timer from './Components/Timer'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/timer" element={<Timer />} /> 
      </Routes>
    </Router>
  );
}

export default App;
