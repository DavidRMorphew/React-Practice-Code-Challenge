import React, { Fragment } from 'react'
// import SushiContainer from '../containers/SushiContainer'

const Sushi = (props) => {
  const {sushi, addToEatenArray, eatenBoolean} = props
  return (
    <div className="sushi" onClick={()=>addToEatenArray(sushi.id)}>
      <div className="plate">
        { 
          eatenBoolean ?
            null
          :
            <img src={sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi