import React, { useState } from 'react'
import MemoCount from './MemoCount'

const ReactMemo = () => {

    const [count, setCount] = useState(0)

    const myData = {
        name:"lilly",
        age: 2
    }

  return (
    <>
    <div className='text-white flex flex-col justify-center items-center gap-4'>

    <div  className=''>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count+1)}>Increment</button>

      
    </div>
    <MemoCount  data={myData}/>
    </div>

    </>


  )
}

export default ReactMemo
