  import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.png'
import close from '../public/close.png'
import notification from '../public/notification.png'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'
import Link from 'next/link'

function NavBar() {
    const { user, logout } = useAuth()
    const router = useRouter()
  return (
    <div>
        <div className='navBar'>
            <div>
                <Link href={'/'}><Image className='logo' src={logo}/></Link>
            </div> 

            {/* <hr className='verLine'/> */}

            <div className='navLinks'>
                <Link href={'/eventOverview'}><p className='links'>Events</p></Link>
                <Link href={'/attendees'}><p className='links'>Attendees</p></Link>
                <Link href={'/'}><p className='links'>Settings</p></Link>
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