import React from 'react'

function SubNavBar() {
  return (
    <div className='SubNavBar'>
        <div className='input'>
            <input style={{width:'30vw'}} type="text" placeholder='🔍    Search' className='searchBox'/>
        </div>

        <div className='subNavLinks'>
            <p className='links'>Live</p>
            <p className='links'>Draft</p>
            <p className='links'>Past</p>
            <p className='links'>Cancelled</p>
            <p className='links'>All</p>
        </div>
    </div>
  )
}

export default SubNavBar