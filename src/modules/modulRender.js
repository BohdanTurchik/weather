function modulRender (data){
    let block = document.querySelector(".content");
    block.insertAdjacentHTML("beforeend", `<div class="block_weather">
    <p class="city_name1">${data.name}</p>
    <hr>
     <p class="count1">${(data.main.temp - 273.15).toFixed(1)}&deg C
    </p>
     <p class="disclaimer1">${data.weather[0].main
    }</p>
    <hr>
    <p class="features1">
    <img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">
    <li class="li1">Від ${Math.round(data.main.temp_min-273)}&deg; до ${Math.round(data.main.temp_max-273)}&deg;</li>
    </p>

</div>`)
}
export default modulRender;