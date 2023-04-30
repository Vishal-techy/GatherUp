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
// import progresstracker from '@/public/progresstracker.png'
import sessions from '@/public/sessions.png'
import eventMembers from '@/public/eventMembers.png'
// import exhibitors from '@/public/exhibitors.png'

function eventOverview() {
    const { query } = useRouter();
  return (
    <div>
       
    </div>
  )
}

export default eventOverview