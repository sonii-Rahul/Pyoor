import React from "react";
import "../assets/css/AboutSection.css";
import FirstImage from "../assets/images/about.jpg";
function AboutSection() {
  return (
    <div className="my-8 mx-16 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-6 gap-4">
          {/* Left side text */}
          <div className="lg:col-span-4 col-span-6 lg:mb-0 mb-4 bg-green-100 rounded-xl">
            <div className="p-4">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                <span className="text-blue-500 mr-5">About</span>Pyoor
              </h2>
              <div className="abt-text">
                <p className="mb-4 text-gray-600">
                  Welcome to Pyoor, your gateway to a world of purity and
                  flavor. At Pyoor, we embark on a journey to redefine the
                  essence of salt, offering an exquisite range that includes the
                  pristine White Salt, the bold Black Salt that extract from (
                  <a
                    className="text-blue-500"
                    href="https://en.wikipedia.org/wiki/Sambhar_Salt_Lake"
                    target="_blank"
                  >
                    Sambhar Lake
                  </a>
                  ), and the delicate Pink Salt. Our commitment to quality and
                  authenticity ensures that every grain embodies the richness of
                  nature, delivering a symphony of taste to every dish. Join us
                  as we craft a culinary experience that celebrates the purity
                  and diversity of salts from around the globe. Discover the
                  essence of Pyoor and elevate your culinary creations to new
                  heights.
                </p>
                <h2 className="text-2xl font-bold mb-4">
                  <span className="text-blue-500">About</span> Sambhar Lake
                </h2>
                <p className="mb-4 text-gray-600">
                  Nestled in Rajasthan's arid expanse, Sambhar Lake holds the
                  ancient secret of black salt. Through traditional methods, raw
                  Sambhar salt undergoes a 24-hour firing process within ceramic
                  jars sealed with charcoal and infused with potent herbs like
                  harad seeds, amla, bahera, and babul bark. This meticulous
                  craftsmanship imparts not only the distinctive flavor but also
                  therapeutic properties to the salt. Explore the mystique of
                  Sambhar Lake and indulge in the culinary and holistic wonders
                  of its prized creation – the renowned black salt.
                </p>
                <h3 className="text-2xl text-blue-500 font-bold mb-4">
                  EXPORT
                </h3>
                <p className="mb-4 text-gray-600">
                  our strategic presence across these key areas, we ensure the
                  procurement of premium-quality salts – whether it's the
                  pristine White Salt, the bold Black Salt, or the delicate Pink
                  Salt. Furthermore, our streamlined export operations at each
                  of the five major ports guarantee swift delivery times,
                  offering you the dual advantage of prompt service and
                  unbeatable value.
                </p>
              </div>
            </div>
          </div>
          {/* Right side image */}
          <div className="lg:col-span-2 col-span-6">
            <img
              // src="https://via.placeholder.com/150"
              src={FirstImage}
              alt="Placeholder"
              className="w-full h-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
