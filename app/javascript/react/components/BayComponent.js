import React, { useState, useEffect } from "react"
import JobForm from "./JobForm"
import JobTile from "./JobTile"

const BayComponent = (props) => {
  const [jobs, setJobs] = useState([])
  
  const bayId = (props.match.params.id)

  const getJobs = async () => {
    try {
      const response = await fetch('/api/v1/jobs')
      if (!response){
        const errorMessage = `${response.status} (${response.statusTest})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const parsedJobs= await response.json()
      setJobs(parsedJobs)
    } catch(err){
      console.error(`Error in fetch: ${err.message}`)
    }
  }  

  useEffect(() => {
    getJobs()
  }, [])
  
  const addJob = async (formPayload) => {
    try{
      const response = await fetch(`/api/v1/jobs`, {
        credentials: "same-origin",
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formPayload),
      })
      const parsedNewJob = await response.json()

      if(!parsedNewJob.errors) {
        setJobs(parsedNewJob)
      } else {
        setErrors(parsedNewjob.errors)
      }
    } catch(err) {
        console.error(`Error in post fetch: ${err.message}`)
    }
  }

  const deleteJob = async (id) => {
    try{
      const response = await fetch(`/api/v1/jobs/${id}`, {
        credentials: "same-origin",
        method: "DELETE",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      })
      console.log("finished")

      let newJobs = jobs.filter(j => {
        return j.id != id;
      })
      setJobs(newJobs);
      
    } catch(err) {
        console.error(`Error in post fetch: ${err.message}`)
    }
  }

  const eachJob = jobs.map( (job) => {
    if (job.bay_id === parseInt(bayId)) {
      return(
        <JobTile id={job.id} key={job.id} category={job.category} description={job.description} truck_id={job.truck_id} deleteJob={deleteJob}/>
      )
    }
  })

  return(
    <div>
      <div>
        <h2 className="type-sidelines custom-2"><span>{`Status on Bay ${bayId}`}</span></h2>
      </div>

      <div>
        {eachJob}
      </div>

      <div>
        <h2 className="type-sidelines custom-2"><span>{`Assign a job below.`}</span></h2>
        <JobForm addJob={addJob} bay_id={props.match.params.id}/>
      </div>
    </div>
  )
}

export default BayComponent
