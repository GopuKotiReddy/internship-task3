let weather={
    "apikey":"9a2f149c327c3bf050bb5c13679d093b",
    fetchweather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?id="
            + city
            + "&units=metric&appid="
            +this.apikey
        )
        .then((response)=> response.json())
        .then((data)=>this.displayweather(data));
    },
    displayWeather: function(city) {
      const{name}=data;
      const{icon,description}=data.weather[0];
      const{temp,humidity}=data.main;
      const{speed}=data.wind;
      console.log(name,icon,description,humidity,speed);
      document.querySelector(".city").innerText="Weather in"+name;
      document.querySelector(".icon").src="http://openweathermap.org/img/wn/01n@2x.png"+icon+".png";
      document.querySelector(".description").innerText=temp+"°C";
      document.querySelector(".humidity").innerText="Humidity;"+humidity+"%";
      document.querySelector(".wind").innerText="wind speed:"+speed+"kmph";
      document.querySelector(".weather").classList.remove("loading");
    },
    search: function() {
        this.fetchweather(document.querySelector(".search-bar")).value;
    }
};

document
.querySelector(".search button")
.addEventListener("click",function(){
    
        weather.search();
     
});

document
.querySelector("search-bar")
.addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        weather.search();
    }
});

