import { useEffect, useState } from "react"

function Timer(){

    const [countdown,setCountdown]=useState(180)

    useEffect(()=>{
        const timerId=setInterval(()=>{
            setCountdown(prevState=>prevState-1)
            console.log('countdown')
        },1000)

        return ()=>clearInterval(timerId)
        
    },[])
    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}
export default Timer