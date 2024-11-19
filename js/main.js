const meteoLyon = document.querySelector('.meteoLyon')
const boutonLyon = document.querySelector('.boutonMeteoLyon')
const tempLyon = document.querySelector('.tempLyon')

const meteoDijon = document.querySelector('.meteoDijon')
const boutonDijon = document.querySelector('.boutonMeteoDijon')

function donneLaMeteoLyon(){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=45.750000&lon=4.850000&appid=161a73c0ac9cbc6f4c069145740ce7be')
        .then(res => res.json())
        .then(data => meteoLyon.innerHTML = "The weather is " + (data.weather[0].description));
    tempLyon.innerHTML = "The wind is " +(wind.speed = 4.09)  ;



}
boutonLyon.addEventListener('click',donneLaMeteoLyon)


function donneLaMeteoDijon(){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=47.316667&lon=4.850000&appid=161a73c0ac9cbc6f4c069145740ce7be')
        .then(res => res.json())
        .then(data => meteoDijon.innerHTML = "The weather is " + (data.weather[0].description));

}






boutonDijon.addEventListener('click',donneLaMeteoDijon)