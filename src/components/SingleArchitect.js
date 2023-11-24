import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import logo from '../logo.svg';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faStar,faStarHalfStroke} from '@fortawesome/free-regular-svg-icons';
 import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
 import { Link,  useParams } from 'react-router-dom';

function SingleArchitect() {
 // const [vendors, setVendors] = useState([]);
  const [totalResult,setTotalResults] = useState(0);
  const [similarProfessionals, setSimilarProfessionals] = useState([]);
  const [relatedServices, setRelatedServices] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [architectData,setArchitectData]=useState([]);
  const baseUrl = 'http://127.0.0.1:8000/api';
  const { category_id,category_slug} = useParams();
  // const vendorId = 1;
  
  // useEffect(() => {
  //   const fetchArchitectData = async () => {
  //     try {
  //       const response = await fetch(`http://127.0.0.1:8000/api/servicecategory/vendors/1`);
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       setArchitectData(data);
  //     } catch (error) {
  //       console.error('Error fetching architect data:', error);
  //     }
  //   };

  useEffect(() => {
    // Fetch data from Django backend API
    fetch('http://127.0.0.1:8000/api/servicecategory/vendors/1')
      .then(response => response.json())
      .then(json => setArchitectData(json))
      // .then(json => {
      //   // Check if the response is an array or an object with an array property
      //   const servicesArray = Array.isArray(json) ? json : json.services;
      //   setServices(servicesArray);
      // })
      .catch(error => console.error('Error fetching vendors:', error));
  }, []); // Empty dependency array means this effect will run once after the initial render


  //   fetchArchitectData();
  // }, [pk]);
  // useEffect(() => {
  //   fetchData(`${baseUrl}/servicecategory/vendors/1`);
  // }, []);
  
  // function fetchData(baseurl) {
  //   fetch(baseurl)
  //     .then((response) =>  response.json())
  //     .then((data) => {
  //       // This shows product data results
  //       setArchitectData(data.results);
  //       // This is the total products result
  //       setTotalResults(data.count);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching architect data:', error);
  //     });
  // }
  
  // function changeUrl(baseurl) {
  //   console.log(baseurl);
  //   fetchData(baseurl);
  // }
  
  // // Create links for products
  // var links = [];
  // var limit = 1;
  // var totalLinks = totalResult / limit;
  // for (let i = 1; i <= totalLinks; i++) {
  //   links.push(
  //     <li class="page-item">
  //       <Link
  //         onClick={() =>
  //           changeUrl(`${baseUrl}/servicecategory/vendors/?category=${category_id}&page=${i}`)} to={`/servicecategory/vendors/category/${category_slug}/${category_id}/?page=${i}`}class="page-link">
  //         {i}
  //       </Link>
  //     </li>
  //   );
  // }
  
  // useEffect(() => {
  //   fetch('http://127.0.0.1:8000/api/servicecategory/vendors/1')
  //   // fetch('http://127.0.0.1:8000/api/servicecategory/vendors/${vendorId}')
  //     .then(response => response.json())
  //     .then(data => {
  //       const vendorId = data.vendorId;
  //       setSimilarProfessionals(data)})
  //     .catch(error => console.error('Error fetching similar professionals:', error))});
  useEffect(() => {
    // Fetch data for Related Services
    fetch('http://127.0.0.1:8000/api/service/tag/<str:tag>/')
      .then(response => response.json())
      .then(data => setRelatedServices(data))
      .catch(error => console.error('Error fetching tags:', error));

      fetch('http://127.0.0.1:8000/api/related-services/1')
      .then(response => response.json())
      .then(data => setRelatedServices(data))
      .catch(error => console.error('Error fetching related services:', error));

    // Fetch data for Customer Reviews
    fetch('http://127.0.0.1:8000/api/Customer/reviews/')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching customer reviews:', error));
  }, []);

  return (
    <>
    <div className='remove-margin'>
      <Row noGutters>
        <Col md={6}>
          <Carousel data-bs-theme="dark">
            {/* {architectData.images && architectData.images.map((image, index) => (
              <Carousel.Item key={index}>
                <Card.Img src={image} alt={`Image ${index + 1}`} />
              </Carousel.Item>
            ))} */}
          </Carousel>
        </Col>
        <Col md={6}><br />
          <Card.Body>
           {/* {architectData&&architectData.map((review, id) => ( */}
           <Card.Title>{`Title: ${architectData?.title}`}</Card.Title>
            {/* <Card.Title>{`Title: ${architectData.title}`}</Card.Title><br /> */}
            <Card.Text>{`Description: ${architectData?.description}`}</Card.Text>
            <Card.Title>Price:</Card.Title>
            <Card.Text>{`Per Hour:${architectData?.price_per_hour}`}</Card.Text>
            <Card.Text>{`Per Day:${architectData?.perDay}`}</Card.Text>
            <Card.Text>{`Per Service:${architectData?.perService}`}</Card.Text>
            <Card.Text>{`Per Sq.ft:${architectData?.perSqfeet}`}</Card.Text> 
            <Card.Title>{`Location: ${architectData?.location}`}</Card.Title><br />
            <Card.Title>{`Contact Number: ${architectData?.contact_number}`}</Card.Title><br />
            <Card.Title>{`Rating: ${architectData?.rating}/5`}</Card.Title>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} />
            <Card.Text>{`Tag: ${architectData?.Tag}`}</Card.Text>
          {/* ))} */}
          </Card.Body>
        </Col>
      </Row>
    </div>
    <br/>
    {/* Customer Reviews */}
    <div>
    <h1>Customer Reviews</h1>
    <br />
    <div className="row">
      {reviews&&reviews.map((review, id) => (
        <div key={reviews.id} className="col-md-4">
          <div className="review-card">
            <h2>{review.customerName}</h2>
            <div className="rating">★★★★☆</div>
            <p>{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Similar Professionals */}

  <h2>Similar Professionals</h2>
      <Container fluid>
        <Row xs={1} sm={2} md={3} lg={4} className='remove-margin'>
  {Array.isArray(similarProfessionals) && similarProfessionals.map(professional => (
  <Col key={professional.id} className="gx-o">
    <Card style={{ maxWidth: '16rem' }} className="mb-3">
      <Card.Img variant="top" src={logo} alt={`Image ${professional.id}`} />
      <Card.Body>
        <Card.Title>{professional.title}</Card.Title>
        <Card.Text>{professional.description}</Card.Text>
      </Card.Body>
    </Card>
  </Col>
))}
</Row>
</Container>
      
      {/* <h2>Similar Professionals</h2>
      <Container fluid>
        <Row xs={1} sm={2} md={3} lg={4} className='remove-margin'>
          {similarProfessionals&&similarProfessionals.map(professional => (
            <Col key={professional.id} className="gx-o">
              <Card style={{ maxWidth: '16rem' }} className="mb-3">
                <Card.Img variant="top" src={logo} alt={`Image ${professional.id}`} />
                <Card.Body>
                  <Card.Title>{professional.title}</Card.Title>
                  <Card.Text>{professional.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container> */}

      {/* Related Services */}
      <h2>Related Services</h2>
      <Container fluid>
        <Row xs={1} sm={2} md={3} lg={4} className='remove-margin'>
          {relatedServices.map(service => (
            <Col key={service.id} className="gx-o">
              <Card style={{ width: '16rem' }} className="mb-3">
                <Card.Img variant="top" src={logo} alt={`Image ${service.id}`} />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  {/* Add more fields as needed */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    {/* </div> */}
    </>
  );
}

export default SingleArchitect;







// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import logo from '../logo.svg'; 
// import { CardTitle, Container } from 'react-bootstrap';
// import '../App.css';
// import { Carousel } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar,faStarHalfStroke} from '@fortawesome/free-regular-svg-icons';


// function SingleArchitect() {
//   return (
//     <div className='remove-margin'>
//       <div>
//   <Row noGutters>
//     <Col md={6}>
//       <Carousel data-bs-theme="dark">
//         <Carousel.Item>
//           <Card.Img src={logo} alt="Image 1" />
//         </Carousel.Item>
//         <Carousel.Item>
//           <Card.Img src={logo} alt="Image 2" />
//         </Carousel.Item>
//         <Carousel.Item>
//           <Card.Img src={logo} alt="Image 2" />
//         </Carousel.Item>
//         {/* Add more Carousel.Items with different images */}
//       </Carousel>
//     </Col>
//     <Col md={6}>
//       <Card.Body><br/>
//         <Card.Title> Title: Architect</Card.Title><br/>
//         <Card.Text>
//           Description: Architects are creative professionals who design and plan buildings, harmonizing aesthetics, functionality, and safety. They translate clients' visions into blueprints, considering structural integrity, materials, and environmental impact. Architects play a crucial role in shaping our built environment, from homes and skyscrapers to public spaces, creating innovative and sustainable designs.
//         </Card.Text>
//         <Card.Title>Price:</Card.Title>
//         <Card.Text>Per hour: Rs 10000-20000</Card.Text>
//         <Card.Text>Per day: Rs 20000-30000 </Card.Text>
//         <Card.Text>Per work: Rs 50000-90000  </Card.Text>
//         <Card.Text>Per percentage: 5% - 6% </Card.Text>
//         <Card.Text>Per sq.ft: Rs 50000-90000  </Card.Text>
//         <Card.Title>Location: Guntur</Card.Title><br/>
//         <Card.Title>Contact Number:3245678901</Card.Title><br/>
//         <Card.Title>Rating: 4.5/5 <br/>
//           <FontAwesomeIcon icon={faStar} /> 
//           <FontAwesomeIcon icon={faStar} /> 
//           <FontAwesomeIcon icon={faStar} /> 
//           <FontAwesomeIcon icon={faStar} /> 
//           <FontAwesomeIcon icon={faStarHalfStroke} /> </Card.Title>&nbsp;
//         <Card.Text>Tags</Card.Text>
//       </Card.Body>
//     </Col>
//   </Row>
//   <br/>
//   <div className=" remove-margin">
//       <h1>Customer Reviews</h1>
//       <br/>
//       <div className="row">
//         <div className="col-md-4">
//           <div className="review-card">
//             <h2>John Doe</h2>
//             <div className="rating">★★★★☆</div>
//             <p>Great service and excellent quality. Highly recommended!</p>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="review-card">
//             <h2>Jane Smith</h2>
//             <div className="rating">★★★★★</div>
//             <p>Outstanding work! I'm very satisfied with their services.</p>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="review-card">
//             <h2>Bob Johnson</h2>
//             <div className="rating">★★★☆☆</div>
//             <p>Good job, but there is room for improvement.</p>
//           </div>
//         </div>
//       </div>
//     </div>
// </div>
//     <br/>
//     <h2>Similar Professionals</h2>
//     <div>
//     <Container fluid >
//     <Row xs={1} sm={2} md={3} lg={4} className='remove-margin'>
//       {Array.from({ length: 4 }).map((_, idx) => (
//         <Col key={idx} className="gx-o">
//           <Card style={{ maxWidth: '16rem' }} className="mb-3">
//             <Card.Img variant="top" src={logo} />
//             <Card.Body>
//               <Card.Title>Architect</Card.Title>
//               <Card.Text>
//                 I'm a Architect
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//     </Container>
//     </div>
//     <br/>
//     <h2>Related Services</h2>
//     <div >
//     <Container fluid >
//     <Row xs={1} sm={2} md={3} lg={4} className='remove-margin'>
//       {Array.from({ length: 4 }).map((_, idx) => (
//         <Col key={idx} className="gx-o">
//           <Card style={{ width: '16rem' }} className="mb-3">
//             <Card.Img variant="top" src={logo} />
//             <Card.Body>
//               <Card.Title>ABCDE</Card.Title>
//               <Card.Text>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//     </Container>
//     </div>
//     </div>
//   );
// }

// export default SingleArchitect;

