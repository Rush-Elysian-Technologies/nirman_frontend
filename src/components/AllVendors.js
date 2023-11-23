import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, useParams } from 'react-router-dom';

function AllVendors(props) {
  const baseUrl = 'http://127.0.0.1:8000/api';
  const [vendors, setVendors] = useState([]);
  const [totalResult,setTotalResults] = useState(0);
  const { id,category_id, category_slug,categoryId} = useParams([]);
  
// Fetch data from API products
useEffect(() => {
   fetchData(baseUrl+'/servicecategory/?category='+category_id);
   //http://localhost:3000/AllVendors/$%7Bcategory_id%7D
   //http://localhost:3000/AllVendors/$%7Bcategory_id%7D
   fetchData(baseUrl+'/servicecategory/3');
  // http://localhost:3000/AllVendors/$%7Bcategory_id%7D
}, [category_id]);

function fetchData(baseurl) {
  fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
          // this shows product data results
          setVendors(data.results);
          // this is total products result
          setTotalResults(data.count);
      });
}

function changeUrl(baseurl){
  console.log(baseurl);
  fetchData(baseurl);
}

//  Create links for products
var links=[];
var limit=1;
var totalLinks=totalResult/limit;
for(let i=1; i<=totalLinks; i++){
    links.push(<li class="page-item"><Link onClick={()=>changeUrl(baseUrl+`/servicecategory/?category=${category_id}&page=${i}`)} to={`/category/${category_slug}/${category_id}/?page=${i}`} class="page-link">{i}</Link></li>)
}
  
  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {vendors&&vendors.map(vendor => (
          <Col key={vendor.id}>
            {/* Use Link for navigation */}
            <Link to={`/vendor/${vendor.id}`}>
              <Card style={{ width: '25rem' }} className="custom-card">
                <Card.Img variant="top" src={vendor.logo} />
                <Card.Body>
                  <Card.Title>{vendor.title}</Card.Title>
                  <Card.Text>{vendor.vendor.username}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <nav aria-label="Page navigation example">
                {/* we can show totla no of products here
                {totalResult} */}
                <ul class="pagination">
                    {links}
                </ul>
             </nav> 
      {/* <nav aria-label="Page navigation">
      <ul className="pagination">
      {paginationLinks}
      </ul>
    </nav> */}
    </>
  );
}

export default AllVendors;



// import React, { useState, useEffect } from 'react';

// import Card from 'react-bootstrap/Card';

// import Col from 'react-bootstrap/Col';

// import Row from 'react-bootstrap/Row';

// import logo from '../logo.svg';
 
// function AllVendors() {

//   const [services, setServices] = useState([]);
 
//   useEffect(() => {

//     const fetchData = async () => {

//       try {

//         const response = await fetch('/api/servicecategory/<category_id>/');

//         if (!response.ok) {

//           throw new Error('Network response was not ok');
//         }
 
//         const data = await response.json();

//         setServices(data);

//       } catch (error) {

//         console.error('Error fetching data:', error);

//       }

//     };
 
//     fetchData();

//   }, []); // Make sure to replace <category_id> with the actual category ID
 
//   return (

//     <>

//       <Row xs={1} md={3} className="g-4">

//         {services.map((service) => (

//           <Col key={service.id}>

//             <Card style={{ width: '25rem' }} className="custom-card">
              

//               {/* You may need to replace the following lines with your actual data */}

//               <Card.Img variant="top" src={logo} />

//               <Card.Body>

//                 <Card.Title>{service.vendor.username}</Card.Title>

//                 <Card.Text>{service.title}</Card.Text>

//               </Card.Body>

//             </Card>

//           </Col>

//         ))}

//       </Row>

//     </>

//   );

// }
 
// export default AllVendors;




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
//   // fetch(`http://127.0.0.1:8000/api/servicecategory/:category_id`)
  //   //  fetch(`http://127.0.0.1:8000/api/servicecategory/${category_id}`)
  //   //  fetch(`http://127.0.0.1:8000/api/servicecategory/?category=+${category_id}`)
  //   //  fetch(`http://127.0.0.1:8000/api/servicecategory/?category=${category_id}`)
  //   // fetch(`http://127.0.0.1:8000/api/servicecategory/<int:category_id>`)
  //   // fetch(`http://127.0.0.1:8000/api/servicecategory/<category_id>`)
  //   // fetch(`http://127.0.0.1:8000/api/servicecategory/category_id`)
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

  // const { id } = useParams();

  //  useEffect(() => {
  //    // Fetch data from Django backend API
  // fetch(`http://127.0.0.1:8000/api/servicecategory/?category=`+category_id)
  //  fetch(`http://127.0.0.1:8000/api/servicecategory/?category=3`)
  //  fetch(`http://127.0.0.1:8000/api/servicecategory/category_id`)
  //  // http://localhost:3000/AllVendors/$%7Bcategory_id%7D
  //  // fetch(`http://127.0.0.1:8000/api/servicecategory/3`)
  //  // http://localhost:3000/AllVendors/$%7Bcategory_id%7D
  // //  fetch(`http://127.0.0.1:8000/api/servicecategory/`+id)
  // // fetch(`http://127.0.0.1:8000/api/servicecategory/?category=`+id)
  // // fetch(`http://127.0.0.1:8000/api/servicecategory/${category_id}/`)
  // // fetch(`http://127.0.0.1:8000/api/servicecategory/${category_id}`)
  // // fetch(`http://127.0.0.1:8000/api/servicecategory/:category_id`)
  // // fetch(`http://127.0.0.1:8000/api/servicecategory/id`)
  // fetch(`http://127.0.0.1:8000/api/servicecategory/3`)
  // // fetch(`http://127.0.0.1:8000/api/servicecategory/`)
  //   .then(response => response.json())   
  //   .then(json => setVendors(json))
  // // .then(data => {
  // //   setVendors(data.results);
  // //   setTotalResults(data.count);
  // // })
  //   .catch(error => console.error('Error fetching vendors:', error));
  // }, [category_id]);