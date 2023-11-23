import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SideDashboard from './SideDashboard';

function CustAddress(props) {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    // Fetch addresses from your API
    fetch('http://your-api-url/addresses-endpoint')
      .then(response => response.json())
      .then(data => setAddresses(data))
      .catch(error => console.error('Error fetching addresses:', error));
  }, []); // Empty dependency array means this effect will run once after the initial render

  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-3 col-12 mb-2'>
          <SideDashboard />
        </div>
        <div className='col-md-9 col-12 mb-2'>
          <div className='row'>
            <div className='col-12'>
              <Link to="/CustAddAddress" className='btn btn-outline-success mb-4 float-end'>
                <i className='fa fa-plus-circle'></i> Add Address
              </Link>
            </div>
          </div>
          <div className='row'>
            {addresses.map(address => (
              <div className='col-4 mb-4' key={address.id}>
                <div className={`card ${address.isDefault ? 'text-success' : ''}`}>
                  <div className='card-body'>
                    <h6>
                      {address.isDefault && (
                        <i className='fa fa-check-circle text-success mb2'>Default</i>
                      )}
                      {address.street}, {address.city}, {address.state}
                      <br />
                      phno: {address.phoneNumber}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustAddress;



// import SideDashboard from "./SideDashboard";
// import { Link } from 'react-router-dom';

// function CustAddress(props){
//     return(

//         <div className='container mt-4'>
//             <div className='row'>
//                 <div className='col-md-3 col-12 mb-2'>
//                     <SideDashboard />
//                 </div>
//                 <div className='col-md-9 col-12 mb-2'>
//                     <div className='row'>
//                         <div className='col-12'>
//                             <Link to="/CustAddAddress" className='btn btn-outline-success mb-4 float-end'>
//                                 <i className='fa fa-plus-circle'></i> Add Address
//                             </Link>
//                         </div>  
//                     </div>
//                     <div className='row'>
//                         <div className='col-4 mb-4'>
//                             <div className='card text-muted'>
//                                 <div className='card-body'>
//                                     <h6>
//                                     <i className='fa fa-check-circle text-success mb2'>Default</i><br/>
//                                     DR.No:10-10-10,Lakshmipuram,Guntur,Andhrapradesh
//                                     phno:1234567890
//                                     </h6>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='col-4 mb-4'>
//                             <div className='card'>
//                                 <div className='card-body text-muted'>
//                                     <h6>
//                                         <span className='badge bg-secondary mb-2'>Mark Default</span><br/>
//                                         DR.No:10-10-10,Lakshmipuram,Guntur,Andhrapradesh
//                                     phno:1234567890</h6>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='col-4 mb-4'>
//                             <div className='card'>
//                                 <div className='card-body text-muted'>
//                                     <h6>
//                                         <span className='badge bg-secondary mb-2'>Mark Default</span><br/>
//                                         DR.No:10-10-10,Lakshmipuram,Guntur,Andhrapradesh
//                                     phno:1234567890</h6>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
            
//         </div>

//     )
// }

// export default CustAddress;