import React from 'react'
import logo from '@/assets/svg/Movie.svg'
import Input from '@/component/Input'
import {useState} from 'react'
import Button from '@/component/Button'
import {Link, useNavigate} from 'react-router-dom'
import {IoClose} from 'react-icons/io5'
import {json} from 'react-router-dom'
import {stringify} from 'postcss'
const SignUp = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rPassword: '',
  })
  const [error, setError] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationError = {}
    if (!formData.email.trim()) {
      validationError.email = 'Can’t be empty'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationError.email = 'Email is not invalid'
    }
    if (!formData.password.trim()) {
      validationError.password = 'Can’t be empty'
    }
    if (!formData.rPassword.trim()) {
      validationError.rPassword = 'Can’t be empty'
    }
    if (formData.password !== formData.rPassword) {
      validationError.rPassword = 'Password does not match'
    }
    setError(validationError)

    if (Object.keys(validationError).length === 0) {
      // Do something with the validated data
      const validatedData = {
        email: formData.email,
        password: formData.password,
      }
      const jsonData = JSON.stringify(validatedData)
      localStorage.setItem('jsonData', jsonData)
      navigate('/login')
    }
  }

  return (
    <div className='h-screen text-white pt-12 px-7'>
      <div className='mx-auto w-8 mb-14'>
        <img src={logo} alt='' />
      </div>
      <div className='px-6 pt-6 pb-8 bg-semiDarkBlue rounded-[10px] relative'>
        <div className='absolute -top-2 -right-2 bg-greyishBlue rounded-full flex justify-center items-center w-6 h-6 hover:bg-white group'>
          <Link to='/'>
            <IoClose className='text-white w-4 h-4 group-hover:text-lightRed' />
          </Link>
        </div>
        <div className='text-start text-3xl mb-10'>Sign Up</div>
        <div className='w-full mx-auto'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-11'>
            <Input
              type='email'
              name='email'
              id='email'
              placeholder='Email address'
              onChange={handleChange}
              error={error}
            />

            <Input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              onChange={handleChange}
              error={error}
            />
            <Input
              type='password'
              name='rPassword'
              id='rPassword'
              placeholder='Repeat Password'
              onChange={handleChange}
              error={error}
            />
            <div className='flex flex-col gap-6 items-center'>
              <Button title='Create an account' />
              <p className='flex gap-2 text-[15px] font-light'>
                Alread have an account?{' '}
                <Link to='/login' className='text-lightRed'>
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
