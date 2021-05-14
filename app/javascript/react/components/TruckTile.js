import React from 'react'

const TruckTile = (props) => {
  debugger
  return(
    
      <tr>
        <td data-label="company">{props.company}</td>
        <td data-label="make">{props.make}</td>
        <td data-label="model">{props.model}</td>
        <td data-label="VIN">{props.vin}</td>
        <td data-label="Unit Number">{props.unit_number}</td>
      </tr>
    
  )
}

export default TruckTile