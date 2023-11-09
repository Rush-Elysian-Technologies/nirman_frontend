import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between container align-items-center my-5 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          Nirman
        </a>
        <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex pt-2">
        <li className="ms-3">
          <a className="text-muted" href="/">
          <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li className="ms-3">
          <a className="text-muted" href="/">
          <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className="ms-3">
          <a className="text-muted" href="/">
          <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;





// import React from 'react';

// function Footer(){
//     return(
//         <footer className="d-flex flex-wrap justify-content-between container align-items-center my-5 border-top">
//             <div className="col-md-4 d-flex align-items-center">
//             <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
//                 Nirman
//             </a>
//             <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
//             </div>

//             <ul className="nav col-md-4 justify-content-end list-unstyled d-flex pt-2">
//             <li className="ms-3">
//                 <a className="text-muted" href="/">
//                 <i className='fa-brands fa-facebook'></i>
//                 </a>
//             </li>
//             <li className="ms-3">
//                 <a className="text-muted" href="/">
//                 <i className='fa-brands fa-twitter'></i>
//                 </a>
//             </li>
//             <li className="ms-3">
//                 <a className="text-muted" href="/">
//                 <i className='fa-brands fa-instagram'></i>  
//                 </a>
//             </li>
//             </ul>
//         </footer>

// //         <footer className="bg-light text-dark text-center py-3">
// //     <div className="container">
// //         <h3>Contact Us</h3>
// //         <p>Feel free to get in touch with us.</p>
// //         <div className="row">
// //             <div className="col-md-4">
// //                 <h5>Address</h5>
// //                 <p>123 Main Street<br/>City, State 12345</p>
// //             </div>
// //             <div className="col-md-4">
// //                 <h5>Email</h5>
// //                 <p>info@example.com</p>
// //             </div>
// //             <div className="col-md-4">
// //                 <h5>Phone</h5>
// //                 <p>(123) 456-7890</p>
// //             </div>
// //         </div>
// //     </div>
// // </footer>

//     )
// }

// export default Footer;