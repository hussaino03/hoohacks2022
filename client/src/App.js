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
        <Route path='/' exact component={Dogs} />
        <Route path='/cats' component={Cats} />
        <Route path='/sheeps' component={Sheeps} />
        <Route path='/goats' component={Goats} />
      </Routes>
    </Router>
  );
}

export default App;
