import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios  from 'axios';
function PromotionCard({eventId}) {
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
    <>
    <div className='NotificationCentercardWholeWrap'>
    <div className='NotificationCentercardWrap'>    
    <h2 className='NotificationCard-hero'>Social media post</h2>
    <div>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e) =>
              setData({
                ...data,
                title: e.target.value,
              })
            }
            value={data.title} className='emailInput2' placeholder='Title'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control onChange={(e) =>
              setData({
                ...data,
                description: e.target.value,
              })
            }
            value={data.description}
            required type="text" className='emailInput2' placeholder="Description" />
      </Form.Group>
      <div className='flexFor-input'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e) =>
              setData({
                ...data,
                title: e.target.value,
              })
            }
            value={data.title} className='input3' placeholder='Title'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control onChange={(e) =>
              setData({
                ...data,
                description: e.target.value,
              })
            }
            value={data.description}
            required type="text" className='input3' placeholder="Description" />
      </Form.Group>
      </div>
      <div className='flexFor-input'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e) =>
              setData({
                ...data,
                title: e.target.value,
              })
            }
            value={data.title} className='input3' placeholder='Title'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control onChange={(e) =>
              setData({
                ...data,
                description: e.target.value,
              })
            }
            value={data.description}
            required type="text" className='input3' placeholder="Description" />
      </Form.Group>
      </div>
      <div className='sub-btn-wrap'>
      <Button className='submit-btn' variant="primary" type="submit">
       <span className='span-submit' ><h4>Send</h4></span>
      </Button>
      </div>
  
    </Form>
    </div>
    </div>
    <div className='poster'>

    </div>
    </div>
        <div className='posting'> 
        <button className='submit-btn3'style={{color: 'white'}}>Post In Social Media</button>
        </div>
        </>
  )
}

export default PromotionCard