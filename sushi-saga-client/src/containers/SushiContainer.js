import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const {sushis, onClick, addToEatenArray, eatenIds} = props

  const eatenBoolean = (sushiId) => {
    return (eatenIds.find(id => id === sushiId)) ? true : false
  }

  const renderSushis = (range) => (
    sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} eatenBoolean={eatenBoolean(sushi.id)} addToEatenArray={addToEatenArray}/>).slice(range[0],range[1])
  )

  return (
    <Fragment>
      <div className="belt">
        {
          renderSushis(props.range)
        }
        <MoreButton onClick={onClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer