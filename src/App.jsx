import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MemoCount from './components/memo/MemoCount'
import ReactMemo from './components/memo/ReactMemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <MemoCount/> */}
     <ReactMemo/>
    </>
  )
}

export default App
