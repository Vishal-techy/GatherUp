import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.png'
import close from '../public/close.png'
import notification from '../public/notification.png'

function NavBar() {
  return (
    <div>
        <div className='navBar'>
            <div>
                <Image className='logo' src={logo}/>
            </div> 

            <hr className='verLine'/>

            <div className='navLinks'>
                <p className='links'>Events</p>
                <p className='links'>Attendees</p>
                <p className='links'>Settings</p>
                <p className='links'>Logout</p>
            </div>

            <div style={{display:'flex', marginLeft: '39vw',}}>
                <Image className='navBut' src={close}/>
                <Image className='navBut' src={notification}/>
            </div>

        </div>
    </div>
  )
}

export default NavBar