import React from 'react'

const JobTile = (props) => {
  return(
  
  <div>
   
    <ul class="bay-table">
      <li class="TruckId">Truck Yard ID: {props.truck_id}</li>
      <li>Work Category: {props.category}</li>
      <li>{props.description}</li>
      <li><a class="button" href="#">Mark as Complete</a></li>
    </ul>

  </div>
  )
}

export default JobTile
