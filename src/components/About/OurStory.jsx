import React from 'react'

function OurStory() {
    return (
        <div className="relative w-full bg-[#232051]">
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 ">
                <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
                    <img
                        className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
                        src="https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                    />
                </div>
                <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6  xl:col-span-6">


                    <h1 className=" text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl font-caveat">
                        Our Story
                    </h1>
                    <p className="mt-8 text-lg text-white text-justify  ">
                        Pyoor Global was born out of a desire to bring the pure essence of Sambhar Salt to the world stage. Our founders, inspired by the cultural significance and natural splendor of the lake, embarked on a mission to share its treasures with discerning palates worldwide.

                        From the outset, we embraced a philosophy of responsible stewardship, ensuring that every step of our process respects the delicate balance of nature. We employ sustainable practices in salt extraction, mindful of the lake's ecological integrity and the communities that depend on it.

                        Our journey is a testament to the power of collaboration and innovation. Working hand in hand with local experts and artisans, we harness centuries-old techniques while embracing modern advancements to produce salt of unparalleled quality and purity.

                        But our story is not just about salt; it's about the people whose lives are intertwined with the lake's legacy. We are proud to support local communities and initiatives that uphold the cultural heritage and environmental sustainability of the region.

                        As Pyoor Global continues to grow, our commitment remains unwavering: to honor the past, celebrate the present, and safeguard the future of Sambhar Salt Lake. Our story is a testament to the transformative power of nature and the boundless possibilities that arise when we tread lightly upon the earth.

                        Join us on this journey as we continue to share the timeless allure of Sambhar Salt with the world, one grain at a time. Welcome to Pyoor Global, where tradition meets innovation, and purity knows no bounds.
                    </p>

                </div>

            </div>
        </div>
    )
}

export default OurStory