import React from 'react'

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
            

            <div className='eventContent'>
                <div className='eventPoster'>
                    
                </div>
                <div className='eventDescription'>
                    <div className='eveDesc'>
                        Lorem simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                    <div className='eveDateMode'>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className='preview'></div>
            </div>
        </div>
    </div>
  )
}

export default EventCard