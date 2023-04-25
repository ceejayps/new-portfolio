import React from 'react'

const Category = () => {
  return (
    <div className="flex h-12 w-72 divide-x overflow-hidden rounded-lg border">
    <a href="#" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Web</a>
    <a href="#" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Apps</a>
    <a href="#" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Games</a>
    <a href="#" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Servers</a>
  </div>
  )
}

export default Category