"use client"
import CompanyLogoSlider from '@/component/CompanyLogoSlider';
import CoomonStudentSlider from '@/component/CoomonStudentSlider';
import Footer from '@/component/Footer';
import Navigation from '@/component/Navigation';
import QuiryForm from '@/component/QuiryForm';
import React, { useState } from 'react'
import Slider from 'react-slick';
import { Tab, Tabs, Modal } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; 
import './page.css'
import TopBannerDetails from '@/component/TopBannerDetails';


const page = () => {
  const [showModal, setShowModal] = useState(false);
  
  const [modalImages, setModalImages] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openModal = (images, index) => {
    setModalImages(images);
    setActiveImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // const images = [
  //   'assets/img/NewGallery1.jpg',
  //   'assets/img/NewGallery2.jpg',
  //   'assets/img/NewGallery3.jpg',
  //   'assets/img/NewGallery4.jpg',
  //   'assets/img/NewGallery5.jpg',
  //   'assets/img/NewGallery6.jpg',
  //   'assets/img/gallery-2.jpg',
  //   'assets/img/gallery-3.jpg', 
  // ];

  const images = [
    {
      original: 'assets/img/NewGallery1.jpg',
      thumbnail: 'assets/img/NewGallery1.jpg',
    },
    {
      original: 'assets/img/NewGallery2.jpg',
      thumbnail: 'assets/img/NewGallery2.jpg',
    },
    {
      original: 'assets/img/NewGallery3.jpg',
      thumbnail: 'assets/img/NewGallery3.jpg',
    },
    {
      original: 'assets/img/NewGallery4.jpg',
      thumbnail: 'assets/img/NewGallery4.jpg',
    },
    {
      original: 'assets/img/NewGallery5.jpg',
      thumbnail: 'assets/img/NewGallery5.jpg',
    },
    {
      original: 'assets/img/NewGallery6.jpg',
      thumbnail: 'assets/img/NewGallery6.jpg',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: activeImageIndex,
  };
  return (
    <>
      <Navigation />
      {/* <CoomonStudentSlider /> */}
      <div className='container-fluid'>
     <div className='row'>
     <img src="/assets/img/gallery-banner.jpg" className='img-fluid p-0'></img>
     </div>
     </div>
        <section className="gallery-page pt-pb">
          <div className='text-center'>
            <h2>GALLERY & VIDEOS </h2>
          </div>
          <div className='Gallery_tabs-wrapper'>
            <Tabs defaultActiveKey="Gallery" id="Gallery" className='p-3'>
              
              <Tab eventKey="Gallery" title="Gallery">
                <div className="tabs-content mt-4">
                <div className='text-start'>
                        <h4 className='section-title__tagline'>Latest Pictures</h4>
                      </div>
                  <div className="row align-items-center justify-content-center">
                    {images.map((image, index) => (
                      <div className="col-lg-3 col-md-6" key={index}>
                        <div
                          className="gallery-page__single"
                          onClick={() => openModal(images, index)}
                        >
                          <img src={image.original} alt={`Image ${index}`} />
                          <div className="gallery-page__icon">
                            <a className="img-popup" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Tab>

              <Tab eventKey="Video" title="Video">
                <div className="tabs-content">
                  <div className="course-details__curriculum">

                    <div className='container-fluid'>
                      <div className='text-start'>
                        <h4 className='section-title__tagline'>Latest Video</h4>
                      </div>
                      <div className="row align-items-center justify-content-center">
                        <div className="col-sm-4">
                          <iframe className='yt-video'
                            width="100%"
                            height={270}
                            src="https://www.youtube.com/embed/exhocurjhyo"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""
                          />
                        </div>
                        <div className="col-sm-4">
                           <iframe className='yt-video'
                            width="100%"
                            height={270}
                            src="https://www.youtube.com/embed/e4daKpRdYok"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""
                          />
                        </div>
                        <div className="col-sm-4">
                        <iframe className='yt-video'
                            width="100%"
                            height={270}
                            src="https://www.youtube.com/embed/huzjv7qLdjs"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""
                          />
                        </div>
                        <div className="col-sm-4">
                          <iframe className='yt-video'
                            width="100%"
                            height={270}
                            src="https://www.youtube.com/embed/b7nqrOsxrS8"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""
                          />
                        </div>
                        <div className="col-sm-4">
                          <iframe className='yt-video'
                            width="100%"
                            height={270}
                            src="https://www.youtube.com/embed/DDqeOHQRQQM?si=7yeDowfQ1cu-p-qu"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""
                          />
                        </div>
                        <div className="col-sm-4">
                        <iframe className='yt-video'
                            width="100%"
                            height={270}
                            src="https://www.youtube.com/embed/ztxEGEaXWmM?si=KlC0t68uZOWt0PA2"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""
                          />
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </Tab>


            </Tabs>
            {/* <Modal show={showModal} onHide={closeModal} centered>
              <Modal.Body className='Gallery-modal-wrapper'>
                <Slider {...settings}>
                  {modalImages.map((image, index) => (
                    <div key={index}>
                      <img src={image} alt={`Image ${index}`} />
                    </div>
                  ))}
                </Slider>
              </Modal.Body>
            </Modal> */}
            <Modal show={showModal} onHide={closeModal} size='lg' dialogClassName='bg-transparent gallery-modal border-0'>
        <Modal.Body >
          <ImageGallery
            items={images}
            showPlayButton={true}
            showFullscreenButton={true}
            showThumbnails={false}
            showNav={true}
            startIndex={activeImageIndex}
            slideDuration={250}
            onRequestClose={closeModal}
            className='image-gallery-img' 
          />
        </Modal.Body>
      </Modal>
          </div>

        </section> 


      <QuiryForm />

      <CompanyLogoSlider />


      <Footer />


    </>
  )
}

export default page;
