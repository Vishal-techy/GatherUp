import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios  from 'axios';
import Image from 'next/image'

function PromotionCard({eventId}) {
    const [loading, setLoading] = useState(false)
    const [poster, setPoster] = useState()
    const [uploading, setUploading] = useState(false)
    const [data, setData] = useState({
        eventName : '',
        eventSubText : '',
        link : '',
        aboutCompany : '',
        name : '',
        date : '',

    })

    const postContent = (e) => {
      e.preventDefault()
      console.log(data);
      setLoading(true)
      axios.post(`http://localhost:8080/createImage/`, data).then((res) => {
        console.log(res.data);
        setPoster(res.data.imageUrl)
        setLoading(false)
      }).catch((err) => {
         setLoading(false)
         alert("Something went wrong")
      }) 
    
    }

    const postImageInsta = () => {
        
        setUploading(true)
        axios.post(`http://localhost:8080/createImage/postInsta`, {
            url : poster.image_url_jpg
        }).then((res) => {
            console.log(res.data);
            setUploading(false)
            alert("Posted Successfully")
        }).catch((err) => {
             setUploading(false)
             alert("Something went wrong")
        })
    }
  return (
    <>
    <div className='NotificationCentercardWholeWrap'>
    <div className='NotificationCentercardWrap'>    
    <h2 className='NotificationCard-hero'>Social media post</h2>
    <div>
    <Form onSubmit={postContent}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e) =>
              setData({
                ...data,
                eventName: e.target.value,
              })
            }
            value={data.eventName} className='emailInput2' placeholder='Event Name'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control onChange={(e) =>
              setData({
                ...data,
                eventSubText : e.target.value,
              })
            }
            value={data.eventSubText}
            required type="text" className='emailInput2' placeholder="Event Sub Text" />
      </Form.Group>
      <div className='flexFor-input'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e) =>
              setData({
                ...data,
              link : e.target.value,
              })
            }
            value={data.link} className='input3' placeholder='Website link or Video link'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control onChange={(e) =>
              setData({
                ...data,
                name : e.target.value,
              })
            }
            value={data.name}
            required type="text" className='input3' placeholder="Name" />
      </Form.Group>
      
      </div>
      <div className='flexFor-input'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e) =>
              setData({
                ...data,
                date: e.target.value,
              })
            }
            value={data.title} className='input3' placeholder='Date'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control onChange={(e) =>
              setData({
                ...data,
                aboutCompany: e.target.value,
              })
            }
            value={data.aboutCompany}
            required type="text" className='input3' placeholder="About Company" />
      </Form.Group>
      </div>
      <div className='sub-btn-wrap'>
      <Button className='submit-btn' variant="primary" type="submit">
       <span className='span-submit' ><h4>send</h4></span>
      </Button>
      </div>
  
    </Form>
    </div>
    </div>
    <div className='poster'>
        {
            // loading ?
            // !poster ?
            // <div>Preparing image..</div> : 
            // <Image src={poster.image_url_jpg} className='poster-img' width={400} height={628}/>
            // : null

            loading ?
            <div>Preparing image..</div> :
            poster ?
            <Image src={poster.image_url_jpg} className='poster-img' width={400} height={628}/>
            : null

        }
    </div>
    </div>
    {
        poster ?
        <div className='posting'> 
        {
            !uploading ?
            <button className='submit-btn3'style={{color: 'white'}} onClick={postImageInsta}>Post In Social Media</button> : <div>Posting...</div>
        }
        </div> : null
    }
        </>
  )
}

export default PromotionCard