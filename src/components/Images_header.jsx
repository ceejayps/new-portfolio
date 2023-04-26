import React from "react";
import server from '../images/heroImages/server.png'
import game from '../images/heroImages/games.png'
import web from '../images/heroImages/web.png'
import mobile from '../images/heroImages/mobile.png'
import software from '../images/heroImages/mohammad-rahmani-LrxSl4ZxoRs-unsplash@0.33x.png'


const Images_header = ({index}) => {
    const images = [
        software,
        web,
        server,
        mobile,
        game,
    ]
  return (
    <div className="mb-12 flex  md:mb-16 lg:w-[55%]">
    <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
      <img src={images[index]} loading="lazy" alt="Photo by Manny Moreno" className="h-full w-full object-cover object-center" />
    </div>
  </div>
  )
}

export default Images_header