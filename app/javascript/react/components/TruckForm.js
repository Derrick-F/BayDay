import React, { useState, useEffect } from "react"

const TruckForm = (props) => {
  const [newTruck, setNewTruck] = useState({
    company: '',
    make: '',
    model: '',
    vin: '',
    unit_number: ''
  })

  const handleSubmit = event => {
      event.preventDefault()
      setNewTruck(event.currentTarget.value)
      props.addTruck(newTruck)
      handleClearForm()
  }

  const handleClearForm = () => {
    setNewTruck({
      company: "",
      make: "",
      model: "",
      vin: "",
      unit_number: "",
      id: null
    })
  }

  const handleChange = event => {
    event.preventDefault()
    setNewTruck({
      ... newTruck,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  

  return(
    
    <div className="translucent-form-overlay">
      <form onSubmit={handleSubmit}>
        <h3>Check in a Truck</h3>
        <div>
          <label htmlFor="company">company</label>
          <input name="company"
            id = ""
            type = "text"
            value = {newTruck.company}
            onChange = {handleChange}
          />
          <label htmlFor="make">make</label>
          <input name="make"
            id = ""
            type = "text"
            value = {newTruck.make}
            onChange = {handleChange}
          />
          <label htmlFor="model">model</label>
          <input name="model"
            id = ""
            type = "text"
            value = {newTruck.model}
            onChange = {handleChange}
          />
          <label htmlFor="vin">VIN</label>
          <input name="vin"
            id = ""
            type = "text"
            value = {newTruck.vin}
            onChange = {handleChange}
          />
          <label htmlFor="unit_number">unit number</label>
          <input name="unit_number"
            id = ""
            type = "text"
            value = {newTruck.unit_number}
            onChange = {handleChange}
          />

        <input type="submit" value="Check In Truck" className="btn" />
        </div>
      </form> 
    </div>
  )
}


export default TruckForm