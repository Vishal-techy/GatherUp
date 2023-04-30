import NavBar from '@/components/NavBar'
import React from 'react'
import Image from 'next/image'
import date from '../public/date.png'
import mode from '../public/mode.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import temp1 from '@/public/temp1.jpeg'
import temp2 from '@/public/temp2.jpeg'

function eventDetails() {
        
    const [data, setData] = useState({
        sourceLang : '',
        eventName : '',
        summary : '',
        speakerName1 : '',
        speakerDet1 : '',
        speakerImg1 : '',
        speakerName2 : '',
        speakerDet2 : '',
        speakerImg2 : '',
        eventDescription : '',
        eventCategory : '',
        eventTags : '',
        twitterLink : '',
        instagramLink : '',
        facebookLink : '',
        resourceImg : '',
        resourceVid : '',

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
                sourceLang: e.target.value,
              }) } value={data.sourceLang} className='emailInput' required placeholder='Enter Source Langauge'/>
      </Form.Group>

      <Form.Group  style={{display:'flex'}} controlId="formBasicEmail">
        <Form.Control  onChange={(e) =>
              setData({
                ...data,
                eventName: e.target.value,
              }) } value={data.eventName} className='emailInput' required placeholder='Event Name'/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control  onChange={(e) =>
              setData({
                ...data,
                summary: e.target.value,
              }) } value={data.summary}  required className='summary' placeholder="Summary" />
      </Form.Group>

    <h3 style={{marginTop:"20px"}}>Event Speaker 1 Details</h3>

    <Form.Group  style={{display:'flex'}} controlId="formBasicEmail">
        <Form.Control onChange={(e) =>
              setData({
                ...data,
                speakerName1: e.target.value,
              }) } value={data.speakerName1} className='emailInput' required placeholder='Speaker Name'/>
      </Form.Group>

      <Form.Group  style={{display:'flex'}} controlId="formBasicEmail">
        <Form.Control onChange={(e) =>
              setData({
                ...data,
                speakerDet1: e.target.value,
              }) } value={data.speakerDet1} className='emailInput' required placeholder='Speaker Details'/>
      </Form.Group>

      <p style={{marginTop:"30px"}}>Speaker Image</p>
      <Form.Group  style={{display:'flex'}} controlId="formBasicEmail">
        <Form.Control onChange={(e) =>
              setData({
                ...data,
                speakerImg1: e.target.value,
              }) } value={data.speakerImg1} className='imgUpload' type='file' required placeholder='Speaker 1 Image'/>
      </Form.Group>

      <h3 style={{marginTop:"30px"}}>Event Speaker 2 Details</h3>

    <Form.Group  style={{display:'flex'}} controlId="formBasicEmail">
        <Form.Control onChange={(e) =>
              setData({
                ...data,
                speakerName2: e.target.value,
              }) } value={data.speakerName2} className='emailInput' required placeholder='Speaker Name'/>
      </Form.Group>

      <Form.Group  style={{display:'flex'}} controlId="formBasicEmail">
        <Form.Control onChange={(e) =>
              setData({
                ...data,
                speakerDet2: e.target.value,
              }) } value={data.speakerDet2} className='emailInput' required placeholder='Speaker Details'/>
      </Form.Group>

      <p style={{marginTop:"30px"}}>Speaker Image</p>
      <Form.Group  style={{display:'flex'}} controlId="formBasicEmail">
        <Form.Control onChange={(e) =>
              setData({
                ...data,
                speakerImg2: e.target.value,
              }) } value={data.speakerImg2} className='imgUpload' type='file' required placeholder='Speaker 2 Image'/>
      </Form.Group>

      <h3 style={{marginTop:"30px"}}>Select Template</h3>
            <div style={{display:'flex', marginTop:'15px'}}>
                <div className='template1'>
                    <Image className='template1' src={temp1}/>
                </div>
                <div className='template2'>
                    <Image className='template2' src={temp2}/>
                </div>
            </div>
{/* 
      <Form.Group className="mb-3" controlId="formBasicCheckbox">

      </Form.Group> */}
      
  
    </Form>
        </div>

        <div className='eventDetailsRight'>
            <Form>
            <Form.Group controlId="formBasicPassword">
                <Form.Control onChange={(e) =>
              setData({
                ...data,
                eventDescription: e.target.value,
              }) } value={data.eventDescription} required className='summary' placeholder="Description" />
            </Form.Group>

            <Form.Group  style={{display:'flex'}} controlId="formBasicEmail">
                <Form.Control onChange={(e) =>
              setData({
                ...data,
                eventCategory: e.target.value,
              }) } value={data.eventCategory} className='emailInput' required placeholder='Enter Category'/>
            </Form.Group>

            <Form.Group  style={{display:'flex'}} controlId="formBasicEmail">
                <Form.Control onChange={(e) =>
              setData({
                ...data,
                eventTags: e.target.value,
              }) } value={data.eventTags} className='emailInput' required placeholder='Enter Tags'/>
            </Form.Group>

            <h3 style={{marginTop:"30px"}}>Social Handles</h3>

            <Form.Group  style={{display:'flex'}} controlId="formBasicEmail">
                <Form.Control onChange={(e) =>
              setData({
                ...data,
                twitterLink: e.target.value,
              }) } value={data.twitterLink} className='emailInput' required placeholder='Enter Twitter Link'/>
            </Form.Group>

            <Form.Group  style={{display:'flex'}} controlId="formBasicEmail">
                <Form.Control onChange={(e) =>
              setData({
                ...data,
                instagramLink: e.target.value,
              }) } value={data.instagramLink} className='emailInput' required placeholder='Enter Instagram Link'/>
            </Form.Group>

            <Form.Group  style={{display:'flex'}} controlId="formBasicEmail">
                <Form.Control onChange={(e) =>
              setData({
                ...data,
                facebookLink: e.target.value,
              }) } value={data.facebookLink} className='emailInput' required placeholder='Enter Facebook Link'/>
            </Form.Group>

            <h3 style={{marginTop:"30px"}}>Other Resources</h3>

            <p style={{marginTop:"30px"}}>Images</p>
            <Form.Group  style={{display:'flex'}} controlId="formBasicEmail">
                <Form.Control onChange={(e) =>
              setData({
                ...data,
                resourceImg: e.target.value,
              }) } value={data.resourceImg} className='imgUpload' type='file' required placeholder='Upload Images'/>
            </Form.Group>

            <Form.Group  style={{display:'flex'}} controlId="formBasicEmail">
                <Form.Control onChange={(e) =>
              setData({
                ...data,
                resourceVid: e.target.value,
              }) } value={data.resourceVid} className='emailInput' required placeholder='Provide video links'/>
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

export default eventDetails