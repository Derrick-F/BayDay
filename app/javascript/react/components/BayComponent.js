import React, { useState, useEffect } from "react"

const BayComponent = (props) => {
  const brandId = (props.match.params.id)
  return(
    <div>
      <h2 className="type-sidelines custom-2"><span>{`Status on Bay ${brandId}`}</span></h2>
    </div>
  )
}

export default BayComponent