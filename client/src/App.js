import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Dogs from "./pages/navbar/Dogs"
import Cats from "./pages/navbar/Cats"
import Sheeps from "./pages/navbar/Sheep"
import Goats from "./pages/navbar/Goat"


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Dogs} /> {/*This is going to be the homepage*/}
        <Route path='/cats' component={Cats} /> {/*user page?*/}.
        <Route path='/sheeps' component={Sheeps} /> {/*picture page?*/}.
        <Route path='/goats' component={Goats} /> {/**/}.
      </Routes>
    </Router>
  );
}

export default App;
