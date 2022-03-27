import React, { useState, useEffect }  from 'react';
import { useNavigate } from "react-router-dom";

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const AddPlant = () => {

    const [plants, setPlants] = useState([]);
    const [plantID, setPlantID] = useState(0);
    const [plantName, setPlantName] = useState("");
    const nav = useNavigate();
    useEffect(() => {
        fetch("http://localhost:4000/plants").then(
            result => { return result.json() }
        ).then(plants => setPlants(plants));
    }, []);

    const handlePlantAdd = e => {
        e.preventDefault();
        fetch("http://localhost:4000/plants/add", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          userID: getCookie('userID'),
          plantID: plantID,
          plantName: plantName
        }),
      })
        .then((res) => {
          res
            .json()
            .then((results) => {
              if (results["msg"] == "success") {
                console.log(results);
                nav("/plants");
              } else {
                console.log(results);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return (
        <div>
            <form onSubmit={handlePlantAdd}>
                <input name="plantName" type="text" onChange={(e) => setPlantName(e.target.value)}
                required />
            <select name="plantID" onChange={(e) => setPlantID(e.target.value)}
                required>
                {plants.map(plant => (
                    <option value={plant.plantID}>{plant.commonName}</option>
                ))}
            </select>
            <button type="submit" class="btn btn-primary btn-block btn-lg">
                <span>Add Plant</span>
            </button>
            </form>
        </div>
    );
}

export default AddPlant;
