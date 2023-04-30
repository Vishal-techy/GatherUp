import Image from 'next/image'
import React from 'react'
import poster from '../public/eventPoster.png'
import date from '../public/date.png'
import mode from '../public/mode.png'

function EventCard() {
  return (
    <div>
        <div className='eventCard'>
            <div className='eventHeading'>
                <div className='eventTitle'>International Web 3.0 conference @Bengaluru</div>
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
                        Lorem simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                    <div className='eveDateMode'>
                        <div className='eveDM'>
                            <Image style={{width:'2vw', height:'auto', marginRight:'5px'}} src={date}/>
                            <p className='mb'>April 30 to 31, 2023</p>
                        </div>
                        <div className='eveDM'>
                            <Image style={{width:'2vw', height:'auto', marginRight:'5px'}} src={mode}/>
                            <p className='mb'>Online Event</p>
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