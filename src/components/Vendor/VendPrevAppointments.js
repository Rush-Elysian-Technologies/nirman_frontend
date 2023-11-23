import React from "react";
import VendSideDashboard from "./VendSideDashboard";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../../logo.svg'; 

function VendPrevCustomers(){
    return(
      <>
      <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <VendSideDashboard />
                </div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>Service Title</Card.Title>
        <Card.Text>
          Service Details
        </Card.Text>
        <Button variant="primary">View Appointment Details</Button>
      </Card.Body>
    </Card>
            </div>
            
        </div>
      </>
    )
}
export default VendPrevCustomers;