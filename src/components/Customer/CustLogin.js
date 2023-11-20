// import React, { useState } from 'react';

// function CustLogin(props) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch('http://your-backend-url/api/customer/login/', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username,
//           password,
//         }),
//       });

//       if (response.ok) {
//         // Handle successful login, e.g., redirect to another page
//         console.log('Login successful');
//       } else {
//         // Handle login failure
//         console.error('Login failed');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//     }
//   };

//   return (
//     <div className='container mt-4'>
//       <div className='row'>
//         <div className='col-md-8 col-12 offset-2'>
//           <div className='card'>
//             <h4 className='card-header'>Login</h4>
//             <div className='card-body'>
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <label htmlFor="username" className="form-label">Username</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="pwd" className="form-label">Password</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="pwd"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CustLogin;





import React from 'react';

function CustLogin(props){
    return(

        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-8 col-12 offset-2'>
                    <div className='card'>
                        <h4 className='card-header'>Login</h4>
                        <div className='card-body'>
                        <form>
                            <div className="mb-3">
                                <label for="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username"  />
                            </div>
                            <div className="mb-3">
                                <label for="pwd" className="form-label">Password</label>
                                <input type="password" className="form-control" id="pwd" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default CustLogin;