import React from 'react'

function OurMission() {
    return (
        <div className="relative w-full bg-[#09302B]">
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 ">
                <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6  xl:col-span-6">


                    <h1 className=" text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl font-caveat">
                        Our mission
                    </h1>
                    <p className="mt-8 text-lg text-white text-justify">
                        At Pyoor Global, we are not only passionate about preserving the natural beauty of Sambhar Salt Lake but also about promoting the health benefits of our premium salt. Sambhar Salt is not just a culinary delight; it's also a source of essential minerals that are beneficial for overall well-being.

                        Rich in minerals like sodium, potassium, magnesium, and calcium, our salt supports vital bodily functions, including nerve transmission, muscle contraction, and fluid balance. The balanced mineral composition of Sambhar Salt makes it a healthier choice compared to refined salts, which often lack these essential nutrients.

                        Moreover, the minerals present in Sambhar Salt can help regulate blood pressure, improve hydration, and support proper bone health. By incorporating our salt into your daily diet, you're not just enhancing the flavor of your meals; you're also nourishing your body with the goodness of nature.

                        At Pyoor Global, we're committed to providing you with not only exceptional taste but also with the nutritional benefits that contribute to a healthier lifestyle. Join us in embracing the holistic goodness of Sambhar Salt and experience the difference it can make in your well-being. Welcome to a world where flavor and health go hand in hand.
                    </p>

                </div>
                <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
                    <img
                        className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
                        src="https://images.pexels.com/photos/4400026/pexels-photo-4400026.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default OurMission