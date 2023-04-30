import EventShowCard from '@/components/EventShowCard'
import NavBar from '@/components/NavBar'
import React from 'react'

function attendees() {
  return (
    <div>
        <NavBar/>

    <div style={{marginTop:'30px'}}>
        <EventShowCard title="International Web 3.0 conference @Bengaluru " description="Lorem simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." startDate="21" endDate="23 April, 2023" venue="Online Mode"/>

    </div>

    </div>
  )
}

export default attendees