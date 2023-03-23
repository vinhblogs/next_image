import { useEffect, useState } from "react"

function Render(){
    const [avatar,setAvatar]=useState()
  
    useEffect(()=>{
        //clean up
        return ()=>{
           avatar && URL.revokeObjectURL(avatar.prview)
        }
    },[avatar])
    const handleAvatar=(e)=>{
      const  file=e.target.files[0]
      file.prview=URL.createObjectURL(file)
    
      setAvatar(file)
      e.target.value=null
      console.log(2)
    }
    return (
        <div>
            <input type="file" onChange={handleAvatar}></input>
            {avatar && (
                <img src={avatar.prview} alt="" width="50%"></img>
            )}
        </div>
    )
}

export default Render