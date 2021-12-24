let weatherKyiv = function(){
    const spinner =document.querySelector(".spinner");
    fetch("https://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f")
    .then(response=>  response.json())
    .then(function(data){
        console.log(data);
        document.querySelector(".city_name").textContent = data.name;
        document.querySelector(".count").innerHTML = Math.round(data.main.temp-273) + '&deg;';
        document.querySelector(".disclaimer").textContent = data.weather[0]['description'];
        document.querySelector(".features").innerHTML='<img src="https://openweathermap.org/img/wn/' + data.weather[0]['icon'] + '@2x.png">';
        document.querySelector(".li").innerHTML= ` Від${Math.round(data.main.temp_min-273)}&deg; до ${Math.round(data.main.temp_max-273)}&deg;`;
    })
    .finally(()=>spinner.remove()) 
}
export default weatherKyiv;