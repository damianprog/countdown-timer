const inputs = document.querySelector(".inputs");
const eventInfo = document.querySelector(".event-info");
const countdownButton = document.querySelector(".countdown-button");
const eventInput = document.querySelector(".event-input");
let intervalId = "";

const dateInput = document.querySelector(".date-input");
dateInput.setAttribute("min",new Date().toISOString().slice(0, 10));

function countdown() {
    if (countdownButton.innerHTML === "Start" && inputsValidation()) {
        startCountdown();
    } else if (countdownButton.innerHTML === "Stop") {
        stopCountdown();
    }
}

function inputsValidation() {
    if (!dateInput.value) {

    }

    return true;
}

function startCountdown() {
    const timeInput = document.querySelector(".time-input").value;

    let userDate = new Date(dateInput.value);

    const hoursMinutesSeconds = timeInput !== "" ? timeInput.split(":") : ["0", "0", "0"];
    userDate.setHours(
        parseInt(hoursMinutesSeconds[0]),
        parseInt(hoursMinutesSeconds[1]),
        hoursMinutesSeconds[2] ? parseInt(hoursMinutesSeconds[2]) : 0
    );

    showCountdownLabels();

    intervalId = window.setInterval(() => {
        setTime(getTimeDifference(userDate));
    }, 1000);
}

function stopCountdown() {
    inputs.style.display = "block";

    eventInfo.style.display = "none";

    countdownButton.style.backgroundColor = "#5CA564";
    countdownButton.innerHTML = "Start";

    window.clearInterval(intervalId);

    document.querySelector(".days").innerHTML = "0";
    document.querySelector(".hours").innerHTML = "0";
    document.querySelector(".minutes").innerHTML = "0";
    document.querySelector(".seconds").innerHTML = "0";
}

function showCountdownLabels() {
    inputs.style.display = "none";

    eventInfo.style.display = "block";
    eventInfo.innerHTML = `<h1>${eventInput.value}</h1>`;

    countdownButton.style.backgroundColor = "#8b1616";
    countdownButton.innerHTML = "Stop";
}

function getTimeDifference(userDate) {
    let date1 = new Date().getTime();
    let date2 = userDate.getTime();

    return Math.abs(date1 - date2);
}

function setTime(timeDiff) {
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff - (days * 1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff - ((days * 1000 * 60 * 60 * 24) + (hours * 1000 * 60 * 60))) / (1000 * 60));
    const seconds = Math.floor((timeDiff - ((days * 1000 * 60 * 60 * 24) + (hours * 1000 * 60 * 60) + (minutes * 1000 * 60))) / 1000);

    document.querySelector(".days").innerHTML = days.toString();
    document.querySelector(".hours").innerHTML = hours.toString();
    document.querySelector(".minutes").innerHTML = minutes.toString();
    document.querySelector(".seconds").innerHTML = seconds.toString();

    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        stopCountdown();
    }
}