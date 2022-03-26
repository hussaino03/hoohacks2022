import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Dogs from "./pages/navbar/Dogs"
import Cats from "./pages/navbar/Cats"
import Sheep from "./pages/navbar/Sheep"
import Goat from "./pages/navbar/Goat"


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dogs />}></Route> {/*This is going to be the homepage*/}
        <Route path='/cats' element={<Cats />} /> {/*user page?*/}.
        <Route path='/sheeps' element={<Sheep />} /> {/*picture page?*/}.
        <Route path='/goats' element={<Goat />} /> {/**/}.
      </Routes>
    </Router>
  );
}

export default App;
