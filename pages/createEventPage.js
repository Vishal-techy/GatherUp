import CreateEvent from '@/components/CreateEvent'
import NavBar from '@/components/NavBar'
import React from 'react'

function createEventPage() {
  return (
    <div>
        <NavBar/>
        <div style={{marginTop:'30px'}}>
            <CreateEvent/>
        </div>
    </div>
  )
}

export default createEventPage