import React from 'react'

function RegisteredUsers(props) {
  return (
    <div>
        <div className='regisUserCard1'>
            <div className='regisUserCard'>
                <div><div className='circle'></div></div>

                <div className='regisText1'>
                    <h3>{props.name}</h3>
                    <p>{props.email}</p>
                </div>
                <div className='regisText'>
                    <p>{props.mobile}</p>
                    <p>{props.location}</p>
                </div>
                <div className='Buttons'>
                        {/* <div className='eveButtonborderless'>
                            Show Tickets
                        </div> */}

                        <div className='eveButton'>
                            Initiate Refund
                        </div>
                    </div>
            </div>
    
        </div>
    </div>
  )
}

export default RegisteredUsers