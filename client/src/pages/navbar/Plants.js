import React from 'react';
import './about.css';
  
const Plants = () => {
  return (
    <div>
       <header className='masthead'>
          <h1 className='masthead-heading'>GrowWithMe</h1>
        </header>
        <br></br>
        <br></br>
      <h3  className="text-center">Hello USER! Lets grow some plants!</h3>
      <br></br>
      <div className="col d-flex justify-content-center">
        <div className="card text-center" style={{ width: '18rem' }}>
          <a href="#"
            ><img
              src={require("./images/plant.png")}
              className="card-img-top"
              alt="Go to calendar feature, cute dog"
          /></a>
          <div className="card-body">
            <p className="card-title fw-bold">Points</p>
            <p className="card-text">
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">THIS IS WHERE THE USER"S POINTS IS.</small>
          </div>
        </div>
      </div>
      <footer
          className="d-flex flex-wrap justify-content-between align-items-center p-3 my-4 mx-4 border-top border-bottom"
        >
          <p className="col-md-4 mb-0 text-muted">&copy; 2022 Hoohacks 2022</p>



          <ul className="nav col-md-4 justify-content-end" id="fadeshow">
            <li className="nav-item">
              <a href="/" className="nav-link px-2 active">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Calendar
              </a>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link px-2 text-muted">Login</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-muted">Logout</a>
            </li>
          </ul>
        </footer>
    </div>
  );
};
  
export default Plants;