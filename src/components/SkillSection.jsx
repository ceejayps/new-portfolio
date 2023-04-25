import React from "react";

const SkillSection = () => {
  return (
    <section>
        <div className="bg-white pt-6 sm:pt-8 lg:pt-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="mb-4 flex flex-col items-center md:mb-8 lg:flex-row lg:justify-between">
      <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 lg:mb-0 lg:text-3xl">Trusted by the best</h2>

      <p className="max-w-md text-center text-gray-400 lg:text-right">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
    </div>
   
    <div className=" px-5 pb-24 mx-auto lg:px-16">
        <div className="mx-auto text-center">
            <div className="md:px-32 grid grid-cols-3 gap-4 md:grid-cols-5 md:gap-4 mx-auto lg:grid-cols-5">
                <div>
                    <img className="h-12 mx-auto lg:h-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="Figma"/>
                </div>
                <div>
                    <img className="h-12 mx-auto lg:h-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="Framer"/>
                </div>
                <div>
                    <img className="h-12 mx-auto lg:h-12" src="https://cdn.iconscout.com/icon/free/png-256/free-flutter-2038877-1720090.png" alt="Sketch "/>
                </div>
                <div>
                    <img className="h-12 mx-auto lg:h-12" src="https://companieslogo.com/img/orig/U-ea48bc1d.png?t=1634728034g" alt="Sketch "/>
                </div>
                <div>
                    <img className="h-12 mx-auto lg:h-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png" alt="Invision"/>
                </div>
            </div>
        </div>
    </div>
    </div></div>
</section>
  );
};

export default SkillSection;
