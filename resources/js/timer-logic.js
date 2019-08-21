const timeInterval = window.setInterval(setTime,1000);

function setTime() {
    const currentDate = new Date();

    const secondsCount = document.querySelector(".seconds");
    const minutesCount = document.querySelector(".minutes");
    const hoursCount = document.querySelector(".hours");
    const daysCount = document.querySelector(".days");

    secondsCount.innerHTML = currentDate.getSeconds().toString();
    minutesCount.innerHTML = currentDate.getMinutes().toString();
    hoursCount.innerHTML = currentDate.getHours().toString();
    daysCount.innerHTML = currentDate.getDay().toString();



}