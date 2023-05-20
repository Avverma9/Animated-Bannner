import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      setNextImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const images = [
    'https://r4.wallpaperflare.com/wallpaper/765/31/750/dark-souls-iii-video-games-rpg-fire-wallpaper-b9a0085d11ba3d1b7607582f9071f6dd.jpg',
    'https://c4.wallpaperflare.com/wallpaper/456/632/998/spider-man-marvel-comics-wallpaper-preview.jpg',
    'https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/1684525393016-wallpaperflare.com_wallpaper%20%281%29.jpg',
    'https://r4.wallpaperflare.com/wallpaper/35/536/33/iron-man-marvel-comics-superhero-tony-stark-wallpaper-c8a60ccabf7cb769aeb0291282b97b50.jpg',
    'https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/1684525507543-wallpaperflare.com_wallpaper%20%284%29.jpg',
  ];

  const overlayImage =
    'https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/1684526093235-giphy.gif';
  const overlayImage2 =
    'https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/1684529689327-snow02.gif';

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleScroll = (e) => {
    if (isHovered) {
      const delta = e.deltaY || e.detail || e.wheelDelta;

      if (delta > 0) {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setNextImage((prevImage) => (prevImage + 1) % images.length);
      } else {
        setCurrentImage((prevImage) =>
          prevImage === 0 ? images.length - 1 : prevImage - 1
        );
        setNextImage((prevImage) =>
          prevImage === 0 ? images.length - 1 : prevImage - 1
        );
      }
    }
  };

  return (
    <>
      <div
        className="banner"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onWheel={handleScroll}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Banner"
            className={`banner-image ${
              index === currentImage ? 'active fade-in' : ''
            } ${index === nextImage ? 'fade-out' : ''}`}
          />
        ))}

        <div className="gif">
          <img src={overlayImage} alt="Overlay" />
        </div>
        <div className="gify">
          <img src={overlayImage2} alt="Overlay" />
        </div>
        {currentImage !== 0 && isHovered && (
          <div className="smoke-transition">
            <div className="smoke"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Banner;
