import React from 'react'

const Button = ({title}) => {
  return (
    <button
      className={
        'bg-lightRed w-full h-[48px] text-white rounded-[6px] text-[15px] font-light hover:bg-white hover:text-black transition-colors duration-300'
      }
    >
      {title}
    </button>
  )
}

export default Button
