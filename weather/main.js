let search = document.getElementById('search')
let button = document.getElementById('searchbtn')
console.log(search);

button.addEventListener('click',func1);

function func1(){
    let value = search.value;
    if(value){
        let arr = value.split(' ');
        let city_name = arr[arr.length-1];
        console.log(city_name);
        const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city_name}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'bf8f5b59d6msh456552a773f4e3dp1e6eb4jsnf6b2e7d2bd16',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };
    
        async function fetchData() {
            try {
                const response = await fetch(url, options);
                const result = await response.text();
                console.log(result);
                let temp_data = JSON.parse(result).temp;
                output(temp_data);
            } catch (error) {
                console.error(error);
            }
        }
        clear(city_name);
        fetchData();
    }else{

    }
}
function clear(city){
    search.value = `${city}'s Weather`
}

function output(temp){
    let output_Data = document.getElementById('output');
    let temperatureSpan = document.createElement('span');
    temperatureSpan.innerText = temp;
    let celcius = document.createElement('span');
    celcius.innerText = ' degree Celcius';
    celcius.style.fontSize = "150px";
    celcius.style.fontStyle = "oblique";
    celcius.style.color = "blue";
    output_Data.appendChild(temperatureSpan);
    output_Data.appendChild(celcius);
}
