import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import logo from '../logo.svg';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3, // Number of items to show on desktop
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2, // Number of items to show on tablet
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1, // Number of items to show on mobile
    slidesToSlide: 1,
  },
};

function FamousInteriors() {
  return (
    <div className='remove-padding'>
      <h2 className="px-8 mb-6">Famous Interiors</h2>
      <Carousel
        responsive={responsive}
        autoPlay={true} // Enable autoplay
        autoPlaySpeed={3000} // Set autoplay speed in milliseconds
        showDots={false} // Hide the dot indicators
        slidesToSlide={1} // Number of slides to move on autoplay
        additionalTransfrom={0}
        arrows 
        centerMode={false}
        containerClass="container-with-dots"
        dotListClass="custom-dot-list-style"
        draggable
        focusOnSelect={false}
        infinite
        itemClass="carousel-item-padding-40-px"
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside
        renderDotsOutside={false}
        sliderClass=""  
      >
        {Array.from({ length: 4 }).map((_, idx) => (
          <div key={idx} className="carousel-item-padding-100-px" style={{ maxWidth: '22rem' }}>
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Vendor Name</h5>
                <p className="card-text">
                  Turning houses into homes, one project at a time.
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default FamousInteriors;






// import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import logo from "../logo.svg";

// function FamousInteriors() {
//   return (
//     <>
//     <h2 className='px-5'>Famous Interiors</h2>
//     <Carousel data-bs-theme="light">
//       <Carousel.Item className="py-3">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-4">
//               <div className="card">
//                 <img src={logo} className="card-img-top" alt="..." />
//                 <div className="card-body">
//                   <h5 className="card-title">Vendor Name</h5>
//                   <p className="card-text">Turning houses into homes, one project at a time.</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card">
//                 <img src={logo} className="card-img-top" alt="..." />
//                 <div className="card-body">
//                   <h5 className="card-title">Vendor Name</h5>
//                   <p className="card-text">We don't just build apartments; we build neighborhoods.</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card">
//                 <img src={logo} className="card-img-top" alt="..." />
//                 <div className="card-body">
//                   <h5 className="card-title">Vendor Name</h5>
//                   <p className="card-text">Designing neighborhoods where safety and quality of life intersect.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-4">
//               <div className="card">
//                 <img src={logo} className="card-img-top" alt="..." />
//                 <div className="card-body">
//                   <h5 className="card-title">Vendor Name</h5>
//                   <p className="card-text">Turning houses into homes, one project at a time.</p>
//                 </div>
//               </div>
//             </div>
//             </div>
//         </div>
//       </Carousel.Item>
//     </Carousel>
//     </>
//   );
// }

// export default FamousInteriors;


{/* <div className="col-md-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Vendor Name</h5>
                  <p className="card-text">We don't just build apartments; we build neighborhoods.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Vendor Name</h5>
                  <p className="card-text">Designing neighborhoods where safety and quality of life intersect.</p>
                </div>
              </div> */}
            {/* </div> */}