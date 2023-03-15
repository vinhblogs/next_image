// next_image
import { useState } from 'react';
import './App.css';
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
function App() {

  const images=[
    "https://images2.thanhnien.vn/zoom/700_438/Uploaded/gianglao/2022_07_08/cristiano-ronaldo-1207.jpeg",
    "https://image.vtc.vn/resize/th/upload/2022/12/31/60743b86d2c02285481ba2d9a0eea6bf-11534771.jpg",
    "https://cdnimg.vietnamplus.vn/uploaded/mzdic/2022_11_23/ronaldounited2311.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcQf1tMB_dtkcELoN6rKnhBBbsRfkLxc4Ww&usqp=CAU"

  ]
  const [current, setCurrent]=useState(0)

  function nextSlide(){
    setCurrent(current===images.length-1 ? 0:current+1)
  }

  function prevSlide(){
    setCurrent(current===0? images.length-1:current-1)
  }

  return (
    <div>
     <h1>project image</h1>
     <div className='slider'>
      <div className='left' onClick={prevSlide}><FaCaretLeft/></div>
      <div className='right' onClick={nextSlide}><FaCaretRight/></div>
      {images.map((image,index)=>
      current===index && (
        <div key={image}>
          <img src={image} alt="images"/>
        </div>
      ))}
     </div>
    </div>
  );
}

export default App;
