import React from 'react';
  
const Events = () => {
  return (
    <div class="row justify-content-center">
    <div class="col-auto">
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
  );
};
  
export default Events;