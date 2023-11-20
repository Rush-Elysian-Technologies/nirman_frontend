// import React, { useState } from 'react';

// function CustRegister(props) {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch('http://127.0.0.1:8000/api/customer/register/', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           first_name: firstName,
//           last_name: lastName,
//           username,
//           email,
//           phone_number: phoneNumber,
//           password,
//           confirm_password: confirmPassword,
//         }),
//       });

//       if (response.ok) {
//         // Handle successful registration, e.g., redirect to another page
//         console.log('Registration successful');
//       } else {
//         // Handle registration failure
//         console.error('Registration failed');
//       }
//     } catch (error) {
//       console.error('Error during registration:', error);
//     }
//   };

//   return (
//     <div className='container mt-4'>
//       <div className='row'>
//         <div className='col-md-8 col-12 offset-2'>
//           <div className='card'>
//             <h4 className='card-header'>Register</h4>
//             <div className='card-body'>
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <label htmlFor="firstname" className="form-label">First Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="firstname"
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="lastname" className="form-label">Last Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="lastname"
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="Username" className="form-label">Username</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="Email" className="form-label">Email</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="Phone Number" className="form-label">Phone Number</label>
//                   <input
//                     type="phonenumber"
//                     className="form-control"
//                     id="phoneNumber"
//                     value={phoneNumber}
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="Password" className="form-label">Password</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="Pwd"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="confirmPwd" className="form-label">Confirm Password</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="confirmPwd"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
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

// export default CustRegister;





import React from 'react';

function Register(props){
    return(

        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-8 col-12 offset-2'>
                    <div className='card'>
                        <h4 className='card-header'>Register</h4>
                        <div className='card-body'>
                        <form>
                            <div className="mb-3">
                                <label for="firstname" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="firstname"  />
                            </div>
                            <div className="mb-3">
                                <label for="lastname" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastname"  />
                            </div>
                            <div className="mb-3">
                                <label for="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username"  />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Phone Number</label>
                                <input type="email" className="form-control" id="email" />
                            </div>
                            <div className="mb-3">
                                <label for="pwd" className="form-label">Password</label>
                                <input type="password" className="form-control" id="pwd" />
                            </div>
                            <div className="mb-3">
                                <label for="pwd" className="form-label">Confirm Password</label>
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

export default Register;