function startCountdown() {
    const dateInput = document.querySelector(".date-input").value;
    const timeInput = document.querySelector(".time-input").value;

    let currentDate = new Date();
    let userDate = new Date(dateInput);

    if (timeInput !== "") {
        const hoursMinutesSeconds = timeInput.split(":");
        userDate.setHours(
            parseInt(hoursMinutesSeconds[0]),
            parseInt(hoursMinutesSeconds[1]),
            parseInt(hoursMinutesSeconds[2])
        );
    }

    if (dateInput) {
        let timeDiff = getDatesDifference(currentDate,userDate);

        window.setInterval(() => {
            setTime(timeDiff);
            timeDiff = timeDiff - 1000;
        },1000);
    }
}

function getDatesDifference(a,b) {
    let date1 = a.getTime();
    let date2 = b.getTime();

    return Math.abs(date1 - date2);
}

function setTime(timeDiff) {

    const secondsCount = document.querySelector(".seconds");
    const minutesCount = document.querySelector(".minutes");
    const hoursCount = document.querySelector(".hours");
    const daysCount = document.querySelector(".days");

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff - (days * 1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff - ((days * 1000 * 60 * 60 * 24) + (hours * 1000 * 60 * 60))) / (1000 * 60));
    const seconds = Math.floor((timeDiff - ((days * 1000 * 60 * 60 * 24) + (hours * 1000 * 60 * 60) + (minutes * 1000 * 60))) / 1000);

    daysCount.innerHTML = days.toString();
    hoursCount.innerHTML = hours.toString();
    minutesCount.innerHTML = minutes.toString();
    secondsCount.innerHTML = seconds.toString();
}