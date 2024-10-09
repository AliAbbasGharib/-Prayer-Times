
let click = document.createElement("click");
 function getDate()
{

    axios.get("https://api.aladhan.com/v1/timingsByCity/{date}?city=${city}&country=Lebanon&method=0")
    .then((response) => {
        let weekday = response.data.data.date.gregorian.weekday.en;
        let date = response.data.data.date.gregorian.date;
        document.getElementById("date").innerHTML = weekday + " " + date ;
    
    })
}
getDate();

let cities = ["Beirut","Sidon","Tyre","Marjaayoun","Baalbek","Nabatieh"];

for(let city of cities)
{
    let content =  `
            <select name="city" id="city">
                    <option>${city}</option>
                </select>
    `
    document.getElementById("city").innerHTML += content;
}
    

function getTime()
{
    let city = document.getElementById("city").value;
    axios.get(`https://api.aladhan.com/v1/timingsByCity/{date}?city=${city}&country=Lebanon&method=0`)
    .then((response) => {
       
        let times = response.data.data.timings;
        document.getElementById("cityName").innerHTML = city;
        document.getElementById("fajrTime").innerHTML = times.Fajr + " AM";
        document.getElementById("duhorTime").innerHTML = times.Dhuhr + " PM";
        document.getElementById("aserTime").innerHTML = times.Asr + " PM";
        document.getElementById("magribTime").innerHTML = times.Maghrib + " PM";
        document.getElementById("ishaTime").innerHTML = times.Isha + " PM";
    })
    .catch((error) =>{
        alert("There was an error fetching the timings:",error);
    })
}
getTime();