import NavBar from '@/components/NavBar'
import SideNavBar from '@/components/SideNavBar'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import date from '../public/date.png'
import mode from '../public/mode.png'
import NotificationCenter from '@/components/NotficationCenter'
import { useRouter } from 'next/router'
import overview from '@/public/overview.svg'
import team from '@/public/team.svg'
import session from '@/public/session.svg'
import emails from '@/public/emails.svg'
import registrations from '@/public/registrations.svg'
import promotions from '@/public/promotions.svg'
import progress from '@/public/progress.png'
import microwebsite from '@/public/microwebsite.png'
import progresstracker from '@/public/progresstracker.png'
import sessions from '@/public/sessions.png'
import eventMembers from '@/public/eventMembers.png'
import exhibitors from '@/public/exhibitors.png'

function eventOverview() {
    const { query } = useRouter();
  return (
    <div>
        <NavBar/>
        <div className='bodyEventOverview'>
        {/* <SideNavBar/> */}

        <div className='sideNavBar'>
            <Link style={{textDecoration:'none'}} href="/eventOverview"><div className='sideLinkWrap1'><div className='sideLinkOverview'>
                <Image className='sideLinkImgOverview' src={overview}/>
                <p className='sideLinkTextOverview'>Overview</p>
            </div></div> </Link>

            <Link style={{textDecoration:'none'}} href="/eventTeam"><div className='sideLinkWrap'><div className='sideLink'>
                <Image className='sideLinkImg' src={team}/>
                <p className='sideLinkText' style={{textDecoration:'none'}}>Team</p>
            </div></div></Link>

            <Link style={{textDecoration:'none'}} href="/eventSession"><div className='sideLinkWrap'><div className='sideLink'>
                <Image className='sideLinkImg' src={session}/>
                <p className='sideLinkText'>Sessions</p>
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

        <div className='overviewCards'>
            <div>
                <Image  style={{width:'25vw', height:'auto', cursor:'pointer'}} src={progress}/>
            </div>

            <div>
                <Image  style={{width:'25vw', height:'auto', cursor:'pointer'}} src={microwebsite}/>
            </div>

            <div>
                <Image  style={{width:'25vw', height:'auto', cursor:'pointer'}} src={progresstracker}/>
            </div>

            <div>
                <Image  style={{width:'25vw', height:'auto', cursor:'pointer'}} src={sessions}/>
            </div>

            <div>
                <Image  style={{width:'25vw', height:'auto', cursor:'pointer'}} src={eventMembers}/>
            </div>

            <div>
                <Image  style={{width:'25vw', height:'auto', cursor:'pointer'}} src={exhibitors}/>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default eventOverview