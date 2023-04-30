import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
function CreateEvent() {
    
    const [data, setData] = useState({
        SourceLanguage: '',
        EventName: '',
        StartDate:'',
        EndDate:'',
        StartTime:'',
        EndTime:''
      })
  return (
    <div className='createEventWholeWrap'>
  <div className='createEventWrap'>    
<div>

    <Form>
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
            type="email"
            placeholder="English"
          />
        <Form.Label><h3 className='mt-eventname'>Event Name</h3></Form.Label>
          <Form.Control
          className='sourceLanguageInp'
            onChange={(e) =>
              setData({
                ...data,
                EventName: e.EventName.value,
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
            type="text"
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
                StartTime: e.StartTime.value,
              })
            }
            value={data.StartTime}
            required
            type="text"
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
                EndDate: e.EndDate.value,
              })
            }
            value={data.EndDate}
            required
            type="text"
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
                EndTime: e.EndTime.value,
              })
            }
            value={data.EndTime}
            required
            type="text"
          />
</div>
</div>


</Form.Group>
      <div className='create-btn-wrap'>
      <Button className='submit-btn' variant="primary" type="submit">
       <span className='span-submit' ><h4>Create</h4></span>
      </Button>
      <Button className='cancel-btn' variant="primary" type="submit">
       <span className='cancel-submit'><h4>Cancel</h4></span>
      </Button>
      </div>
  
    </Form>
</div>

    </div>
</div>
  )
}

export default CreateEvent