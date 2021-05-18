import React, { useState, useEffect } from "react"
import JobForm from "./JobForm"

const BayComponent = (props) => {
  const bayId = (props.match.params.id)
  // store all of the trucks in state right here


  // need a fetch that retrieves all trucks. Technically, you could just fetch to the TrucksController index, but for future features, this should be a request to the API bayscontroller#show. the data that should come back should be all of the unassigned trucks and all unassigned technicians, but start small 

   // Need to import and render the JobForm . Pass it all of the trucks as a prop. Your post fetch will also need to be defined here, and passed down so that it can be triggered by your Form submission 


  //  display trucks for this bay
  // use fetch request to grab all trucks
  // you will want the PSOT request here for adding a truck to a bay
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
  return(
    <div>
      <h2 className="type-sidelines custom-2"><span>{`Status on Bay ${bayId}`}</span></h2>
      <JobForm/>
    </div>
  )
}

export default BayComponent