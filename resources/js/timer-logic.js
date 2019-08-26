const inputs = document.querySelector(".inputs");
const eventInfo = document.querySelector(".event-info");
const startButton = document.querySelector(".start-button");

function startCountdown() {
    const dateInput = document.querySelector(".date-input").value;
    const timeInput = document.querySelector(".time-input").value;

    if (dateInput) {
        let userDate = new Date(dateInput);

        const hoursMinutesSeconds = timeInput !== "" ? timeInput.split(":") : ["0", "0", "0"];
        userDate.setHours(
            parseInt(hoursMinutesSeconds[0]),
            parseInt(hoursMinutesSeconds[1]),
            hoursMinutesSeconds[2] ? parseInt(hoursMinutesSeconds[2]) : 0
        );

        showEventLabels();

        window.setInterval(() => {
            setTime(getTimeDifference(userDate));
        }, 1000);
    }
}

function showEventLabels() {
    const eventInput = document.querySelector(".event-input").value;

    inputs.style.display = "none";

    eventInfo.style.display = "block";
    eventInfo.innerHTML = `<h1>${eventInput}</h1>`;

    startButton.style.backgroundColor = "#8b1616";
    startButton.innerHTML = "Stop";
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
}