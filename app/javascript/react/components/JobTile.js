import React from 'react'

const JobTile = (props) => {
  return(
  
  <div>
   
    <ul class="bay-table">
      <li class="TruckId">Truck Yard ID: {props.truck_id}</li>
      <li><b>Work Category</b></li>
      <li>{props.category}</li>
      <li><b>Work Description</b></li>
      <li>{props.description}</li>
      <li><a class="button" href="#">Mark as Complete</a></li>
    </ul>

  </div>
  )
}

export default JobTile
