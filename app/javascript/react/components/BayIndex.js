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

  return(<div class="grid-container">  
      <div class="grid-x grid-margin-x grid-margin-y">
      {bayTileArray}
    </div>  
  </div>)
}










export default BayIndex


// In app.js build React Router with at least on route. (Peep week 4)

// make bay index component with an H1

// then in rails make an API endpoint. /api/v1/bays (reference week 6)

// Then come back to React and fETCH IN Bays index... Test it by console.log
// If that works you can create the bay tile and use .mao to out all bays on the page (week 3/4)