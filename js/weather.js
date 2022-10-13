const API_KEY = API_KEY_DATA;

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live it!", lat, lon);
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    
    fetch(url).then(response => response.json().then(data => {
        
        
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        
        if (data.name === undefined) {
            weather.innerText = "Couldn't access to the weather API.";
            weather.style.color = 'tomato';
            return;
        }
        
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} ℃`;
    }));
}

function onGeoError () {
    weather.innerText = "Couldn't access to the weather API.";
    weather.style.color = 'tomato';
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);