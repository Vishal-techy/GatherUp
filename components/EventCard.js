import Image from 'next/image'
import React from 'react'
import poster from '../public/eventPoster.png'
import date from '../public/date.png'
import mode from '../public/mode.png'

function EventCard({title, description, startDate, endDate, venue}) {
  return (
    <div>
        <div className='eventCard'>
            <div className='eventHeading'>
                <div className='eventTitle'>{title}</div>
                    <div className='eventButtons'>
                        <div className='eveButtonborderless'>
                            Edit
                        </div>

                        <div className='eveButton'>
                            Publish
                        </div>
                    </div>
            </div>
            
            <hr style={{width:'85vw', marginTop:'15px'}}/>

            <div className='eventContent'>
                <div className='eventPoster'>
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
                    <div className='preview'>Preview</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventCard