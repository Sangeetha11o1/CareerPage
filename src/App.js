import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CareerPage from './CareerPage';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<CareerPage/>} />
      </Routes>
    </Router>

    </>
  );
}

export default App;
