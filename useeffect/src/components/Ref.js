import { useState } from "react"

function Ref(){
    const [count,setCount]=useState(60)
    const handleStart=()=>{
        setInterval(()=>{
            setCount(prevCount=>prevCount-1)
        },1000)
    }

    const handleStop=()=>{

    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}
export default Ref