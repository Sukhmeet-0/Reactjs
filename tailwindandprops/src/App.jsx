import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  // let new=[1,2,3]
  let mo = {
    username:"hitesh",
    age:21
  }

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card username="chai aur code" someObject = {mo}/>
    </>
  )
}

export default App
