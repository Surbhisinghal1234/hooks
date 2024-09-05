import { useState } from "react"
import ExpensiveComponent from "./ExpensiveComponent"

const MemoParentComponent= ()=>{
    const [count, setCount] = useState(0)


    return (
        <>
        <div className="text-white flex flex-col gap-4 justify-center items-center">
            <ExpensiveComponent/>
            <button className="bg-cyan-600 py-2 px-4 rounded-md" onClick={()=> setCount(count+1)}>Re render</button>
            <p>Parent re render: {count}</p>
        </div>
        </>
    )

}
export default MemoParentComponent