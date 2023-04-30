import Image from 'next/image'
import React from 'react'
import overview from '@/public/overview.svg'
import team from '@/public/team.svg'
import session from '@/public/session.svg'
import emails from '@/public/emails.svg'
import registrations from '@/public/registrations.svg'
import promotions from '@/public/promotions.svg'

function SideNavBar() {
  return (
    <div>
        <div className='sideNavBar'>
            <div className='sideLinkWrap1'><div className='sideLink'>
                <Image className='sideLinkImg' src={overview}/>
                <p className='sideLinkText'>Overview</p>
            </div></div>

            <div className='sideLinkWrap'><div className='sideLink'>
                <Image className='sideLinkImg' src={team}/>
                <p className='sideLinkText'>Team</p>
            </div></div>

            <div className='sideLinkWrap'><div className='sideLink'>
                <Image className='sideLinkImg' src={session}/>
                <p className='sideLinkText'>Sessions</p>
            </div></div>

            <div className='sideLinkWrap'><div className='sideLink'>
                <Image className='sideLinkImg' src={emails}/>
                <p className='sideLinkText'>Notifications</p>
            </div></div>

            <div className='sideLinkWrap'><div className='sideLink'>
                <Image className='sideLinkImg' src={registrations}/>
                <p className='sideLinkText'>Registrations</p>
            </div></div>

            <div className='sideLinkWrap'><div className='sideLink'>
                <Image className='sideLinkImg' src={promotions}/>
                <p className='sideLinkText'>Promotions</p>
            </div></div>
        </div>
    </div>
  )
}

export default SideNavBar