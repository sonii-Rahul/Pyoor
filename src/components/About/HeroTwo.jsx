import React from 'react'

export function HeroTwo() {
  return (
    <div className="relative w-full bg-[#F5E9E4]">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
        
          <h1 className="mt-8 max-w-4xl text-3xl font-bold  text-[#003630] md:text-4xl lg:text-6xl font-caveat">
            People who really cares about your Health
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-[#003630] text-justify">
          Experience the holistic benefits of Sambhar Salt, enriched with essential minerals for improved hydration, balanced blood pressure, and optimal bone health. Elevate your well-being with every savory pinch, as Pyoor Global brings you nature's goodness in every grain
          </p>
         
        </div>
        <div className="rounded-lg bg-gray-200 p-4">
          <img
            className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[400px]"
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc1fHx0ZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
