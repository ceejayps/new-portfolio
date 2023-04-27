import React from 'react'

const Nav = () => {
  return (
    <div className=' fixed top-0  z-[99999] backdrop-blur-2xl px-10 flex h-16 bg-white/70 w-screen justify-between items-center text-slate-900'>
        <div>
            <h1 className='text-2xl font-bold'>CEEJAYPS</h1>
        </div>
        <div className='lg:flex gap-10 items-center hidden'>
            <ul className='flex gap-5 items-center '>
                <li className=' cursor-pointer hover:text-slate-50 hover:bg-slate-900 py-1 px-4 rounded-md transition-all duration-500'>About</li>
                <li className=' cursor-pointer hover:text-slate-50 hover:bg-slate-900 py-1 px-4 rounded-md transition-all duration-500'>Skills</li>
                <li className=' cursor-pointer hover:text-slate-50 hover:bg-slate-900 py-1 px-4 rounded-md transition-all duration-500'>Portfolio</li>
                <li className=' cursor-pointer hover:text-slate-50 hover:bg-slate-900 py-1 px-4 rounded-md transition-all duration-500'>Work History</li>
                <li className=' cursor-pointer hover:text-slate-50 hover:bg-slate-900 py-1 px-4 rounded-md transition-all duration-500'>Contact</li>
            </ul>

            <div className=' cursor-pointer rounded-3xl w-40 h-12 bg-slate-900 flex justify-center items-center text-slate-300 duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black'>
                <p className=' font-bold text4xl'>Hire Me</p>
            </div>
        </div>

    </div>
  )
}

export default Nav