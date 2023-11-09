import { Link } from 'react-router-dom';
import logo from '../logo.svg'; 
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import '../App.css';
 
function SingleService(props) {
  const [isHovered, setIsHovered] = useState(true);
  const [isFlipped, setIsFlipped] = useState(true);
 
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
<Link to="/Architect" className='cards-link'>
<img src={logo} className='card-img-top' alt='...' />
</Link>
<div className='card-body'>
    <h4 className='card-title'>
    {/* <Link to='/Architect'> */}
    <Card.Subtitle className='mb-2 text-muted'>Services</Card.Subtitle>
    {/* </Link> */}
    </h4>
</div>
</div>
</div>
<Link to='/Architect'>
<div className='card-body'>
    <h4 className='back-text'>
    <Card.Text className='mb-2 text-muted'>Services</Card.Text>
    {/* <p>Architects are creative professionals who design and plan buildings, harmonizing aesthetics, functionality, and safety.</p> */}
    </h4>
</div>
</Link>
</div>
  );
}
 
export default SingleService;

// function SingleService(props) {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleCardHover = () => {
//     setIsHovered(true);
//   };

//   const handleCardClick = () => {
//     if (isFlipped) {
//       document.body.classList.toggle('isMouseOver');
//       if (document.body.classList.contains('flip')) {
//         window.location.href = '/Architect';
//       }
//     } else {
//       setIsFlipped(true);
//     }
//   };

//   return (
//     <>
//       <div
//         className={`col-12 col-md-3 mb-4 ${isHovered ? 'hovered' : ''} ${isFlipped ? 'flipped' : ''}`}
//         onMouseEnter={handleCardHover}
//         onMouseLeave={() => setIsHovered(false)}
//         onClick={handleCardClick}
//       >
//         <div className='cards'>
//           <div className='card-front'>
//             <Link to="/Architect" className='cards-link'>
//               <img src={logo} className='card-img-top' alt='...' />
//             </Link>
//             <div className='card-body'>
//               <h4 className='card-title'>
//                 <Link to='/Architect'>
//                   <Card.Subtitle className='mb-2 text-muted'>Services</Card.Subtitle>
//                 </Link>
//               </h4>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SingleService;







// function SingleService(props){
//   const [isMouseOver, setIsMouseOver] = useState(true);
//   return(
//          <>
//          <div className='col-12 col-md-3 mb-4'>
//              <div className="cards">
//                  <div className='card-front'>
//                  <Link to="/Architect" className='cards-link' >
//                      <img src={logo} class="card-img-top" alt="..."/>
//                  </Link>
//                  <div className="card-body">
//                      <h4 className="card-title"> 
//                          <Link to="/Architect">
//                          <Card.Subtitle className="mb-2 text-muted">Services</Card.Subtitle>
//                          </Link>
//                      </h4> 
//                  </div> 
//                  </div>
//                  </div> 
//                 </div> 

//     document.addEventListener("DOMContentLoaded", function () {
//     var cards = document.getElementsByClassName("cards-link");

//   for (var i = 0; i < cards.length; i++) {
//     cards[i].addEventListener('click', function () {
//       document.body.classList.toggle("isMouseOver");
//       if (document.body.classList.contains("flip")) {
//         window.location.href = "/Architect";
//       }
//     });
//   }
// });  

// </>
//     )
// }

// function SingleService(props) {
//   const [isMouseOver, setIsMouseOver] = useState(true);

//   const handleCardClick = () => {
//     document.body.classList.toggle('isMouseOver');
//     if (document.body.classList.contains('flip')) {
//       window.location.href = '/Architect';
//     }
//   };
  

//   return (
//     <>
//       <div className="col-12 col-md-3 mb-4">
//         <div className={`cards ${isMouseOver ? 'isMouseOver' : ''}`} onClick={handleCardClick}>
//           <div className='card-front'>
//             <Link to="/Architect" className='cards-link'>
//               <img src={logo} className="card-img-top" alt="..." />
//             </Link>
//             <div className="card-body">
//               <h4 className="card-title">
//                 <Link to="/Architect">
//                   <Card.Subtitle className="mb-2 text-muted">Services</Card.Subtitle>
//                 </Link>
//               </h4>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SingleService;



// return(
    //   <>
    //   <div>
    //   {isMouseOver ? <OnClick/> : <Hover/>}
    //   </div>

    
                    {/* <h5 className="card-title text-muted">Price: Rs {props.product.price}</h5> */}
                
                {/* <div className="card-footer">
                    <button title="Add to Cart" className='btn btn-success btn-sm'><i class="fa-solid fa-cart-plus">Wishlist</i></button>
                    <button title="Add to Wishlist" className='btn btn-danger btn-sm ms-1'><i class="fa fa-heart"></i>Add to Cart</button>
                </div> */}