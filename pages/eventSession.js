import NavBar from '@/components/NavBar'
import SideNavBar from '@/components/SideNavBar'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import date from '../public/date.png'
import mode from '../public/mode.png'
import overview from '@/public/overview.svg'
import team from '@/public/team.svg'
import session from '@/public/session.svg'
import emails from '@/public/emails.svg'
import registrations from '@/public/registrations.svg'
import promotions from '@/public/promotions.svg'
import SessionCard from '@/components/SessionCard'

function eventSession() {
  return (
    <div>
        <NavBar/>
        <div className='bodyEventOverview'>
        {/* <SideNavBar/> */}

        <div className='sideNavBar'>
            <Link style={{textDecoration:'none'}} href="/eventOverview"><div className='sideLinkWrap1'><div className='sideLink'>
                <Image className='sideLinkImg' src={overview}/>
                <p className='sideLinkText' style={{textDecoration:'none', borderColor:'white'}}>Overview</p>
            </div></div> </Link>

            <Link style={{textDecoration:'none'}} href="/eventTeam"><div className='sideLinkWrap'><div className='sideLink'>
                <Image className='sideLinkImg' src={team}/>
                <p className='sideLinkText' style={{textDecoration:'none'}}>Team</p>
            </div></div></Link>

            <Link style={{textDecoration:'none'}} href="/eventSession"><div className='sideLinkWrap'><div className='sideLinkSession'>
                <Image className='sideLinkImgSession' src={session}/>
                <p className='sideLinkTextSession'>Sessions</p>
            </div></div></Link>

            <Link style={{textDecoration:'none'}} href="/notificationCenter"><div className='sideLinkWrap'><div className='sideLink'>
                <Image className='sideLinkImg' src={emails}/>
                <p className='sideLinkText'>Notifications</p>
            </div></div></Link>

            <Link style={{textDecoration:'none'}} href="/eventRegistration"><div className='sideLinkWrap'><div className='sideLink'>
                <Image className='sideLinkImg' src={registrations}/>
                <p className='sideLinkText'>Registrations</p>
            </div></div></Link>

            <Link style={{textDecoration:'none'}} href="/eventPromotion"><div className='sideLinkWrap'><div className='sideLink'>
                <Image className='sideLinkImg' src={promotions}/>
                <p className='sideLinkText'>Promotions</p>
            </div></div></Link>
        </div>

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

        <SessionCard session="Session 1 - " title="International Web 3.0 conference @Bengaluru " description="Lorem simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." startDate="21" endDate="23 April, 2023" venue="Online Mode"/>
        <SessionCard session="Session 2 - " title="International Web 3.0 conference @Bengaluru " description="Lorem simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." startDate="21" endDate="23 April, 2023" venue="Online Mode"/>

        </div>
        </div>
    </div>
  )
}

export default eventSession