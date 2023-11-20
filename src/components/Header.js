import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

function LoginHeader(){
    return(
    <>
    {/* <Nav>
      <h5 className="text-center py-2 mx-auto">Location</h5>
    </Nav> */}
    <Navbar expand="lg" className="bg-body-tertiary py-4">
      <Container>
        <Navbar.Brand href="/" className='me-4'>NirMan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className=' ms-auto'>
          <Nav className="me-auto px-5 mx-auto ">
            {/* <Nav className=' flex-end'> */}
            <Form className="d-flex me-4 ms-auto">
            <Form.Control
              type="search"
              placeholder="Location"
              className="me-2"
              aria-label="Search"
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
            <Nav.Link href="/Services" className='me-4'>Services</Nav.Link>
            {/* </Nav> */}
            {/* <Nav.Link href="/Services" className='me-4'>Buy/Sell</Nav.Link> */}
            <NavDropdown title="Buy/Sell" id="basic-nav-dropdown" className='me-4'>
            <NavDropdown.Item href="/Buy">Buy</NavDropdown.Item>
              <NavDropdown.Item href="/Sell">Sell</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Rent" className='me-4'>Rent</Nav.Link>
            <NavDropdown title="My Account" id="basic-nav-dropdown" className='me-4'>
              <NavDropdown.Item href="/Register">Register</NavDropdown.Item>
              <NavDropdown.Item href="/Login">
                LogIn
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </>
    )
}

function CustHeader(){
  return(
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">NirMan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto px-5 mx-auto ">
            <Form className="d-flex me-4 ms-auto">
            <Form.Control
              type="search"
              placeholder="Location"
              className="me-2"
              aria-label="Search"
            />
          </Form>
            {/* <Nav.Link href="/Services" className='me-4'>Services</Nav.Link> */}
            <Nav.Link href="/Services">Services</Nav.Link>
            <NavDropdown title="Buy/Sell" id="basic-nav-dropdown" className='me-4'>
            <NavDropdown.Item href="/Buy">Buy</NavDropdown.Item>
              <NavDropdown.Item href="/Sell">Sell</NavDropdown.Item>
              </NavDropdown>
            <Nav.Link href="/Rent">Rent</Nav.Link>
            <NavDropdown title="My Account" id="basic-nav-dropdown" className='me-4'>
              <NavDropdown.Item href="/SideDashboard">Dashboard</NavDropdown.Item>
              {/* <NavDropdown.Item href="/VendSideDashboard">Dashboard</NavDropdown.Item> */}
              <NavDropdown.Item href="/Login">
                LogOut
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
function VendHeader(){
  return(
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">NirMan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto px-5 mx-auto ">
            <Form className="d-flex me-4 ms-auto">
            <Form.Control
              type="search"
              placeholder="Location"
              className="me-2"
              aria-label="Search"
            />
          </Form>
            <Nav.Link href="/Services">Services</Nav.Link>
            <NavDropdown title="Buy/Sell" id="basic-nav-dropdown" className='me-4'>
            <NavDropdown.Item href="/Buy">Buy</NavDropdown.Item>
              <NavDropdown.Item href="/Sell">Sell</NavDropdown.Item>
              </NavDropdown>
            <Nav.Link href="/Rent">Rent</Nav.Link>
            <NavDropdown title="My Account" id="basic-nav-dropdown" className='me-4'>
              <NavDropdown.Item href="/VendSideDashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Item href="/Login">
                LogOut
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}


function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userType, setUserType] = useState('customer');
  let headerComponent;
  if (userType === 'customer') {
    headerComponent = isLoggedIn ? <CustHeader /> : <LoginHeader />;
  } else {
    headerComponent = isLoggedIn ? <VendHeader /> : <LoginHeader />;
  }
  return (
    <div>
      {headerComponent}
    </div>
  );
}

 export default Header;