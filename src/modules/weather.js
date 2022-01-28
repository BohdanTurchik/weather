
const weather = (city) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8f2d10659d69f6a82084691de1384df0`)
        .then(response => response.json())
};
export default weather;
