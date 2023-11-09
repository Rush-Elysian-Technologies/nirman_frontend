import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from '../logo.svg'; 

function Architect() {
  return (
    <>
    <a href="/SingleArchitect">
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card style={{ width: '25rem' }} className="custom-card">
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>Vendor name </Card.Title>
              <Card.Text>
               vendor title
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </a>
    <h2>Related Services</h2>
    <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card style={{ width: '20rem' }} className="custom-card">
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>ABCDE</Card.Title>
              <Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  );
}

export default Architect;