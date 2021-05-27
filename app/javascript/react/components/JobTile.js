import React from 'react'

const JobTile = (props) => {

  const cookie = document.cookie.match(/^(.*;)?\s*signed_in\s*=\s*[^;]+(.*)?$/)
  if (cookie) {

    return(
    
    <div>
    
      <ul className="bay-table">
        <li className="TruckId">Truck ID #{props.truck_id}</li>
        <li><b>Work Category</b></li>
        <li>{props.category}</li>
        <li><b>Work Description</b></li>
        <li>{props.description}</li>
        <li>
          <span onClick={() => props.deleteJob(props.id)} className="button">Mark as Complete</span>
            
        </li>
      </ul>

    </div>
    )
  }

  else {

    return(
    
      <div>
      
        <ul className="bay-table">
          <li className="TruckId">Truck Yard ID# {props.truck_id}</li>
          <li><b>Work Category</b></li>
          <li>{props.category}</li>
          <li><b>Work Description</b></li>
          <li>{props.description}</li>
        </ul>
  
      </div>
    )
  }
}

export default JobTile
