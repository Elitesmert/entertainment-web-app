import classNames from 'classnames'
import React from 'react'
import {useState} from 'react'

const Input = ({type, name, id, placeholder, onChange, error}) => {
  const [isFocus, setIsFocus] = useState(false)
  const errorMessage = () => {
    if (error.email && name === 'email') {
      return error.email
    } else if (error.password && name === 'password') {
      return error.password
    } else if (error.rPassword && name === 'rPassword') {
      return error.rPassword
    }

    return null // No error
  }
  return (
    <div className='relative'>
      <input
        className='placeholder:text-gray-500 flex placeholder:text-[15px] focus:outline-none caret-lightRed text-[15px] bg-transparent w-full pl-4'
        placeholder={placeholder}
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <div
        className={classNames(
          'bg-greyishBlue absolute w-full h-[1px] -bottom-3 transition-all duration-300 ease-out',
          {
            '!bg-white': isFocus,
            '!bg-lightRed':
              (error.email && name === 'email') ||
              (error.password && name === 'password') ||
              (error.rPassword && name === 'rPassword'),
          }
        )}
      ></div>

      {errorMessage() && (
        <p className='absolute top-1/2 right-0 transform -translate-x-0 -translate-y-1/2 text-[15px] text-lightRed '>
          {errorMessage()}
        </p>
      )}
    </div>
  )
}

export default Input
