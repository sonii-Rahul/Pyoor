import React from "react";
import Slider from "react-slick";
import test from "../../assets/images/test1.jpg"
import test2 from "../../assets/images/test2.jpg"
import test3 from "../../assets/images/test3.jpg"

export default function Slick() {
  const imagesAndMessages = [
    {
      imageUrl: test,
      message: "Message 1"
    },
    {
      imageUrl: test2,
      message: "Message 2"
    },
    {
        imageUrl: test3,
        message: "Message 2"
      },
      
    
    
    // Add more objects as needed
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="slider-container relative overflow-hidden py-16">
      <Slider {...settings}>
        {imagesAndMessages.map((item, index) => (
          <div key={index} className="w-full h-96">
            <img src={item.imageUrl} alt={item.message} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3>{item.message}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
