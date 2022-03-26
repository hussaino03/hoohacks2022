import React from 'react';
const Home = () =>{
  return (
    <div>
  
    <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
      <div class="col d-flex justify-content-center">
        <div class="card w-75 text-center">
          <a href="index.html"
            ><img
              src="images/rabbit1.jpg"
              class="card-img-top"
              alt="Go to organizational feature, rabbit picture"
          /></a>
          <div class="card-body">
            <p class="card-title fw-bold">Organize</p>
            <p class="card-text">
              Take care of your plants.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted"></small>
          </div>
        </div>
      </div>
      <div class="col d-flex justify-content-center">
        <div class="card w-75 text-center">
          <a href="calendar.html"
            ><img
              src="images/dog1.jpg"
              class="card-img-top"
              alt="Go to calendar feature, cute dog"
          /></a>
          <div class="card-body">
            <p class="card-title fw-bold">Plan</p>
            <p class="card-text">
              Accumulate points for plant caretaking.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted"></small>
          </div>
        </div>
      </div>
      <div class="col d-flex justify-content-center">
        <div class="card w-75 text-center">
          <a href="#"
            ><img
              src="images/cat1.jpg"
              class="card-img-top"
              alt="Go to blog feature, cat with hairnet image"
          /></a>
          <div class="card-body">
            <p class="card-title fw-bold">Share</p>
            <p class="card-text">
              Share pictures of your plants.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted"></small>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-4 fs-2 text-center py-3 rounded border bg-white">
      <h1 class="text-center fs-2">Greenery</h1>
      <br/>
      <a href="login.html" role="button" class="btn btn-dark" >
        Login
      </a>
    </div>

    <div class="row">
      <div class="col-12 bg-white mt-4">
        <footer
          class="d-flex flex-wrap justify-content-between align-items-center p-3 my-4 mx-4 border-top border-bottom"
        >
          <p class="col-md-4 mb-0 text-muted">&copy; 2022 Hoohacks 2022</p>

          

          <ul class="nav col-md-4 justify-content-end" id="fadeshow">
            <li class="nav-item">
              <a href="#" class="nav-link px-2 active">Home</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Calendar
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">Login</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">Logout</a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
    </div>
  );
}
export default Home;
