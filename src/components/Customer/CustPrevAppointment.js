import React from "react";
import SideDashboard from "./SideDashboard";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../../logo.svg'; 

function CustPrevAppointment(){
    return(
      <>
      <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <SideDashboard />
                </div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>Service Title</Card.Title>
        <Card.Text>
          Service Details
        </Card.Text>
        <Button variant="primary">Schedule Appointment</Button>
      </Card.Body>
    </Card>
            </div>
            
        </div>
      </>
    )
}
export default CustPrevAppointment;