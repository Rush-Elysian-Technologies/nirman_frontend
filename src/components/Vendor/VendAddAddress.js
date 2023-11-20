import React, { useState, useEffect } from 'react';
import VendSideDashboard from "./VendSideDashboard";

function VendAddAddress() {
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    // Fetch address and phone number from your API
    fetch('http://127.0.0.1:8000/api/vendor-add-address/')
      .then(response => response.json())
      .then(data => {
        setAddress(data.address);
        setPhoneNumber(data.phoneNumber);
      })
      .catch(error => console.error('Error fetching address and phone number:', error));
  }, []); // Empty dependency array means this effect will run once after the initial render

  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-3 col-12 mb-2'>
        < VendSideDashboard/>
        </div>
        <div className='col-md-9 col-12 mb-2'>
          <div className='card'>
            <h4 className='card-header'>Add Address</h4>
            <div className='card-body'>
              <form>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <textarea
                    className="form-control"
                    id="address"
                    value={address}
                    placeholder="Dr.no:10-10-10,Area,Street name,Building/Apartment name,locality near by, Pincode"
                    onChange={(e) => setAddress(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="phnum" className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phnum"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  ></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendAddAddress;


// import VendSideDashboard from "./VendSideDashboard";

// function VendAddAddress(props){
//     return(

//         <div className='container mt-4'>
//             <div className='row'>
//                 <div className='col-md-3 col-12 mb-2'>
//                     < VendSideDashboard/>
//                 </div>
//                 <div className='col-md-9 col-12 mb-2'>
//                     <div className='card'>
//                         <h4 className='card-header'>Add Address</h4>
//                         <div className='card-body'>
//                         <form>
//                             <div className="mb-3">
//                                 <label for="address" className="form-label">Address</label>
//                                 <textarea type="text" className="form-control" id="address" placeholder="Dr.no:10-10-10,Area,Street name,Building/Apartment name,locality near by, Pincode"></textarea>
//                             </div>
//                             <div className="mb-3">
//                                 <label for="address" className="form-label">Phone Number</label>
//                                 <input type="phnum" className="form-control" id="address"></input>
//                             </div>
//                             <button type="submit" className="btn btn-primary">Submit</button>
//                         </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//         </div>

//     )
// }

// export default VendAddAddress;