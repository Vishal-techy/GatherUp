import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.png'
import close from '../public/close.png'
import notification from '../public/notification.png'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'

function NavBar() {
    const { user, logout } = useAuth()
    const router = useRouter()
  return (
    <div>
        <div className='navBar'>
            <div>
                <Image className='logo' src={logo}/>
            </div> 

            {/* <hr className='verLine'/> */}

            <div className='navLinks'>
                <p className='links'>Events</p>
                <p className='links'>Attendees</p>
                <p className='links'>Settings</p>
                {user ? (
              <div>
                <p
                  className='links'
                  onClick={() => {
                    logout()
                    router.push('/login')
                  }}
                >
                  Logout
                </p>
              </div>
            ) : null}
            </div>

            <div style={{display:'flex', marginLeft: '42vw'}}>
                <Image className='navBut' src={close}/>
                <Image className='navBut' src={notification}/>
            </div>

        </div>
    </div>
  )
}

export default NavBar