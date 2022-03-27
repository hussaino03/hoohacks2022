import React, { useState, useEffect } from "react";
import { getCookie } from "./AddPlant";

const Plants = () => {

  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/plants/user/${getCookie("userID")}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((p) => {
        setPlants(p);
      });
  }, []);


  return (
    <div>
      <h3 className="text-center">Hello {(plants[0] ? `User ${plants[0]['userID']}` : 'USER')}! Lets grow some plants!</h3>
      <div className="col d-flex justify-content-center flex-wrap gap-3">
        {plants.map((plant) => {
          return (
          <div className="card text-center" style={{ width: "18rem" }}>
            <a href="/">
              <img
                src={require("./images/plant.png")}
                className="card-img-top"
                alt="Go to calendar feature, cute dog"
              />
            </a>
            <div className="card-body">
              <p className="card-title fw-bold">{plant.name}</p>
              <p className="card-text"></p>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                {plant.commonName} ({plant.sciName})
              </small>
            </div>
          </div>);
        })}
      </div>
    </div>
  );
};

export default Plants;
