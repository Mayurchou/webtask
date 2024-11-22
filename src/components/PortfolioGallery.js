import React from 'react';

const PortfolioGallery = () => {
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg'
    
  ];

  return (
    <div className="gallery-container">
      <h2>Portfolio Gallery</h2>
      <div className="gallery">
        {images.map((img, index) => (
          <div key={index} className="image-card">
            <img src={img} alt={`portfolio-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGallery;
