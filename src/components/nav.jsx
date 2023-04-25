import React from 'react'

const Nav = () => {
  return (
    <div className=' fixed top-0  z-[99999]  px-10 flex h-16 bg-slate-600 w-screen justify-between items-center text-slate-300'>
        <div>
            <h1>LOGO</h1>
        </div>
        <div className='lg:flex gap-10 items-center hidden'>
            <ul className='flex gap-5'>
                <li>About</li>
                <li>Skills</li>
                <li>Portfolio</li>
                <li>Work History</li>
                <li>Contact</li>
            </ul>

            <div className=' rounded-3xl w-40 h-12 bg-slate-300 flex justify-center items-center text-slate-600'>
                <p className=''>Hire</p>
            </div>
        </div>

    </div>
  )
}

export default Nav