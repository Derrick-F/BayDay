import React, { useState, useEffect } from "react"
import JobForm from "./JobForm"

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

  return(
    <div>
      <h2 className="type-sidelines custom-2"><span>{`Status on Bay ${bayId}`}</span></h2>
      <JobForm addJob={addJob} bay_id={props.match.params.id}/>
    </div>
  )
}

export default BayComponent

// need a fetch that retrieves all trucks. Technically, you could just fetch to the TrucksController index, but for future features, this should be a request to the API bayscontroller#show. the data that should come back should be all of the unassigned trucks and all unassigned technicians, but start small 

   // Need to import and render the JobForm . Pass it all of the trucks as a prop. Your post fetch will also need to be defined here, and passed down so that it can be triggered by your Form submission 


  //  display jobs for this bay
  // use fetch request to grab all jobs
  // you will want the PSOT request here for adding a job to a bay
  // pass the POST function as a prop to the JobForm
  // JobForm onSubmit calls on that POST fetch from props
  // that sends the newJob data up to this component
  // POST fetch function receives newJob as argument
  // POST new Job
  // hit controller and create record, send back new Job object
  // POST receives new Job from response of fetch request
  // add the new Job to state in this component

  // rails routes / rake routes
  // check available routes for job in a bay
  // bay/:id
  // POST /bay/:bay_id/jobs
  // resources bays [:index, :show]
    // resource jobs [:create]

    // /jobs