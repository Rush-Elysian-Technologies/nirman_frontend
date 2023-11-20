import React, { useState, useEffect } from 'react';
import SideDashboard from './SideDashboard';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../../logo.svg';

function CustPrevAppointment() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments from your API
    fetch('http://127.0.0.1:8000/api/orders/')
      .then(response => response.json())
      .then(data => setAppointments(data))
      .catch(error => console.error('Error fetching appointments:', error));
  }, []); // Empty dependency array means this effect will run once after the initial render

  return (
    <>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-md-3 col-12 mb-2'>
            <SideDashboard />
          </div>
          {appointments.map(appointment => (
            <Link>
            <div key={appointment.id} className='col-md-3 col-12 mb-2'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src={logo} />
                <Card.Body>
                  <Card.Title>{appointment.title}</Card.Title>
                  <Card.Text>{appointment.details}</Card.Text>
                  <Link to={`/schedule/${appointment.id}`} className='btn btn-primary'>Schedule Appointment</Link>
                </Card.Body>
              </Card>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default CustPrevAppointment;




// import React from "react";
// import SideDashboard from "./SideDashboard";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import logo from '../../logo.svg'; 

// function CustPrevAppointment(){
//     return(
//       <>
//       <div className='container mt-4'>
//             <div className='row'>
//                 <div className='col-md-3 col-12 mb-2'>
//                     <SideDashboard />
//                 </div>
//       <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={logo} />
//       <Card.Body>
//         <Card.Title>Service Title</Card.Title>
//         <Card.Text>
//           Service Details
//         </Card.Text>
//         <Button variant="primary">Schedule Appointment</Button>
//       </Card.Body>
//     </Card>
//             </div>
            
//         </div>
//       </>
//     )
// }
// export default CustPrevAppointment;