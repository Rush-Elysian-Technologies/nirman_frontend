import React from 'react';
import logo from '../logo.svg'; 
import PopularArchitects from './PopularArchitects';
import Button from 'react-bootstrap/Button';
import FamousInteriors from './FamousInteriors';
import TopRatedCivilEngineers from './TopRatedCivilEngineers';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import HomePageCustomerTestimonials from './HomePageCustomerTestimonials';
import SliderGallery from './SliderGallery';
import "../App.css";
import {Container, Row, Col} from 'react-bootstrap';


function Home(){
    return(
        <>
 {/* search-bar container */}

 <div
      style={{
        background: 'url("logo.svg")', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '500px', // Set a suitable height for your container
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: '50px',
      }}
    >
         <Container className="py-5 text-center">
         <Form className="d-flex ">
         <Col xs={12} md={6} lg={4} className=" me-2">
            <Form.Control
              type="search"
              placeholder="Field"
              className="me-2"
              aria-label="Search"
            />
            </Col>
            <Col xs={12} md={6} lg={4} className=" me-2">
            <Form.Control
              type="search"
              placeholder="Location"
              className="me-2"
              aria-label="Search"
            />
            </Col>
            <Button variant="outline-primary">Search</Button>
          </Form> 
          </Container>
      {/* <Container className="py-5 text-center">
        <Row className="justify-content-center gx-2">
          <Col xs={12} md={6} lg={4}>
            <Form>
              <Form.Group className="mb-2">
                <Form.Control type="text" placeholder="Field " />
              </Form.Group>
            </Form>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Form>
              <Form.Group className="mb-2">
                <Form.Control type="text" placeholder="Location" />
              </Form.Group>
            </Form>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Button variant="primary" type="submit" className="mb-1">
              Search
            </Button>
          </Col>
        </Row>
      </Container> */}
    </div>
<br/>

<div className="custom-light-blue-bg text-dark p-4">
    <li>We’re here to help you, if you’re planning to:</li>
    <br/>
    <div className="assistence">
    <ul className="Assist">✓Remodel your bathroom</ul>
    <ul className="Assist">✓Remodel your kitchen</ul>
    <ul className="Assist">✓Custom walk-in closets</ul>
    <ul className="Assist">✓Remodel your bedrooms</ul>
    </div>
    {/* <div className="assistence">
        <ul className="Assist">✓Rewire or wire your whole house</ul>
        <ul className="Assist">✓Repair/replace your lights</ul>
        <ul className="Assist">✓Upgrade your service cable</ul>
        <ul className="Assist">✓Upgrade electrical system/panel</ul>
    </div> */}
    {/* <div className="assistence">
    <ul className="Assist">✓Install a new HVAC system</ul>
    <ul className="Assist">✓Fix your leaking pipes</ul>
    <ul className="Assist">✓Get the broken faucets fixed</ul>
    <ul className="Assist">✓Get a new dishwasher installed</ul>
    </div>
    <div className="assistence">
    <ul className="Assist">✓Repair your windows</ul>
    <ul className="Assist">✓Install a door knob</ul>
    <ul className="Assist">✓Assemble furniture</ul>
    <ul className="Assist">✓Dispose your unwanted items</ul>
    </div> */}
    <br/>
    <li>If you can’t find your issue above, don’t worry! These are only some of 200+ home improvement projects we can assist you with.</li>
    <br/>
</div>

<br/>

{/* Featured Projects */}

<section id="services" className="container">
    <h2>Featured Projects</h2>
    <div className="row">
        <div className="col-md-4">
            <div className="card">
            <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Individual Houses</h5>
                    <p className="card-text">"Turning houses into homes, one project at a time.</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
            <img src={logo} className="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 className="card-title">Apartments</h5>
                    <p className="card-text">We don't just build apartments; we build neighborhoods</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
            <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Gated Communities</h5>
                    <p className="card-text">designing neighborhoods where safety and quality of life intersect</p>
                </div>
            </div>
        </div>
    </div>
</section>
<br/>
     {/* Popular Architects */}
<section>
    <PopularArchitects/>
</section>
<br/>
     {/* TopRatedCivilEngineers */}
<section>
    <TopRatedCivilEngineers/>
</section>
<br/>
   {/* FamousInteriors */}
   <section>
    <FamousInteriors/>
   </section>
<br/>   
  {/* Gallery */}

<section>
    <SliderGallery/>
</section>
<br/>

  {/* customer testimonals */}

  <HomePageCustomerTestimonials/>
<br/>
{/* <div className="custom-dark-blue-bg text-light p-4">
    <li>We’re here to help you, if you’re planning to:</li>
    <br/>
    <div className="assistence">
    <ul className="Assist">✓Remodel your bathroom</ul>
    <ul className="Assist">✓Remodel your kitchen</ul>
    <ul className="Assist">✓Custom walk-in closets</ul>
    <ul className="Assist">✓Remodel your bedrooms</ul>
    </div>
    <div className="assistence">
        <ul className="Assist">✓Rewire or wire your whole house</ul>
        <ul className="Assist">✓Repair/replace your lights</ul>
        <ul className="Assist">✓Upgrade your service cable</ul>
        <ul className="Assist">✓Upgrade electrical system/panel</ul>
    </div>
    <div className="assistence">
    <ul className="Assist">✓Install a new HVAC system</ul>
    <ul className="Assist">✓Fix your leaking pipes</ul>
    <ul className="Assist">✓Get the broken faucets fixed</ul>
    <ul className="Assist">✓Get a new dishwasher installed</ul>
    </div>
    <div className="assistence">
    <ul className="Assist">✓Repair your windows</ul>
    <ul className="Assist">✓Install a door knob</ul>
    <ul className="Assist">✓Assemble furniture</ul>
    <ul className="Assist">✓Dispose your unwanted items</ul>
    </div>
    <br/>
    <li>If you can’t find your issue above, don’t worry! These are only some of 200+ home improvement projects we can assist you with.</li>
    <br/>
</div> */}
        </>
    )
}
export default Home;