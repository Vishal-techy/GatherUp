import Image from 'next/image'
import React from 'react'
import poster from '../public/eventPoster.png'
import date from '../public/date.png'
import mode from '../public/mode.png'
import template from '@/public/temp2.jpeg'
import Link from 'next/link'

function EventShowCard({title, description, startDate, endDate, venue}) {
  return (
    <div>
        <div className='eventCard'>
            <div className='eventHeading'>
                <div className='eventTitle'>{title}</div>
                    <div className='eventButtons'>
                        {/* <div className='eveButtonborderless'>
                            Edit
                        </div> */}

                        <Link style={{textDecoration:'none'}} href={'/attendeeDetails'}><div className='eveButton' style={{marginLeft:'150px'}}>
                            Register
                        </div></Link>
                    </div>
            </div>
            
            <hr style={{width:'85vw', marginTop:'15px'}}/>

            <div className='eventContent'>
                <div className='eventPoster1'>
                    <Image style={{width:'20vw', height:'auto', borderRadius:'10px'}} src={template}/>
                    {/* <Image width={'10%'} src={poster}/> */}
                </div>
                <div className='eventDescription'>
                    <div className='eveDesc'>
                       {description}
                    </div>
                    <div className='eveDateMode'>
                        <div className='eveDM'>
                            <Image style={{width:'2vw', height:'auto', marginRight:'5px'}} src={date}/>
                            <p className='mb'>{startDate} to {endDate}</p>
                        </div>
                        <div className='eveDM'>
                            <Image style={{width:'2vw', height:'auto', marginRight:'5px'}} src={mode}/>
                            <p className='mb'>{venue}</p>
                        </div>
                    </div>
                    {/* <div className='preview'>Preview</div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventShowCard