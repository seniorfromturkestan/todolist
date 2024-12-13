import React from 'react'

const Button = ({children, onClick, isActive}) => {
  return (
    <button 
      className={
        isActive ? 'px-8 py-3 rounded-lg border-2 text-white border-black text-xl font-bold cursor-pointer bg-black active:bg-gray-500' 
        : 'py-2 px-4 text-lg  sm:px-8 sm:py-3 rounded-lg border sm:border-2 border-black  sm:text-xl font-semibold sm:font-bold cursor-pointer hover:bg-black hover:text-white ease-in duration-150 active:bg-gray-500'}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button