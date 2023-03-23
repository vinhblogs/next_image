import { useEffect, useState } from "react"
import '../weather.css'
import moment from "moment/moment"
function WeatherApp(){
    const APP_ID='47764b5b407cc0193b8b67d001764593'


    //call api
        const[city,setCity]=useState("")
        const[datas,setData]=useState({})
        const[nameCity, setNameCity]=useState('') // call tên city
    // handleInput
      
    // handleSubmit
    const handleSubmit = (e)=>{
        console.log("value:: ",city)
        setNameCity(city)
        e.preventDefault();
    }

         console.log("city::: ",city)
    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${APP_ID}&units=metric&lang=vi`)
        .then( res => res.json())
        .then(data=> setData(data))

    },[nameCity])
   
    console.log("listData:: ",datas)

    return(
        <div>
        <div className="container">
        <div className="main-section">
            <div className="search-bar">
                <i className="fas fa-search search-icon"></i>
                {/* <input  value={city} onChange={e=>setCity(e.target.value)} type="text" name="search-city" id="search-input" placeholder="thành phố"
                 ></input> */}
                 
                {/* <button onClick={(city)=>handleSubmit(city)}>click</button> */}

                <form onSubmit={handleSubmit}>
                <label>
                        Name:
                <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
                </form>
            </div>
            <div className="infor-wrapper">
                <p className="city-name">{datas?.name}</p>
                <p className="weather-state">{datas?.weather[0]?.description}</p>
                <img src={`https://openweathermap.org/img/wn/${datas.weather[0].icon}@2x.png`}
                alt="weather-icon" className="weather-icon"/>
                <p className="temperature">{Math.round(datas.main.temp)}</p>
            </div>
            
        </div>
        
        <div className="additional-section">
            <div className="row">
                <div className="item">
                    <div className="lable">mặt trời mọc</div>
                    <div className="value sunrise">{moment.unix(datas?.sys?.sunrise).format('H:mm')}</div>
                </div>
                <div className="item">
                    <div className="lable">mặt trời lặn</div>
                    <div className="value sunset">{moment.unix(datas?.sys?.sunset).format('H:mm')}</div>
                </div>

            </div>
            <div className="row">
                <div className="item">
                    <div className="lable">độ ẩm</div>
                    <div className="value"><span className="humidity">{datas?.main?.humidity}</span>%</div>
                </div>
                <div className="item">
                    <div className="lable">gió</div>
                    <div className="value"><span className="wind-speed">{datas?.wind?.speed*3.6}</span>km/h</div>
                </div>

            </div>

        </div>
    </div>
    </div>
    )
}
export default WeatherApp