import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/navbar/Home';
import About from './pages/navbar/about';
import Events from './pages/navbar/events';
import AnnualReport from './pages/navbar/annual';
import Login from './pages/navbar/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} /> {/*user page?*/}
        <Route path="/events" element={<Events />} /> {/*picture page?*/}
        <Route path="/annual" element={<AnnualReport />} /> {/**/}
        <Route path="/login" element={<Login />} /> {/**/}
      </Routes>
    </Router>
  );
}

export default App;

