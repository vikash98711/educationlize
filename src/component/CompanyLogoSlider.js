"use client";

import React from 'react';
import Slider from 'react-slick';

const CompanyLogoSlider = () => {
  const settings = {
    dots: false,
    autoPlay: true,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 2,
    centerMode: false,
    focusOnSelect: false,
    arrows: false, // Disable arrows
    responsive: [
      {
        breakpoint: 992, // Medium screen
        settings: {
          slidesToShow: 2,
          centerMode: false,
          focusOnSelect: false
        }
      },
      {
        breakpoint: 576, // Small screen
        settings: {
          slidesToShow: 1,
          centerMode: true,
          focusOnSelect: true
        }
      }
    ]
  };
  
  return (
    <section className='wrapper-company-logos-sslider'>
      <div className='container'>
        <div className='col-sm-12 text-center'>
          <p className='mb-0'>We prepare you for</p>
          <h2 className="text-dark">International Exam</h2>
          <hr />
        </div>
        <div className='container'>
        <Slider {...settings}>
        
          <div className='col'>
            <img src="https://www.oracleglobaleducation.com/images/partner2.jpg" alt="Partner 2" />
          </div> 
          <div className='col'>
            <img src="https://www.oracleglobaleducation.com/images/partner3.jpg" alt="Partner 3" />
          </div> 
          <div className='col'>
            <img src="https://www.oracleglobaleducation.com/images/partner4.jpg" alt="Partner 4" />
          </div> 
          <div className='col'>
            <img src="https://www.oracleglobaleducation.com/images/partner5.jpg" alt="Partner 5" />
          </div> 
         
          <div className='col'>
            <img src="https://www.oracleglobaleducation.com/images/partner6.jpg" alt="Partner 6" />
          </div> 
          <div className='col'>
            <img src="https://www.oracleglobaleducation.com/images/partner7.jpg" alt="Partner 7" />
          </div> 
          <div className='col'>
            <img src="https://www.oracleglobaleducation.com/images/partner8.jpg" alt="Partner 8" />
          </div> 
        </Slider>
        </div>
      </div>
    </section>
  );
}

export default CompanyLogoSlider;
