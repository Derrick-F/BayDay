import React, { useState, useEffect } from "react"
import TruckForm from "./TruckForm"

const TruckIndex = (props) => {
  const [trucks, setTrucks] = useState([])
  
  return( 
  <div>
    <TruckForm/>
    <h2 class="type-sidelines custom-2"><span>Trucks in yard</span></h2>
  </div>
  
  )
}
export default TruckIndex