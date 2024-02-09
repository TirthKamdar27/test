import React, { useState } from 'react';
import './home.css';
import ImageModal from '../Imagemodal/ImageModal';

import video from '../../assets/video.mp4';
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.jpg';
import img6 from '../../assets/6.jpg';
import img7 from '../../assets/7.jpg';
import img10 from '../../assets/img10.jpg';

const Home = () => {
  const [modalData, setModalData] = useState(null);

  let data = [
    { id: 1, imgSrc: img1, desc: 'Setting up of equipment' },
    { id: 2, imgSrc: img2, desc: 'Setting up of equipment' },
    { id: 3, imgSrc: img3, desc: 'Setting up of equipment' },
    { id: 4, imgSrc: img4, desc: 'Setting up of equipment' },
    { id: 5, imgSrc: img5, desc: 'Setting up of equipment' },
    { id: 6, imgSrc: img6, desc: 'Setting up of equipment' },
    { id: 7, imgSrc: img7, desc: 'Setting up of equipment' },
    { id: 10, imgSrc: img10, desc: 'Setting up of equipment' },
  ];

  const handleImageClick = (imgSrc, desc) => {
    setModalData({ imgSrc, desc });
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <>
      <section className="home">
        
        <video src={video} muted autoPlay loop type="video/mp4"></video>
        
        <div className="homeContent container" style={{ marginLeft: '10%' }}>
          <h1>Welcome to our</h1>
          <h1> Image Gallery</h1>
        </div>
      </section>
      <div className="imgs">
        <div className="images">
          {data.map((item, index) => (
            <div className="pics" key={index} onClick={() => handleImageClick(item.imgSrc, item.desc)}>
              <img src={item.imgSrc} alt="gallery" />
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {modalData && (
        <ImageModal selectedImage={modalData.imgSrc} description={modalData.desc} onClose={closeModal} />
      )}
    </>
  );
};

export default Home;