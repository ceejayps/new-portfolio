import React from 'react'
import img1 from '../images/heroImages/57297.jpg'
import img2 from '../images/heroImages/76361.jpg'
import img3 from '../images/heroImages/89559.jpg'
import img4 from '../images/heroImages/89560.jpg'
import img5 from '../images/heroImages/OWINFV1.jpg'
import img6 from '../images/heroImages/O33QW51.jpg'


const WorkSection = () => {
  return (
    <div id='Portfolio' className="bg-white py-6 sm:py-8 lg:py-12 scroll-mt-[50px]">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
      <div className="flex items-center gap-12">
        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Portfolio</h2>

        <p className="hidden max-w-screen-sm text-gray-500 md:block"></p>
      </div>

      <a href="/" className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">More</a>
    </div>

    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6 xl:gap-8">
   
      <a href="/" className="group relative flex h-48 items-end z-[0] overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
        <img src={img5} loading="lazy" alt="Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Weather</span>
      </a>
     
      <a href="/" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
        <img src={img2} loading="lazy" alt="Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Herbert Morrisson Technical High</span>
      </a>
    
      <a href="/" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-1 md:h-80">
        <img src={img1} loading="lazy" alt="Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Guardsman C.I.</span>
      </a>
      
      <a href="/" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
        <img src={img3} loading="lazy" alt="Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">White Sands Law Firm</span>
      </a>
      <a href="/" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-1 md:h-80">
        <img src={img4} loading="lazy" alt="Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Ché Nova Aesthetics</span>
      </a>
      <a href="/" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
        <img src={img6} loading="lazy" alt="Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">GENR8-3D</span>
      </a>
   
    </div>
  </div>
</div>
  )
}

export default WorkSection