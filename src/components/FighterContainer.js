import React from 'react'
import Fighter from './Fighter'
import '../App.css'

function FighterContainer(props) {
  const fighterList = props.chosenFighter.map(element => {
    return <Fighter 
              replaceFighter={props.replaceFighter}
              fighter={element}
              key={element.id}
              saveName={props.saveName}
            />
  })

  return (
    <div className='fighter-container'>
      <h2 className='fighting-team'>Your Fighting Team</h2>
      <div className='fighters'>
        {fighterList}
      </div>
    </div>
  )
}

export default FighterContainer