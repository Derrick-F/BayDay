import React, { useState, useEffect } from "react"
import TruckForm from "./TruckForm"
import TruckTile from "./TruckTile"

const TruckIndex = (props) => {
  const [trucks, setTrucks] = useState([])

  const [errors, setErrors] = useState([])

  const truckId = props.match.params.id

  const getTrucks = async () => {
    try {
      const response = await fetch('/api/v1/trucks')
      if (!response){
        const errorMessage = `${response.status} (${response.statusTest})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const parsedTrucks= await response.json()
      setTrucks(parsedTrucks)
    } catch(err){
      console.error(`Error in fetch: ${err.message}`)
    }
  }  

  useEffect(() => {
    getTrucks()
  }, [])

  const eachTruck = trucks.map( (truck) => {
    return(
      <TruckTile id={truck.id} key={truck.id} company={truck.company} make={truck.make} model={truck.model} vin={truck.vin} unit_number={truck.unit_number} errors={errors}/>
    )
  })

  const addTruck = async (formPayload) => {
    try{
      const response = await fetch(`/api/v1/trucks`, {
        credentials: "same-origin",
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formPayload),
      })
      const parsedNewTruck = await response.json()

      if(!parsedNewTruck.errors) {
        setTrucks(parsedNewTruck)
      } else {
        setErrors(parsedNewTruck.errors)
      }
    } catch(err) {
        console.error(`Error in post fetch: ${err.message}`)
    }
  }

  return( 
  <div>
    <TruckForm addTruck={addTruck}/>
      <h2 className="type-sidelines custom-2"><span>Trucks in yard</span></h2>
        <div>
          <table className="responsive-card-table unstriped">
            <thead>
              <tr>
                <th>Company</th>
                <th>Make</th>
                <th>Model</th>
                <th>VIN</th>
                <th>Unit Number</th>
              </tr>
            </thead>
    
          <tbody>{eachTruck}</tbody>
        </table>
      </div>
    </div>
  )
}
export default TruckIndex