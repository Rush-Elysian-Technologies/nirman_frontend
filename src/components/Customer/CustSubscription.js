import React from "react";
import SideDashboard from "./SideDashboard";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from "../../logo.svg";

function CustSubscription(){
    return(

        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <SideDashboard />
                </div>  
                <div className='col-md-9 col-12 mb-3 sub'>
              <div>
                <Card style={{ width: '16rem' }}>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>Silver Subscription</Card.Title>
                    <Card.Text>
                      details
                    </Card.Text>
                    <Card.Text>
                      Price:100
                    </Card.Text>
                    <Button variant="primary">Change Subscription/Subscribe</Button>
                  </Card.Body>
                </Card>
                </div><div>
                <Card style={{ width: '16rem' }}>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>Gold Subscription</Card.Title>
                    <Card.Text>
                      details
                    </Card.Text>
                    <Card.Text>
                      Price:200
                    </Card.Text>
                    <Button variant="primary">Change Subscription/Subscribe</Button>
                  </Card.Body>
                </Card>
                </div>
                <div>
                <Card style={{ width: '16rem' }}>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>Premium Subscription</Card.Title>
                    <Card.Text>
                      details
                    </Card.Text>
                    <Card.Text>
                      Price:300
                    </Card.Text>
                    <Button variant="primary">Change Subscription/Subscribe</Button>
                  </Card.Body>
                </Card>
                    {/* <div className='card'>
                        <h4 className='card-header'>Silver Subscription</h4>
                        <div className='card-body'>
                        <h5>details</h5>
                        <h5>Price:100</h5>
                        </div>
                    </div>
                    <div className='card'>
                        <h4 className='card-header'>Gold Subscription</h4>
                        <div className='card-body'>
                        <h5>details</h5>
                        <h5>Price:200</h5>
                        </div>
                    </div>
                    <div className='card'>
                        <h4 className='card-header'>Premium Subscription</h4>
                        <div className='card-body'>
                        <h5>details</h5>
                        <h5>Price:300</h5>
                        </div>*/}
                 </div>   
                </div> 
            </div>
            
        </div>

    )
}

export default CustSubscription;