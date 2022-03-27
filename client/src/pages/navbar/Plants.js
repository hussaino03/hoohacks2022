import React from 'react';
  
const Plants = () => {
  return (
    <div>
      <h3  className="text-center">Hello USER! Lets grow some plants!</h3>
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
    </div>
  );
};
  
export default Plants;