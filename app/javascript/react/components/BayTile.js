import React from 'react' 

const BayTile = (props) => {
  return(
    <div class="cell small-5 large-6 text-center">
      <div class="callout large">
        <h2>{props.number}</h2>
      </div> 
    </div>
  )

}

export default BayTile