import React from 'react' 
import { Link } from 'react-router-dom'

const BayTile = (props) => {
  return(
    <div class="cell small-5 large-6 text-center">
      <div class="callout large">
        <h2><Link to={`/bays/${props.id}`}>Bay {props.number}</Link></h2>
      </div> 
    </div>
  )

}

export default BayTile
