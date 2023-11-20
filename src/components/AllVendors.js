import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, useParams } from 'react-router-dom';

function AllVendors(props) {
  const [vendors, setVendors] = useState([]);
  const { category_id } = useParams();

  useEffect(() => {
    // Fetch data from Django backend API
    fetch(`http://127.0.0.1:8000/api/servicecategory/${category_id}`)
      .then(response => response.json())   
      .then(json => setVendors(json))
      .catch(error => console.error('Error fetching vendors:', error));
  }, [category_id]);

  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {vendors.map(vendor => (
          <Col key={vendor.id}>
            {/* Use Link for navigation */}
            <Link to={`/vendor/${vendor.id}`}>
              <Card style={{ width: '25rem' }} className="custom-card">
                <Card.Img variant="top" src={vendor.logo} />
                <Card.Body>
                  <Card.Title>{vendor.title}</Card.Title>
                  <Card.Text>{vendor.vendor}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default AllVendors;






// import React, { useState, useEffect } from 'react';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import logo from '../logo.svg';

// function AllVendors(props) {
//   const [vendors, setVendors] = useState([]);

//   useEffect(() => {
//     // Fetch data from Django backend API
//     fetch('http://127.0.0.1:8000/api/servicecategory/<int:category_id>')
//       .then(response => response.json())
//       .then(data => setVendors(data))
//       .catch(error => console.error('Error fetching vendors:', error));
//   }, []); // Empty dependency array means, this effect will run once after the initial render is done

//   return (
//     <>
//       <Row xs={1} md={3} className="g-4">
//         {vendors.map(vendor => (
//           <Col key={vendor.id}>
//             <Card style={{ width: '25rem' }} className="custom-card">
//               <Card.Img variant="top" src={logo} /> {/* Replace 'image_url' with the actual property from your Django model */}
//               <Card.Body>
//                 <Card.Title>{vendor.name}</Card.Title> {/* Replace 'name' with the actual property from your Django model */}
//                 <Card.Text>
//                   {vendor.title}
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//       <h2>Related Services</h2>
//       {/* Your related services code here */}
//     </>
//   );
// }

// export default AllVendors;
// <h2>Related Services</h2>
//     <Row xs={1} md={4} className="g-4">
//       {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
//         <Col key={idx}>
//           <Card style={{ width: '20rem' }} className="custom-card">
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
// useEffect(() => {
  //   // Fetch data from Django backend API
  //   fetch('http://127.0.0.1:8000/api/servicecategory/<int:category_id>')
  //     .then(response => response.json())
  //     .then(json => setVendors(json))
  //     .catch(error => console.error('Error fetching vendors:', error));
  // }, [category_id]); // Empty dependency array means this effect will run once after the initial render
 // const[services,setServices]=useState([]);





// import React, { useState, useEffect } from 'react';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import logo from '../logo.svg'; 
// import { useParams } from 'react-router-dom';

// function AllVendors(props) {
//   const [vendors, setVendors] = useState([]);
//   const { category_id } = useParams();
//   // console.log('Category ID:', category_id);


//   useEffect(() => {
//     // Fetch data from Django backend API
//     fetch(`http://127.0.0.1:8000/api/servicecategory/<category_id>`)

//       .then(response => response.json())
//       .then(json => setVendors(json))
//       .catch(error => console.error('Error fetching vendors:', error));
//   }, [category_id]); // Empty dependency array means this effect will run once after the initial render
  

//   return (
//     <>
//     <a href="/SingleArchitect">
//     <Row xs={1} md={3} className="g-4">
//       {/* {Array.from({ length: 6 }).map((_, idx) => ( */}
//       {vendors.map(vendor => (
//         <Col key={vendor.id}>
//           <Card style={{ width: '25rem' }} className="custom-card">
//             <Card.Img variant="top" src={logo} />
//             <Card.Body>
//               <Card.Title>{vendor.title}</Card.Title>
//               <Card.Text>
//               {vendor.vendor}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//     </a>
//     </>
//   );
// }

// export default AllVendors;