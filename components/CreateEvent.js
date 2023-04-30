import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'
function CreateEvent() {
  const { user, login } = useAuth()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
      SourceLanguage: '',
      EventName: '',
      StartDate:'',
      EndDate:'',
      StartTime:'',
      EndTime:''
    })
  const router = useRouter()


    
  const uploadData = () => {
      setLoading(true)
      axios.post("http://localhost:8080/createEvent/", {
        title : data.EventName,
        startDate : data.StartDate,
        endDate: data.EndDate,
        timings: data.StartTime,
        userId : user.uid,
      } ).then((data) => {
          console.log(data);
          setLoading(false)
          // router.push('/eventDetails')
      }).catch((err) => {
        console.log(err);
        setLoading(false)
        alert(err)
      })
    }
  return (
    <div className='createEventWholeWrap'>
  <div className='createEventWrap'>    
<div>

    <Form onSubmit={uploadData}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><h3 className='mt-eventname'>Source Language</h3></Form.Label>
          <Form.Control
          className='sourceLanguageInp'
            onChange={(e) =>
              setData({
                ...data,
                SourceLanguage: e.target.value,
              })
            }
            value={data.SourceLanguage}
            required
            type="text"
            placeholder="English"
          />
        <Form.Label><h3 className='mt-eventname'>Event Name</h3></Form.Label>
          <Form.Control
          className='sourceLanguageInp'
            onChange={(e) =>
              setData({
                ...data,
                EventName: e.target.value,
              })
            }
            value={data.EventName}
            required
            type="text"
            
          />

<div className='wholeDateWrap'>
<div className='date'>
<Form.Label><h3 className='mt-eventname '>Start Date</h3></Form.Label>
          <Form.Control
          className='sourceLanguageInp2'
            onChange={(e) =>
              setData({
                ...data,
                StartDate: e.target.value,
              })
            }
            value={data.StartDate}
            required
            type="date"
          />
</div>
<div className='ml' ></div>
<div>
          <Form.Label><h3 className='mt-eventname'>Start Time</h3></Form.Label>
          <Form.Control
          className='sourceLanguageInp2'
            onChange={(e) =>
              setData({
                ...data,
                StartTime: e.target.value,
              })
            }
            value={data.StartTime}
            required
            type="time"
          />
</div>
</div>
<div className='wholeDateWrap'>
<div className='date'>
<Form.Label><h3 className='mt-eventname '>End Date</h3></Form.Label>
          <Form.Control
          className='sourceLanguageInp2'
            onChange={(e) =>
              setData({
                ...data,
                EndDate: e.target.value,
              })
            }
            value={data.EndDate}
            required
            type="date"
          />
</div>
<div className='ml' ></div>
<div>
          <Form.Label><h3 className='mt-eventname'>End Time</h3></Form.Label>
          <Form.Control
          className='sourceLanguageInp2'
            onChange={(e) =>
              setData({
                ...data,
                EndTime: e.target.value,
              })
            }
            value={data.EndTime}
            required
            type="time"
          />
</div>
</div>


</Form.Group>
      <div className='create-btn-wrap'>
      <Button className='submit-btn' variant="primary" type="submit">
        {
          loading ? 'Creating...' : 
          <span className='span-submit' ><h4>Create</h4></span>
        }
      </Button>
      <Button className='cancel-btn' variant="primary" type="submit">
       <span className='cancel-submit' onClick={() => router.push('/')}><h4>Cancel</h4></span>
      </Button>
      </div>
  
    </Form>
</div>

    </div>
</div>
  )
}

export default CreateEvent