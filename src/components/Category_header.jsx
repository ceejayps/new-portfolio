import React from 'react'

const Category = () => {
  return (
    <div>
    <div className=" hidden flex h-12 w-72 divide-x overflow-hidden rounded-lg border">
        
    <a href="?type=Portfolio" onClick={(e)=> e.preventDefault()} className=" flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Web</a>
    <a href="/apps" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Apps</a>
    <a href="/Games" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Games</a>
    <a href="/servers" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Servers</a>
    </div>
    </div>
  )
}

export default Category