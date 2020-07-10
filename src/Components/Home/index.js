import React from 'react';
import './index.css';
import SimpleImageSlider from "react-simple-image-slider";
import image1 from '../../assets/image_1.png' 


export const Home = () => {

  const images = [
    { url: image1 },
    { url: image1 },
    { url: image1 },
    { url: image1 },
    { url: image1   },
    { url: image1 },
  ];

  return (
    <div className="App">
      <SimpleImageSlider
        width={1100}
        height={761}
        images={images}
      />
    </div>
  );
}


