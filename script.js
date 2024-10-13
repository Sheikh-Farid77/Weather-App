const input = document.querySelector('.search input');
const btn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');


async function checkWeather(city){
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=8dd313087c27c7ca0248efb349d139e3`);
    const data = await res.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity;
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = './images/clouds.png'
    }else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = './images/rain.png'
    }else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = './images/clear.png'
    }else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = './images/drizzle.png'
    }else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = './images/mist.png'
    }else{
        weatherIcon.src = './images/snow.png'
    }



    input.value = ''

}

btn.addEventListener('click', function(){
    checkWeather(input.value);
})