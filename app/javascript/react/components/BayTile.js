import React from 'react' 
import { Link } from 'react-router-dom'

const BayTile = (props) => {
  
  return(
    <div className="cell small-5 large-6 text-center">
      <div className="callout large">
          <h2 className="BayName"><Link to={`/bays/${props.number}`}>Bay {props.number}</Link></h2>
      </div> 
    </div>
  )
}

export default BayTile
