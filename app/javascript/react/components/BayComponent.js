import React, { useState, useEffect } from "react"

const BayComponent = (props) => {
  const brandId = (props.match.params.id)
  return(
    <h1>{`${brandId}`}</h1>
  )
}


// const BayComponent = (props) => {
//   return(console.log(props.match))
// }


export default BayComponent