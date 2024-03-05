import React from 'react';

const cardData = [
    {
        id: 1,
        image: "https://images.pexels.com/photos/4198930/pexels-photo-4198930.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Delba",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
    },
    {
        id: 2,
        image: "https://images.pexels.com/photos/1860193/pexels-photo-1860193.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Delba",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
    },
    {
        id: 3,
        image: "https://images.pexels.com/photos/7263026/pexels-photo-7263026.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Delba",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
    },
    {
        id: 4,
        image: "https://images.pexels.com/photos/6621452/pexels-photo-6621452.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Delba",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
    }
];

export function CardOne() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 gap-4 place-content-evenly m-8'>
            {cardData.map(card => (
                <div key={card.id} className="relative h-[300px] w-[225px] rounded-md hover:h-[310px] hover:w-[230px]  items-center justify-center mx-auto">
                    <img
                        src={card.image}
                        alt="Card Image"
                        className="z-0 h-full w-full rounded-md object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-left">
                        <h1 className="text-lg font-semibold text-white">{card.title}</h1>
                        <p className="mt-2 text-sm text-gray-300">{card.description}</p>
                        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                            View Profile &rarr;
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
