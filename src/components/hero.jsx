import React, {useState} from "react";
import Nav from "./nav";
import SocialMedia from "./SocialMedia_header";
import Category from "./CategoryHeader";
import ImagesHeader from "./ImagesHeader";
import HeaderText from "./HeaderText";

const Hero = () => {
    const [childData, setChildData] = useState(0);

  function handleChildData(data) {
    setChildData(data);
  }
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <header className="mb-8 border-b">
        <Nav />
      </header>
     
      

      <section className="mx-auto pt-8 lg:pt-16 max-w-screen-2xl px-4 md:px-8">
        <div className="mb-8 flex h-full lg:h-[72vh] flex-wrap justify-between md:mb-16">
          <HeaderText onChildData={handleChildData}/>
          <ImagesHeader index = {childData}/>
        </div>
        <div className=" md:hidden  cursor-pointer rounded-3xl w-28 h-12  lg:w-40 lg:h-12 bg-slate-900  justify-center items-center text-slate-300 duration-200  border-2 border-black  inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black">
          <p className=" font-bold text4xl">Hire Me</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <Category />
          <SocialMedia />
        </div>
      </section>
    </div>
  );
};

export default Hero;
