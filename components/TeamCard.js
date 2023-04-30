import React from 'react'

function TeamCard(props) {
  return (
    <div className='cardWrap'>
    <div className='card'>
      <div className='circle'>

      </div>
      <div className='teamCardText'>
        <h3>{props.name}</h3>
        <p>{props.email}</p>
      </div>
        <p className='text3'>{props.eventRole}</p>
        <p className='text4'>Joined 20 min ago</p>
    </div>
    
    </div>
  )
}

export default TeamCard