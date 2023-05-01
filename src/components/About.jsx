import React from 'react'
import chester from '../images/chester.jpg'

const About = () => {
  return (
    <section id='About' className='scroll-mt-[50px]'>
  <div
    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
  >
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
        <img
          alt="chester johnson"
          src={chester}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24 flex flex-col items-start">
        <h2 className="text-3xl font-bold sm:text-4xl text-left">Who is Chester Johnson?</h2>

        <p className="mt-4 text-gray-600 text-left">
        Chester Johnson is a design-driven Full-Stack Mobile and Web Software Engineer, and Game Developer hailing from sunny Jamaica with 6 years of experience making technology work for people. My expertise in React, Flutter, Node.Js, JavaScript, and Unity3D allows me to bring ideas to life. From developing a fast-paced game for a casino to managing servers and databases for organizations with 10000+ users, I've made a real impact. I even developed an app for the government to make sure farmers get paid on time and created a game that was the #1 trend in my country for a year, with 50,000 downloads! And to top it off, I was the #1 GitHub contributor from Jamaica in 2022. Let's create something amazing together!
        </p>

        <a
          href="#Skills"
          className="mt-8 inline-flex items-center rounded  px-12 py-3 text-sm font-medium  transition  focus:outline-none focus:ring bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
        >
          View My Skills
          <svg
                  className="w-3 h-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
        </a>

       
      </div>
    </div>
  </div>
</section>

  )
}

export default About