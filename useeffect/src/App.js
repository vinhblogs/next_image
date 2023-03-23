import { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Content from './components/Content';
import Timer from './components/Timer';
import Render from './components/Render';
import FakeChat from './components/FakeChat';
import Ref from './components/Ref';
import WeatherApp from './components/WeatherApp';
import WeatherCheck from './components/weather_check';
import Calculator from './components/Calculator';
function App() {
  const [show ,setShow]=useState(false)
  const name="vinh"
  return (
 
    
   <div>
    <Calculator/>
   </div>
     
   
  );
}

export default App;
