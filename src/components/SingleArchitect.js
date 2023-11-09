import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from '../logo.svg'; 
import { CardTitle, Container } from 'react-bootstrap';
import '../App.css';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faStarHalfStroke} from '@fortawesome/free-regular-svg-icons';


function SingleArchitect() {
  return (
    <div className='remove-margin'>
      <div>
  <Row noGutters>
    <Col md={6}>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <Card.Img src={logo} alt="Image 1" />
        </Carousel.Item>
        <Carousel.Item>
          <Card.Img src={logo} alt="Image 2" />
        </Carousel.Item>
        <Carousel.Item>
          <Card.Img src={logo} alt="Image 2" />
        </Carousel.Item>
        {/* Add more Carousel.Items with different images */}
      </Carousel>
    </Col>
    <Col md={6}>
      <Card.Body><br/>
        <Card.Title> Title: Architect</Card.Title><br/>
        <Card.Text>
          Description: Architects are creative professionals who design and plan buildings, harmonizing aesthetics, functionality, and safety. They translate clients' visions into blueprints, considering structural integrity, materials, and environmental impact. Architects play a crucial role in shaping our built environment, from homes and skyscrapers to public spaces, creating innovative and sustainable designs.
        </Card.Text>
        <Card.Title>Price:</Card.Title>
        <Card.Text>Per hour: Rs 10000-20000</Card.Text>
        <Card.Text>Per day: Rs 20000-30000 </Card.Text>
        <Card.Text>Per work: Rs 50000-90000  </Card.Text>
        <Card.Text>Per percentage: 5% - 6% </Card.Text>
        <Card.Text>Per sq.ft: Rs 50000-90000  </Card.Text>
        <Card.Title>Location: Guntur</Card.Title><br/>
        <Card.Title>Contact Number:3245678901</Card.Title><br/>
        <Card.Title>Rating: 4.5/5 <br/>
          <FontAwesomeIcon icon={faStar} /> 
          <FontAwesomeIcon icon={faStar} /> 
          <FontAwesomeIcon icon={faStar} /> 
          <FontAwesomeIcon icon={faStar} /> 
          <FontAwesomeIcon icon={faStarHalfStroke} /> </Card.Title>&nbsp;
        <Card.Text>Tags</Card.Text>
      </Card.Body>
    </Col>
  </Row>
  <br/>
  <div className=" remove-margin">
      <h1>Customer Reviews</h1>
      <br/>
      <div className="row">
        <div className="col-md-4">
          <div className="review-card">
            <h2>John Doe</h2>
            <div className="rating">★★★★☆</div>
            <p>Great service and excellent quality. Highly recommended!</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="review-card">
            <h2>Jane Smith</h2>
            <div className="rating">★★★★★</div>
            <p>Outstanding work! I'm very satisfied with their services.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="review-card">
            <h2>Bob Johnson</h2>
            <div className="rating">★★★☆☆</div>
            <p>Good job, but there is room for improvement.</p>
          </div>
        </div>
      </div>
    </div>
  {/* <h1>Customer Reviews</h1>
  <div class="reviews">
    <div class="review-card">
      <h2>John Doe</h2>
      <div class="rating">★★★★☆</div>
      <p>Great service and excellent quality. Highly recommended!</p>
    </div>
    <div class="review-card">
      <h2>Jane Smith</h2>
      <div class="rating">★★★★★</div>
      <p>Outstanding work! I'm very satisfied with their services.</p>
    </div>
    <div class="review-card">
      <h2>Bob Johnson</h2>
      <div class="rating">★★★☆☆</div>
      <p>Good job, but there is room for improvement.</p>
    </div>
  </div> */}

</div>

    {/* <Card>
      <Row noGutters>
        <Col md={6}>
          <Card.Img src={logo} alt="Image" />
        </Col> 
        <Col md={6}>
          <Card.Body>
            <Card.Title> Title: Architect</Card.Title>
            <Card.Text>
            Description:  Architects are creative professionals who design and plan buildings, harmonizing aesthetics, functionality, and safety. They translate clients' visions into blueprints, considering structural integrity, materials, and environmental impact. Architects play a crucial role in shaping our built environment, from homes and skyscrapers to public spaces, creating innovative and sustainable designs.
            </Card.Text>
            <Card.Text>Price:10000</Card.Text>
            <Card.Text>location:Guntur</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card> */}
    <br/>
    <h2>Similar Professionals</h2>
    <div>
    <Container fluid >
    <Row xs={1} sm={2} md={3} lg={4} className='remove-margin'>
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx} className="gx-o">
          <Card style={{ maxWidth: '16rem' }} className="mb-3">
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>Architect</Card.Title>
              <Card.Text>
                I'm a Architect
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
    </div>
    <br/>
    <h2>Related Services</h2>
    <div >
    <Container fluid >
    <Row xs={1} sm={2} md={3} lg={4} className='remove-margin'>
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx} className="gx-o">
          <Card style={{ width: '16rem' }} className="mb-3">
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
    </Container>
    </div>
    </div>
  );
}

export default SingleArchitect;

