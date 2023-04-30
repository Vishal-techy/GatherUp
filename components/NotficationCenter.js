import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
function NotificationCenter() {
    
    const [data, setData] = useState({
        title: '',
        description: '',
      })
  return (
    <div className='NotificationCentercardWrap'>    
    <h2 className='NotificationCard-hero'>Notification Center</h2>
    <div>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e) =>
              setData({
                ...data,
                title: e.target.value,
              })
            }
            value={data.title} className='emailInput' placeholder='Title'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control onChange={(e) =>
              setData({
                ...data,
                description: e.target.value,
              })
            }
            value={data.description}
            required type="text" className='passwordInput' placeholder="Description" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">

      </Form.Group>
      <div className='sub-btn-wrap'>
      <Button className='submit-btn' variant="primary" type="submit">
       <span className='span-submit' ><h4>send</h4></span>
      </Button>
      </div>
  
    </Form>
    </div>

    </div>
  )
}

export default NotificationCenter