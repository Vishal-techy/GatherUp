import NavBar from '@/components/NavBar'
import SideNavBar from '@/components/SideNavBar'
import React from 'react'
import Image from 'next/image'
import date from '../public/date.png'
import mode from '../public/mode.png'

function eventOverview() {
  return (
    <div>
        <NavBar/>
        <div className='bodyEventOverview'>
        <SideNavBar/>

        <div className='eventCard1'>
            <div className='eveHeading'>
                International Web 3.0 conference @Bengaluru                    <div className='eveDateMode'>
                        <div className='eveDM1'>
                            <Image style={{width:'2vw', height:'auto', marginRight:'5px'}} src={date}/>
                            <p className='eveDet'>April 30 to 31, 2023</p>
                        </div>
                        <div className='eveDM1'>
                            <Image style={{width:'2vw', height:'auto', marginRight:'5px'}} src={mode}/>
                            <p className='eveDet'>Online Event</p>
                        </div>
                    </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default eventOverview