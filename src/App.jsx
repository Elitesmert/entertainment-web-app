import {useState} from 'react'
import Button from './component/Button'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className='text-red-500 typographyHLL'>Click on the Vite and React logos to learn more</p>

      <Button title='Login to your account' />
    </>
  )
}

export default App
