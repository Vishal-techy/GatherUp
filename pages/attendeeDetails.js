import NavBar from '@/components/NavBar'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import date from '../public/date.png'
import mode from '../public/mode.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import temp1 from '@/public/temp1.jpeg'
import temp2 from '@/public/temp2.jpeg'

function attendeeDetails() {
        
    const [data, setData] = useState({
        name : '',
        email : '',
        mobileNum : '',
        age : '',
        location : '',
        occupation : '',
        blood : '',
        
      })
  return (
    <div>
        <NavBar/>

        <div className='eventCard1'>
            <div className='eveHeading'>
                International Web 3.0 conference @Bengaluru                    
                <div className='eveDateMode'>
                        <div className='eveDM1'>
                            <Image style={{width:'2vw', height:'auto', marginRight:'5px'}} src={date}/>
                            <p className='eveDet'>April 30 to 31, 2023</p>
                        </div>
                        <div className='eveDM1'>
                            <Image style={{width:'2vw', height:'auto', marginRight:'5px'}} src={mode}/>
                            <p className='eveDet'>Online Event</p>
                        </div>
                    </div>
            </div>
        </div>

<div className='eventDetailsWrap'>
        <div className='eventDetailsLeft'>
    <Form>
      <Form.Group  style={{display:'flex'}} controlId="formBasicEmail">
        <Form.Control onChange={(e) =>
              setData({
                ...data,
                name: e.target.value,
              }) } value={data.name} type='text' className='emailInput' required placeholder='Enter Name'/>
      </Form.Group>

      <Form.Group  style={{display:'flex'}} controlId="formBasicEmail">
        <Form.Control  onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              }) } value={data.email} type='email' className='emailInput' required placeholder='Enter Email'/>
      </Form.Group>

      <Form.Group  style={{display:'flex'}} controlId="formBasicEmail">
        <Form.Control  onChange={(e) =>
              setData({
                ...data,
                mobileNum: e.target.value,
              }) } value={data.mobileNum} type='number' className='emailInput' required placeholder='Enter Mobile Number'/>
      </Form.Group>

      <Form.Group  style={{display:'flex'}} controlId="formBasicEmail">
        <Form.Control  onChange={(e) =>
              setData({
                ...data,
                age: e.target.value,
              }) } value={data.age} type='number' className='emailInput' required placeholder='Enter Age'/>
      </Form.Group>

      <Form.Group  style={{display:'flex'}} controlId="formBasicEmail">
        <Form.Control  onChange={(e) =>
              setData({
                ...data,
                location: e.target.value,
              }) } value={data.location} type='text' className='emailInput' required placeholder='Enter Location (Eg: Coimbatore, Electronic City)'/>
      </Form.Group>

      <Form.Group  style={{display:'flex'}} controlId="formBasicEmail">
        <Form.Control  onChange={(e) =>
              setData({
                ...data,
                occupation: e.target.value,
              }) } value={data.occupation} type='text' className='emailInput' required placeholder='Enter Occupation'/>
      </Form.Group>

      <Form.Group  style={{display:'flex'}} controlId="formBasicEmail">
        <Form.Control  onChange={(e) =>
              setData({
                ...data,
                blood: e.target.value,
              }) } value={data.blood} type='text' className='emailInput' required placeholder='Enter Blood Group'/>
      </Form.Group>



      
  
      <div className='sub-btn-wrap'>
        
        <Button className='submit-btn' variant="primary" type="submit" style={{color: 'white'}}>
          Submit
        </Button>
      </div>

    </Form>
        </div>

        
        </div>
    </div>
  )
}

export default attendeeDetails