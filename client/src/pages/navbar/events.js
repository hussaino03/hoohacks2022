import React from 'react';
import './about.css';
  
const Events = () => {
  return (
    <div>
    <header className='masthead'>
    <h1 className='masthead-heading'>GrowWithMe</h1>
  </header>
    <div class="row justify-content-center">
    <div class="col-auto">
      <br></br>
      <br></br>
  <div className="table table-bordered table-responsive">
    <h3 className="text-center">
      Your Plants
    </h3>
    <thead>
      <tr>
        <th>Plants</th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        <th>Saturday</th>
        <th>Sunday</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Succulant</td>
        <td>Water Plant</td>
        <td></td>
        <td></td>
        <td></td>
        <td>Move outside</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Cactus</td>
        <td></td>
        <td></td>
        <td></td>
        <td>Water</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Tomatoes</td>
        <td>Water</td>
        <td></td>
        <td>Fertilize</td>
        <td></td>
        <td></td>
        <td>Water</td>
        <td></td>
      </tr>
    </tbody>

  </div>
  </div>
  </div>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <footer
          className="d-flex flex-wrap justify-content-between align-items-center p-3 my-4 mx-4 border-top border-bottom"
        >
          <p className="col-md-4 mb-0 text-muted">&copy; 2022 Hoohacks 2022</p>



          <ul className="nav col-md-4 justify-content-end" id="fadeshow">
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-muted">Home</a>
            </li>
            <li className="nav-item">
              <a href="/plants" className="nav-link px-2 text-muted">
                User
              </a>
            </li>
            <li className="nav-item">
              <a href="/events" className="nav-link px-2 active">Events</a>
            </li>
            <li className="nav-item">
              <a href="/Signup" className="nav-link px-2 text-muted">SignUp</a>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link px-2 text-muted">Login</a>
            </li>
          </ul>
        </footer>
  </div>
  );
};
  
export default Events;