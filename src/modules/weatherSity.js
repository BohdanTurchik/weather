import weather from "./weather";
import modulRender from "./modulRender";
const weatherSity = () => {
    const spinner =document.querySelector(".spinner");
    let arr = ["Kyiv", "New York", "London"];
    arr.forEach(index => {
        console.log(index)
        weather(index)
        .then(json => {
            modulRender(json)
            spinner.remove()
        })
        
    })

    
}

export default weatherSity