    let hourEl = document.getElementById("hourInput");
    let minuteEl = document.getElementById("minuteInput");
    let secondEl = document.getElementById("secondInput");
    const countdown = document.getElementById("countdownP");
    timerSet = 0;
    let hr = 0;
    let min = 0;
    let sec = 0;


hourEl.addEventListener("change", function() {
    hr = parseInt(hourEl.value);
});
minuteEl.addEventListener("change", function() {
    min = parseInt(minuteEl.value);
    if (min >= 60) {
        hour = Math.floor(hour + min / 60);
        min = min % 60;
    }
});
secondEl.addEventListener("change", function() {
    sec = parseInt(secondEl.value);
    if (sec >= 60) {
        min = Math.floor(min + sec / 60);
        sec = sec % 60;
        if (min >= 60) {
        hour = Math.floor(hour + min / 60);
        min = min % 60;
    }
    }
});
setInterval(updateCountdown, 1000);
updateCountdown() {
   countdown.textContent = hour + ":" + min + ":" + "sec"; 
}

function startTimer() {
    var hours = document.getElementById("hourInput").value;
    var minutes = document.getElementById("minuteInput").value;
    var seconds = document.getElementById("secondInput").value;
    
}