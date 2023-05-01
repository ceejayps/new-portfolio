import React,{useState} from "react";




const Nav = () => {
    const [isOpen, setisopen] = useState(false)

    const downloadFile = () => {
        const url = '/resume.pdf';
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Chester's Resume.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  const localId = window.location.hash.substring(1);
  return (
    <>
    {isOpen &&
    <div className="w-screen h-screen fixed top-0 z-[100]  bg-white">
    <div className="flex justify-center h-full  w-full items-center">
        <ul className="flex flex-col justify-center  lg:gap-5 items-center md:text-sm ">
          <a href="#About" onClick={(e)=>{setisopen(!true)}}>
            {" "}
            <li
              className={
                (localId === "About" ? "bg-slate-900 text-gray-100" : "") +
                " cursor-pointer hover:text-slate-50 hover:bg-slate-900 py-1 px-4 rounded-md transition-all duration-100"
              }
            >
              {" "}
              About
            </li>
          </a>
          <a href="#Skills" onClick={(e)=>{setisopen(!true)}}>
            <li
              className={
                (localId === "Skills" ? "bg-slate-900 text-gray-100" : "") +
                " cursor-pointer hover:text-slate-50 hover:bg-slate-900 py-1 px-4 rounded-md transition-all duration-100"
              }
            >
              Skills
            </li>
          </a>
          <a href="#Portfolio" onClick={(e)=>{setisopen(!true)}}>
            <li
              className={
                (localId === "Portfolio" ? "bg-slate-900 text-gray-100" : "") +
                " cursor-pointer hover:text-slate-50 hover:bg-slate-900 py-1 px-4 rounded-md transition-all duration-100"
              }
            >
              Portfolio
            </li>
          </a>
          <a href="#WorkHistory" onClick={(e)=>{setisopen(!true)}}>
            <li
              className={
                (localId === "WorkHistory"
                  ? "bg-slate-900 text-gray-100"
                  : "") +
                " cursor-pointer hover:text-slate-50 hover:bg-slate-900 py-1 px-4 rounded-md transition-all duration-100"
              }
            >
              Work History
            </li>
          </a>
          <a href="#Contact" onClick={(e)=>{setisopen(!true)}}>
            <li
              className={
                (localId === "Contact" ? "bg-slate-900 text-gray-100" : "") +
                " cursor-pointer hover:text-slate-50 hover:bg-slate-900 py-1 px-4 rounded-md transition-all duration-100"
              }
            >
              Contact
            </li>
          </a>
        </ul>

       
      </div>
    </div>}
    <div className=" fixed top-0  z-[99] backdrop-blur-2xl px-6 md:px-5 lg:px-10 flex h-16 bg-white/70 w-screen justify-between items-center text-slate-900">
      <div>
        <h1 className="text-2xl font-bold">CEEJAYPS</h1>
      </div>
      <div className="md:flex md:gap-3 lg:gap-5 items-center hidden">
        <ul className="flex   lg:gap-5 items-center md:text-sm ">
          <a href="#About">
            {" "}
            <li
              className={
                (localId === "About" ? "bg-slate-900 text-gray-100" : "") +
                " cursor-pointer hover:text-slate-50 hover:bg-slate-900 py-1 px-4 rounded-md transition-all duration-500"
              }
            >
              {" "}
              About
            </li>
          </a>
          <a href="#Skills">
            <li
              className={
                (localId === "Skills" ? "bg-slate-900 text-gray-100" : "") +
                " cursor-pointer hover:text-slate-50 hover:bg-slate-900 py-1 px-4 rounded-md transition-all duration-500"
              }
            >
              Skills
            </li>
          </a>
          <a href="#Portfolio">
            <li
              className={
                (localId === "Portfolio" ? "bg-slate-900 text-gray-100" : "") +
                " cursor-pointer hover:text-slate-50 hover:bg-slate-900 py-1 px-4 rounded-md transition-all duration-500"
              }
            >
              Portfolio
            </li>
          </a>
          <a href="#WorkHistory">
            <li
              className={
                (localId === "WorkHistory"
                  ? "bg-slate-900 text-gray-100"
                  : "") +
                " cursor-pointer hover:text-slate-50 hover:bg-slate-900 py-1 px-4 rounded-md transition-all duration-500"
              }
            >
              Work History
            </li>
          </a>
          <a href="#Contact">
            <li
              className={
                (localId === "Contact" ? "bg-slate-900 text-gray-100" : "") +
                " cursor-pointer hover:text-slate-50 hover:bg-slate-900 py-1 px-4 rounded-md transition-all duration-500"
              }
            >
              Contact
            </li>
          </a>
        </ul>

        <div onClick={downloadFile} className=" cursor-pointer rounded-3xl w-28 h-12  lg:w-40 lg:h-12 bg-slate-900  justify-center items-center text-slate-300 duration-200  border-2 border-black  inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black">
          <p className=" font-bold text4xl">Download CV</p>
        </div>
      </div>

      <div onClick={(e)=>{setisopen(true)}} className=" block md:hidden  text-slate-700">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </div>
    </div>
    </>
  );
};

export default Nav;
