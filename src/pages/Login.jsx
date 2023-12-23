import logo from '@/assets/svg/Movie.svg'
import Button from '@/component/Button'
import Input from '@/component/Input'
import {useState} from 'react'
import {IoClose} from 'react-icons/io5'
import {Link, useNavigate} from 'react-router-dom'
const Login = () => {
  const jsonData = localStorage.getItem('jsonData')
  const parseData = JSON.parse(jsonData)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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

    setError(validationError)

    if (Object.keys(validationError).length === 0) {
      // Do something with the validated data
      const validatedData = {
        email: formData.email,
        password: formData.password,
      }

      if (
        parseData.email === validatedData.email &&
        parseData.password === validatedData.password
      ) {
        localStorage.setItem('localData', JSON.stringify(validatedData))
        localStorage.removeItem('jsonData')
        navigate('/')
      } else {
        alert('Email or password is incorrect')
      }
    }
  }

  return (
    <div className='h-screen text-white pt-12 px-7 '>
      <div className='mx-auto w-8 mb-14'>
        <img src={logo} alt='' />
      </div>
      <div className='px-6 pt-6 pb-8 bg-semiDarkBlue rounded-[10px] relative xs:w-[400px] xs:mx-auto'>
        <div className='absolute -top-2 -right-2 bg-greyishBlue rounded-full flex justify-center items-center w-6 h-6 hover:bg-white group'>
          <Link to='/'>
            <IoClose className='text-white w-4 h-4 group-hover:text-lightRed' />
          </Link>
        </div>
        <div className='text-start text-3xl mb-10'>Login</div>
        <div className='w-full mx-auto'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-11'>
            <div className=''>
              <Input
                type='email'
                name='email'
                id='email'
                placeholder='Email address'
                onChange={handleChange}
                error={error}
              />
            </div>
            <div className=''>
              <Input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                onChange={handleChange}
                error={error}
              />
            </div>

            <div className='flex flex-col gap-6 items-center'>
              <Button title='Login to your account' />
              <p className='flex gap-2 text-[15px] font-light'>
                Don't have an account?{' '}
                <Link to='/sign-up' className='text-lightRed'>
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
