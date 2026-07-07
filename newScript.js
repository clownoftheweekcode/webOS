setInterval(function() {
    document.querySelector("#timeEl").innerHTML = new Date().toLocaleString();
}, 1000);
function dragElement(el) {
    var initialX = 0, initialY = 0, currentX = 0, currentY = 0;
    if (document.getElementById(el.id + "header")) {
        document.getElementById(el.id + "header").onmousedown = startDragging;
    } else {
        el.onmousedown = startDragging;
    }
    function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
}
    function dragElement(e) {
        e = e || window.event;
        e.preventDefault();
        currentX = initialX - e.clientX;
        currentY = initialY - e.clientY;
        initialX = e.clientX;
        initialY = e.clientY;
        el.style.top = (el.offsetTop - currentY) + "px";
        el.style.left = (el.offsetLeft - currentX) + "px";
    }
    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
function closeWindow(el) {
    el.style.display = "none";
}
function openWindow(el) {
    el.style.display = "block";
    biggestIndex++;
    el.style.zIndex = biggestIndex;
}
function elements() {
    var welcomeScreen = document.querySelector("#welcome");
    var appScreen = document.querySelector("#app");
    var timerScreen = document.querySelector("#timer");
    var welcomeClose = document.querySelector("#welcomeclose");
    var appClose = document.querySelector("#appclose");
    var timerClose = document.querySelector("#timerclose");
    var welcomeOpen = document.querySelector("#welcomeopen");
    var appOpen = document.querySelector("#appopen");
    var timerOpen = document.querySelector("#timeropen");
    var welcomeHeader = document.querySelector("#welcomeheader");
    var appHeader = document.querySelector("#appheader");
    var timerHeader = document.querySelector("#timerheader");
}
function setFunctions() {
    welcomeScreenOpen.addEventListener("click", () => 
        openWindow(welcomeScreen));
    appScreenOpen.addEventListener("click", () => 
        openWindow(appScreen));
    timerScreenOpen.addEventListener("click", () => 
        openWindow(timerScreen));
    welcomeClose.addEventListener("click", () => 
        closeWindow(welcomeScreen));
    appClose.addEventListener("click", () => 
        closeWindow(appScree));
    timerClose.addEventListener("click", () => 
        closeWindow(timerScreen));
    dragElement(document.getElementById("welcome"));
    dragElement(document.getElementById("app"));
    dragElement(document.getElementById("timer"));
}
function startJS() {
    elements();
    setFunctions();
}
