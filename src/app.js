function displayDate(time){
    let date = new Date(time);
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day= days[date.getDay()];
    let hour= date.getHours();
    let minute= date.getMinutes();
    return `${day} ${hour}:${minute}`;
}
function displayTemperature(response){
    console.log(response.data);
    let temperature= document.querySelector("#temperature");
    let humidity= document.querySelector("#humidity");
    let wind= document.querySelector("#wind");
    let city= document.querySelector("#city");
    let country= document.querySelector("#country");
    let description= document.querySelector("#description");
    let date= document.querySelector("#date");
    let icon= document.querySelector("#icon");
    temperature.innerHTML= Math.round(response.data.temperature.current);
    humidity.innerHTML= response.data.temperature.humidity;
    wind.innerHTML= Math.round(response.data.wind.speed);
    city.innerHTML= response.data.city;
    country.innerHTML= response.data.country;
    description.innerHTML= response.data.condition.description;
    date.innerHTML= displayDate(response.data.time*1000);
    icon.setAttribute("src",response.data.condition.icon_url);
    icon.setAttribute("alt",response.data.condition.description);
}

function search(city){
let apiKey= "618babd8a78c104b6a8d38473t84aefo";
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(apiUrl).then(displayTemperature);

}

function handelSubmit(event){
    event.preventDefault();
    let input = document.querySelector("#city-input");
    search(input.value);
    console.log(input.value);
}
search("New York");
let form = document.querySelector("#search-form");
form.addEventListener("submit",handelSubmit);