const api= {
    key: "2fa73590fd8b5a4c6e68098ad5625395",
  base: "https://api.openweathermap.org/data/2.5/"

};

const searchbox = document.querySelector(".searchbox");
searchbox.addEventListener("keypress",setQuery);

function setQuery(evt){
    if (evt.keyCode==13) {
        getResults(searchbox.value);
    }
}
function SetQuery2() {
    getResults(searchbox.value);
}

function getResults(val) {
    fetch(`${api.base}weather?q=${val}&units=metric&APPID=${api.key}`)
    .then((weather) => {
        return weather.json();
    })
    .then(displayResults);
}
function displayResults(weather){
    console.log(weather);
    let city = document.querySelector(".location .city");
    city.innerText = `${weather.name},${weather.sys.country}`;

    let now= new Date();
    let date = document.querySelector(".location .date");
    date.innerText = dateBuilder(now);

    function dateBuilder(dt) {
        let months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ];
          let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        let day = days[dt.getDay()];
        let mon = months[dt.getMonth()];
        let yr = dt.getFullYear();

        return `${day} ${dt.getDate()} ${mon} ${yr}`


    }

    let temp = document.querySelector(".current .temp");
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`

    let weath =document.querySelector(".current .weather");
    weath.innerText = weather.weather[0].main;

    let hilow = document.querySelector(".hilow");
  hilow.innerText = `${weather.main.temp_min}°C / ${weather.main.temp_max}°C`;


}