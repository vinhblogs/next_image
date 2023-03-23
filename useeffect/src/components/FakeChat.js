import { useEffect, useState } from "react"


const lessons=[
    {id:1,name:"reactJS là gì? Tại sao nên học reactjs"},
    {id:2, name:"SPA/MPA là gì"},
    {id:3, name:"Arrow function"}
]
function FakeChat(){
    const [lessonId, setLessonId]=useState(1)
    

    useEffect(()=>{
        const handleComment=({detail})=>{
            console.log(detail);
        }
        window.addEventListener(`lesson- ${lessonId}`,handleComment)
    },[lessonId])
    return (
        <div>
            <ul>
                {lessons.map(lesson=>(
                    <li key={lesson.id}
                        style={{
                            color:lessonId===lesson.id?
                            'red':'#333'
                        }}
                        onClick={()=>setLessonId(lesson.id)}>
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default FakeChat