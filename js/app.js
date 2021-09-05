setInterval(() => {
    let time = new Date()
    let hours = time.getHours();
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    let day = 'AM'

    if (hours > 12) {
        hours -= 12;
        day = 'PM'
    }

    hours = hours < 10 ? '0' + hours: hours;
    minutes = minutes < 10 ? '0' + minutes: minutes;
    seconds = seconds < 10 ? '0' + seconds: seconds;

    let showClock = `${hours}:${minutes}:${seconds} ${day}`

    document.getElementById('displayTime').innerText = showClock;
}, 1000)