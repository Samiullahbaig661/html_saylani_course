

const apikey = "65773b58a50a2d5e1b42e74671dbbc2b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector('.search input')
const searchicon =  document.querySelector('.search button')
const img = document.querySelector('.wheather-icon')
async function checkwheather(cityname) {
    try {
        // Wait for the response
        const res = await fetch(apiurl + cityname+ `&appid=${apikey}`);
        
        // Parse JSON from the response
        const data = await res.json();

        // Check if the city is found or not
        if (data.cod === 200) {
            console.log(data); // Debugging purpose

            // Update the UI with weather data
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
            document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
         
            if (data.weather[0].main == "Clouds") {
                img.src = "images/clouds.png"
            }
            else if(data.weather[0].main == "Clear"){
                img.src = "images/clear.png"
            }
            else if(data.weather[0].main == "Rain"){
                img.src = "images/rain.png"
            }
            else if(data.weather[0].main == "Drizzle"){
                img.src = "images/drizzle.png"
            }
            else if(data.weather[0].main == "Mist"){
                img.src = "images/mist.png"
        } else {
            console.error("City not found:", data.message);
            alert("City not found. Please check the city name.");
        }
    } }catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Something went wrong while fetching weather data.");
    }
   
}

function search(){
    const cityname = searchbox.value.trim();
    checkwheather(cityname)

}

checkwheather();
