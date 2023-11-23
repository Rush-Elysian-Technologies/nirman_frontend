import React, { useState, useEffect } from 'react';
import SingleService from './SingleService';

function Services(props) {
//   const service=[
//     {
//     "title":'Architect',
//     'detail':'Teja Interiors'
//   },
//   {
//     "title":'Civil Engineer',
//     'detail':'Chowturi engineers'
//   },
// ]
  const [Services, setServices] = useState([]);

  useEffect(() => {
    // Fetch data from Django backend API
    fetch('http://127.0.0.1:8000/api/servicecategories')
      .then(response => response.json())
      .then(json => setServices(json))
      .catch(error => console.error('Error fetching vendors:', error));
  }, []); // Empty dependency array means this effect will run once after the initial render

  return (
    <>
      <section className='container mt-4'>
        <h3 className='mb-4'>All Services</h3>
        <div className='row mb-4'>
          {Services&&Services.map(service => (
            <SingleService key={service.id} service={service}/>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;





// import React, { useState, useEffect } from 'react';
// import SingleService from './SingleService';

// function Services(props) {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     // Fetch data from Django backend API
//     fetch('http://127.0.0.1:8000/api/servicecategories/')
//       .then(response => response.json())
//       .then(data => setServices(data))
//       .catch(error => console.error('Error fetching services:', error));
//   }, []); // Empty dependency array means this effect will run once after the initial render

//   return (
//     <>
//       <section className='container mt-4'>
//         <h3 className='mb-4'>All Services</h3>
//         <div className='row mb-4'>
//           {services.map(service => (
//             <SingleService service={service}/>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }

// export default Services;





// import React from 'react';
// import {Link} from 'react-router-dom';
// import SingleService from './SingleService';

// function Services(){
//     return(
//         <>
//         <section className='container mt-4'>
//         <h3 className='mb-4'>All Services</h3>
//             <div className='row mb-4'>
//                 <SingleService title="Service-1" />
//                 <SingleService title="Service-1" />
//                 <SingleService title="Service-1" /> key={service.id} title={service.title} 
//                 <SingleService title="Service-1" />
//                 <SingleService title="Service-1" />
//                 <SingleService title="Service-1" />
//                 <SingleService title="Service-1" />
//                 <SingleService title="Service-1" />
//                 <SingleService title="Service-1" />
//                 <SingleService title="Service-1" />
//                 <SingleService title="Service-1" />
//                 <SingleService title="Service-1" />
//             </div>

//         </section>
//         </>
//     )
// }

// export default Services;