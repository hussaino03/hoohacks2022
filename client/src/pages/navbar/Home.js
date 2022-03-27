
import React from 'react';
import './about.css';
import './home.css';

const Home = () =>{
  return (
    <div>
    <header className='masthead'>
    <h1 className='masthead-heading'>GrowWithMe</h1>
  </header>
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
      <div className="col d-flex justify-content-center">
        <div className="card w-75 text-center">
          <a href="/"><img
              src={require("./images/plant1.jpg")}
              className="card-img-top"
              alt="Go to organizational feature, rabbit picture"
          /></a>
          <div className="card-body">
            <p className="card-title fw-bold">Organize</p>
            <p className="card-text">
              Take care of your plants.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted"></small>
          </div>
        </div>
      </div>
      <div className="col d-flex justify-content-center">
        <div className="card w-75 text-center">
          <a href="calendar"
            ><img
              src={require("./images/plant2.jpg")}
              className="card-img-top"
              alt="Go to calendar feature, cute dog"
          /></a>
          <div className="card-body">
            <p className="card-title fw-bold">Plan</p>
            <p className="card-text">
              Accumulate points for plant caretaking.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted"></small>
          </div>
        </div>
      </div>
      <div className="col d-flex justify-content-center">
        <div className="card w-75 text-center">
          <a href="#"
            ><img
              src={require("./images/plant3.jpg")}
              className="card-img-top"
              alt="Go to blog feature, cat with hairnet image"
          /></a>
          <div className="card-body">
            <p className="card-title fw-bold">Share</p>
            <p className="card-text">
              Share pictures of your plants.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted"></small>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-4 fs-2 text-center py-3 rounded border bg-white">
      <h1 className="text-center fs-2">Greenery</h1>
      <br/>
      <a href="login" role="button" className="btn btn-dark" >
        Login
      </a>
    </div>

    <div className="row">
      <div className="col-12 bg-white mt-4">
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
              <a href="#" className="nav-link px-2 text-muted">Logout</a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
    </div>
  );
}
export default Home;

