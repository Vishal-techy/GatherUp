import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios  from 'axios';
function NotificationCenter({eventId}) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        title: '',
        description: '',})

    const postContent = (e) => {
      e.preventDefault()
      console.log("Hey");
      setLoading(true)
      axios.post(`http://localhost:8080/sendMessage/${eventId}`, {
        title: data.title,
        description: data.description,
      }).then((res) => {

        setLoading(false)
      }).catch((err) => {
         setLoading(false)
         alert("Something went wrong")
      })  
    }
  return (
    <div className='NotificationCentercardWrap'>    
    <h2 className='NotificationCard-hero'>Notification Center</h2>
    <div>
    <Form onSubmit={postContent}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e) =>
              setData({
                ...data,
                title: e.target.value,
              })
            }
            value={data.title} className='emailInput' required placeholder='Title'/>
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
        {
          loading ?
          <div>Loading..</div> : 
        <Button className='submit-btn' variant="primary" type="submit" style={{color: 'white'}}>
          Submit
        </Button>
        }
      </div>
  
    </Form>
    </div>

    </div>
  )
}

export default NotificationCenter