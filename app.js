function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const mins = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${mins}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}

function date() {
    const now = new Date();
    let weekDay = now.getDay();
    let day = now.getDate();
    let month= now.getMonth();

    switch (weekDay) {
        case 0:
            weekDay = "Sunday";
            break;
        case 1:
            weekDay = "Monday";
            break;
        case 2:
            weekDay = "Tuesday";
            break;
        case 3:
            weekDay = "Wednesday";
            break;
        case 4:
            weekDay = "Thursday";
            break;
        case 5:
            weekDay = "Friday";
            break;
        case 6:
            weekDay = "Saturday";
            break;
    }

    switch (month) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }

    const dateString = `${weekDay} ${day} ${month}`

    document.getElementById("date").textContent = dateString;

}

date();
updateClock();
setInterval(updateClock, 999)