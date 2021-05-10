import React, { useState, useEffect } from "react"
import BayTile from "./BayTile"

const BayIndex = (props) => {
  const [bays, setBays] = useState([])

  const fetchBays = async () => {
    try {
      const response = await fetch("/api/v1/bays")
      if (!response.ok){
        const errorMessage = `${response.status} (${response.statusTest})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const parsedBays = await response.json()
      setBays(parsedBays)
    } catch(err){
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchBays()
  }, [])
  
  const bayTileArray = bays.map((bay) => {
    return (
      <BayTile key={bay.id} number={bay.number} />
    )
  })

  return(<div className="grid-container">  
      <div className="grid-x grid-margin-x grid-margin-y">
      {bayTileArray}
    </div>  
  </div>)
}










export default BayIndex
