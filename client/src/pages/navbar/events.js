import React from 'react';
import './about.css';
  
const Events = () => {
  return (
    <div>
    <header className='masthead'>
    <h1 className='masthead-heading'>GrowWithMe</h1>
  </header>
    <div id="outer-wrapper" className="p-5 m-5 rounded bg-white rounded">
    <div className="container-fluid py-2">
        <div className="row">
            <div className="col-12">
                <h1 className="fs-2 text-center p-4 rounded border">&lt;Username&gt;'s Calendar</h1>
            </div>
        </div>
        <div className="row mt-3">

            <div className="col-12 col-md-12 col-lg-4 align-items-center">
               
                <button type="button" className="btn btn-outline-primary my-2">Add New</button>
                <div className="card mt-3">
                    <ul className="list-group list-group-flush">
                      
                        <li className="upcoming-header list-group-item text-center py-2"><strong>Upcoming</strong></li>

                        <li className="list-group-item">Water Succulents<span className="badge bg-primary">Mar 1</span></li>

                        <li className="list-group-item">Plant Tomatoes<span className="badge bg-primary">Apr 12</span></li>

                    </ul>
                  </div>
            </div>
        
            <div className="col-12 col-md-12 col-lg-8"> 
                <div id="cal-app-wrapper" className="rounded p-5 mt-3 border"> 
                    <div id="outer-calendar" className="bg-white p-3 col-12 border border-primary rounded">
                        <div id="month" className="border">
                            <i className="bi bi-arrow-left-circle back fs-2 px-4"></i> 
                            <div id="date">
                                <h1 className="fs-3 text-center"></h1> 
                                <p className="fs-4 text-center"></p> 
                                <p id="only-year" className="text-center"></p>  
                            </div>
                            <i className="bi bi-arrow-right-circle next fs-2 px-4"></i>
                        </div>
                        <div id="days" className="fs-3 text-center mt-3">
                            <p>Sun</p>
                            <p>Mon</p>
                            <p>Tue</p>
                            <p>Wed</p>
                            <p>Thu</p>
                            <p>Fri</p>
                            <p>Sat</p>
                        </div>
                        <div className="monthdaynums fs-4 mb-3"></div>
                    </div>
                </div>
            </div>

        </div>
    </div>


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
              <a href="/Signup" className="nav-link px-2 text-muted">Sign Up</a>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link px-2 text-muted">Login</a>
            </li>
          </ul>
        </footer>
  </div>
  </div>
  );
};
  
export default Events;
