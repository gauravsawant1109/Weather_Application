function getArea(){
  area =document.getElementById('cityInput').value
  console.log(area);
  getWeatherDetails();
}

function getWeatherDetails(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${area}&units=imperial&appid=ca018df54353f065aaed7d802825b8be`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        showWeather(data);
        })
}

function  showWeather(data){
    document.getElementById('tempHumidityWind').innerHTML=`
    <h1>${data.main.temp}°c</h1>
   <p>Humidity : ${data.main.humidity} % </p>
   <p>Wind :  ${data.wind.speed}km/h</p>
    
    
    
    `;
let date=new Date()
days=["Sunday","Moday","tuesday","Wednsday","Thursday","Friday","Saturday"]

    document.getElementById('country').innerHTML=`
    <h1>${data.name} <span style="color:grey">,${data.sys.country}</span></h1>
    <p>${data.weather[0].description}</p>
    <p >day : ${days[date.getDay()]}  </p>
    
    
    
    `;
    console.log("Weather Condition",'"',data.weather[0].description,'"');
    

    if(data.weather[0].description=="haze"){
        document.getElementById('image').setAttribute('src','https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-1024.png')
    }else if(data.weather[0].description=="scattered clouds"){   
        document.getElementById('image').setAttribute('src','https://cdn4.iconfinder.com/data/icons/weather-flat-2/614/428_-_Cloudy-512.png')
    }else if(data.weather[0].description=="broken clouds"){   
        document.getElementById('image').setAttribute('src','https://clipart-library.com/img1/970969.png')
    }else if(data.weather[0].description=="overcast clouds"){   
        document.getElementById('image').setAttribute('src','https://tse1.mm.bing.net/th?id=OIP.4PA-pIXdhtYckWVtcjCnPgHaHa&pid=Api&P=0&h=180')
    }

    

}



