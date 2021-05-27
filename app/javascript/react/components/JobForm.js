import React, { useState, useEffect } from "react"

const JobForm = (props) => {
  const [newJob, setNewJob] = useState({
    category: '',
    description: '',
    truckId: '',
    bay_id: props.bay_id
  })
 
  const [trucks, setTrucks] = useState([])

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

  const handleSubmit = event => {
      event.preventDefault()
      setNewJob(event.currentTarget.value)
      props.addJob(newJob)
      handleClearForm()
  }

  const handleClearForm = () => {
    setNewJob({
      category: "",
      description: "",
      id: null
    })
  }

  const handleChange = event => {
    event.preventDefault()
    setNewJob({
      ... newJob,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

   const truckOptions = trucks.map((truckOp) => {
     return(
       <option value={truckOp.id} key={truckOp.id}>
         {truckOp.company}
        </option>
     )
   })
  
  return(
    
    <div className="translucent-form-overlay">
      <form onSubmit={handleSubmit}>
        <h3>Add a job</h3>
        <div>
        
        <label><span class="require">*</span>Customer</label>
        <select name = "truckId" onChange={handleChange}>
          <option value="" disabled selected>Select customer</option>
          {truckOptions}
        </select>

        </div>

        <label htmlFor="category"><span class="require">*</span>Work Category</label>
          <input name="category"
            id = ""
            type = "text"
            value = {newJob.category}
            onChange = {handleChange}
          />

<label htmlFor="description"><span class="require">*</span>Description</label>
          <textarea rows="3" name="description"
            id = ""
            type = "text"
            value = {newJob.description}
            onChange = {handleChange}
          />


        <input type="submit" value="Create Job" className="button secondary" />
      </form>
    </div>
  )
}

export default JobForm