import React, {useState } from "react";
import "../../assets/css/SlickImages.css";
import Slider from "react-slick";
import SLIDER_IMAGES from "../../assets/constants/SliderImages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
const SlickImages = () => {
  const [isActive, setIsActive] = useState(true);
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button onClick={onClick} className="slickRight">
        <HiOutlineChevronRight />
      </button>
    );
  }
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button onClick={onClick} className="slickLeft">
        <HiOutlineChevronLeft />
      </button>
    );
  }
  const settings = {
    speed: 500,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    afterChange: (idx) => {
      setIsActive(true);
    },
    beforeChange: (prevId, newId) => {
      setIsActive(false);
    },
  };
  return (
    <div className="bg-[#F5E9E4] rounded-xl ">
    <div className="">
    {/* <div className="mt-24 w-27/9 mx-auto"> */}
      <Slider {...settings} className=" mt-16 pt-4">
        {SLIDER_IMAGES.map((item) => {
          return (
            <div
              key={item.id}
              className={`item img${item.id} `}
            >
              <div className="box text-center">
                <div className="container">
                  <h2
                    className={`title animated h1 ${
                      isActive ? "fadeInDown active" : ""
                    }`}
                  >
                    {item.title}
                  </h2>
                  <div
                    className={`desc animated ${
                      isActive ? "fadeInUp active" : ""
                    }`}
                  >
                    {item.desc1}
                  </div>
                  <div
                    className={`desc animated ${
                      isActive ? "fadeInUp active" : ""
                    }`}
                  >
                    {item.desc2}
                  </div>
                  <div
                    className={`animated ${isActive ? "fadeInUp active" : ""}`}
                  >
                    <a href="#" className="btn btn-clean">
                      {item.desc3}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
    </div>
  );
};

export default SlickImages;
