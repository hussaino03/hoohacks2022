import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/navbar/Login';
import Signup from './pages/navbar/Signup';
import Home from './pages/navbar/Home';
import Plants from './pages/navbar/Plants';
import Events from './pages/navbar/events';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route> 
        <Route path='/plants' element={<Plants />} /> {/*user page?*/}
        <Route path='/events' element={<Events />} /> {/*picture page?*/}
        <Route path='/login' element={<Login />} /> {/**/}
        <Route path='/signup' element={<Signup />} /> {/**/}
      </Routes>
    </Router>
  );
}
  
export default App;

