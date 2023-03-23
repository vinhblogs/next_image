
import React ,{useEffect, useState} from "react"

const tabs=['posts','comments','albums']
function Welcome(props){
    
    const[title,setTitle]=useState('')
    const [posts,setPosts]= useState([])
    const[type,setType]=useState('posts')
    const[showGoToTop,setShowGoToTop]=useState(false)

    console.log("....",props.name)
    console.log(type)
    // useEffect
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res =>
            res.json() 
            )
        .then(posts =>{
            // setState => re-render welcom => sau đó nó gọi lại callback(useEffect)
            setPosts(posts)
           
        })       
        
    },[type])

    useEffect(()=>{
        const handleScroll=()=>{
            console.log(window.scrollY)
            if (window.scrollY>=200){
                setShowGoToTop(true)
            }else{
                setShowGoToTop(false)
            }

           // setShowGoToTop(window.scrollY>=200)
        }
        window.addEventListener('scroll',handleScroll)
        console.log("add")
        return()=>{
            window.removeEventListener('scroll',handleScroll)
            console.log("remove")
        }
    },[])
    
    // const[ontop,setOnTop]=useState()
    // const handleOnTop=()=>{
    //     setOnTop()
    // }
    return(
        <div>
            {
                tabs.map((tab,index)=>(
                    <button key={index}
                    style={type===tab? {
                        color:'#fff',
                        background:'#333'
                    }:{}}
                    onClick={()=>
                    {console.log(tab)
                    setType(tab)}}>
                        {tab}
                    </button>
                ))
            }

            <input value={title}
            onChange={e=>setTitle(e.target.value)}></input>
            {
                posts.map((post, key)=>(
                    <>
                    <br/>
                    <span style={{color:"red"}} key={key}>{key+1} - {post.title||post.name}</span>
                    
                    </>
                ))
            }
            {showGoToTop && (
                <button style={{position:'fixed',
                                right:20,
                                bottom:20}}
                                onClick={()=> {
                                    
                                    document.documentElement.scrollTop=0
                                    }}> go to top </button>
                    
                
            )}
            
        </div>
    )
    
      
}
export default Welcome

// {
//     data.map((value,key)=>(
//         <>
//         <br/>
//         <span style={{color: "red"}} key={key}>{key+1}-{value.title}</span>
        
//         </>
//     ))
// }