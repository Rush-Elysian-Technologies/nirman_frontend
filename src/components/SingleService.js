import { Link } from 'react-router-dom';
import logo from '../logo.svg'; 
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
 
function SingleService(props) {
  const [isHovered, setIsHovered] = useState(true);
  const [isFlipped, setIsFlipped] = useState(true);
  const { category_id } = useParams();
 
  const handleCardHover = () => {
    setIsHovered(true);
  };
 
  const handleCardClick = () => {
    if (isFlipped) {
      // You can add the redirection logic here
      // For now, let's just log a message
      console.log('Redirecting to Architect...');
    } else {
      setIsFlipped(true);
    }
  };
 
  return (
<div
      className={`col-12 col-md-3 mb-4 ${isHovered ? 'hovered' : ''} ${isFlipped ? 'flipped' : ''}`}
      onMouseEnter={handleCardHover}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
>
<div className='cards'>
<div className={`card-${isFlipped ? 'back' : 'front'}`}>
<Link to= {`/AllVendors/${category_id}/`} className='cards-link'>
<img src={logo} className='card-img-top' alt='...' />
</Link>
<div className='card-body'>
    <h4 className='card-title'>
    <Card.Subtitle className='mb-2 text-muted'>{props.service.title}</Card.Subtitle>
    </h4>
    <h4 className='card-title'>
    <Card.Subtitle className='mb-2 text-muted'>{props.service.detail}</Card.Subtitle>
    </h4>
</div>
</div>
</div>
{/* <Link to={`/AllVendors/${category_id}`}> */}
<Link to={'/AllVendors/${category_id}'}>
<div className='card-body'>
    <h4 className='back-text'>
    <Card.Text className='mb-2 text-muted'>{props.service.title}</Card.Text>
    {/* <p>Architects are creative professionals who design and plan buildings, harmonizing aesthetics, functionality, and safety.</p> */}
    </h4>
</div>
</Link>
</div>
  );
}
 
export default SingleService;



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Card from 'react-bootstrap/Card';
// import logo from '../logo.svg';

// function SingleService(props) {
//   const [services, setServices] = useState([]);

//   // useEffect(() => {
//   //   // Fetch data from Django backend API
//   //   fetch('http:///api/services/')
//   //     .then(response => response.json())
//   //     .then(data => setServices(data))
//   //     .catch(error => console.error('Error fetching services:', error));
//   // }, []); // Empty dependency array means this effect will run once after the initial render

//   return (
//     <div className="row">
//       {services.map(service => (
//         <div key={service.id} className="col-12 col-md-3 mb-4">
//           <div className="cards">
//             <div className="card-front">
//               <Link to={`/services/${service.id}`} className="cards-link">
//                 <img src={logo} className="card-img-top" alt="Service Logo" />
//               </Link>
//               <div className="card-body">
//                 <h4 className="card-title">
//                   <Link to={`/services/${service.id}`}>
//                     <Card.Subtitle className="mb-2 text-muted">{props.service.title}</Card.Subtitle>
//                   </Link>
//                 </h4>
//               </div>
//             </div>
//             <Link to={`/services/${service.id}`}>
//               <div className="card-body">
//                 <h4 className="back-text">
//                   <Card.Text className="mb-2 text-muted">{props.service.description}</Card.Text>
//                 </h4>
//               </div>
//             </Link>
//           </div>
//         </div>
//        ))}
//     </div>
//   );
// }

// export default SingleService;