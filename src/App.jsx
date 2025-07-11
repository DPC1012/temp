import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div  >
        hi there
      </div>
      <div>
        <Temp />
      </div>
    </>
  )
}

function Temp(){
  const [count , setCount] = useState(0)
  function handle()
  {
      setCount(count+1)
  }
  return <div >
  <button className='bg-black text-white rounded-full px-2 cursor-pointer' onClick={handle} >Count {count}</button>
  </div>
}

export default App
