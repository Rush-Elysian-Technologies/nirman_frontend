import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import logo from '../logo.svg';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3, // Number of items to show on desktop
      slidesToSlide: 3,
      backgroundColor: '#f0f0f0',
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2, // Number of items to show on tablet
      slidesToSlide: 2,
      backgroundColor: '#f0f0f0',
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1, // Number of items to show on mobile
      slidesToSlide: 1,
      backgroundColor: '#f0f0f0',
    },
  };

function PropertyServices() {
   return(
    <div className='remove-padding'>
      <h2 className="px-8 mb-6">Property Services</h2>
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
          <div key={idx} className="carousel-item-padding-100-px" style={{ maxWidth: '22rem' , height: '250px'}}>
            <div className="card text-center" style={{ maxWidth: '20rem' , height: '200px',boxShadow:'0 4px 6px rgba(0, 0, 0, 0.1)'}}>
                <h5 className="card-title" style={{ padding: '70px' }}>Packers&Movers</h5>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
   )

}

export default PropertyServices;
