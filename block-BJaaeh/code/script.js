let secondHand = document.querySelector('.second-hand');
let minsHand = document.querySelector('.min-hand');
let hourhand = document.querySelector('.hour-hand');

function setDate() {
    let now = new Date();
    let seconds = now.getSeconds();
    let secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    let mins = now.getMinutes();
    let minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    let hour = now.getMinutes();
    let hourDegrees = ((mins / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(setDate, 1000);