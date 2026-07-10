// display time //
setInterval(function() {
    document.querySelector("#timeEl").innerHTML = new Date().toLocaleString();
}, 1000);
var welcomeMinimize = document.getElementById("welcomeminimize");
welcomeMinimize.addEventListener("click", function() {
    minimizeWindow(welcomeScreen);
});
// make window draggable //
dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("timer"));
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
var biggestIndex = 1;
// opening and closing welcome window //
var welcomeScreen = document.querySelector("#welcome");
var timerScreen = document.querySelector("#timer");
function closeWindow(el) {
    el.classList.remove("active");
    el.style.display = "none";
    biggestIndex = biggestIndex - 1;
    el.style.zIndex = biggestIndex;

}
var bottomBar = document.getElementById("bottomBar");
function minimizeWindow(el) {
    el.classList.add("minimized");
    el.style.display = "none";
    if (el === "welcome") {
        let appOnBar = document.createElement("img");
        appOnBar.classList.add("appOnBar");
        appOnBar.backgroundImage = "url('./images/timerIcon.png')";
        bottomBar.appendChild(appOnBar);
    }
}

function openWindow(el) {
     if (!el.classList.contains("active")) {
         el.classList.add("active");
         el.style.left = 50 + "%";
         el.style.top = 50 + "%";
     }
    el.style.display = "block";
    biggestIndex++;
    el.style.zIndex = biggestIndex;
}
var welcomeScreenClose = document.querySelector("#welcomeclose"), welcomeScreenOpen = document.querySelector("#welcomeopen");
var timerScreenClose = document.querySelector("#timerclose");
var timerScreenOpen = document.querySelector("#timeropen");
welcomeScreenClose.addEventListener("click", function() {
    closeWindow(welcomeScreen);
});
welcomeScreenOpen.addEventListener("click", function() {
     openWindow(welcomeScreen);
});
timerScreenOpen.addEventListener("click", () => 
 openWindow(timerScreen));

timerScreenClose.addEventListener("click", () => 
 closeWindow(timerScreen));
// open app //
var selectedIcon = undefined;
function selectIcon(el) {
    el.classList.add("selected");
    selectedIcon = el;
}
function deselectIcon(el) {
    el.classList.remove("selected");
    selectedIcon = undefined;
}
function handleIconTap(el, window) {
    biggestIndex++;
    el.style.zIndex = biggestIndex;
    if(el.classList.contains("selected")) {
        deselectIcon(el);
        openWindow(window);
    } else {
        selectIcon(el);
    }
}
// make app draggable // 
dragElement(document.querySelector("#app"));
// make app openable and closable //
var appScreen = document.querySelector("#app");
var appScreenClose = document.querySelector("#appclose");
var appOpen = document.querySelector("#appopen");
appScreenClose.addEventListener("click", () => 
    closeWindow(appScreen));


function addWindowTapHandling(el) {
    el.addEventListener("mousedown", () =>
    handleIconTap(el))
}
appOpen.addEventListener("click", () => 
    openWindow(appScreen));
addWindowTapHandling(welcomeScreen);
addWindowTapHandling(appScreen);
addWindowTapHandling(timerScreen);

function initializeIcon(name) {
    var icon = document.querySelector('#' + name + 'Icon');
    var screen = document.querySelector('#' + name);
    icon.addEventListener("click", () => handleIconTap(icon, screen));
}
initializeIcon("timer");
function initializeWindow(elName) {
    var screen = document.querySelector("#" + elName);
    addWindowTapHandling(screen);
    closeWindow(elName);
    dragElement(screen);
    if (elName != "window") {
        initializeIcon(elName);
    }
}
initializeWindow("welcome");
initializeWindow("app");
setInterval(function() {
    let hourEl = document.getElementById("hourInput");
let minuteEl = document.getElementById("minuteInput");
let secondEl = document.getElementById("secondInput");
const countdown = document.getElementById("countdownP");
secondEl.setAttribute("max", 59);
minuteEl.setAttribute("max", 59);
    if (minuteEl.value >= 60) {
        minuteEl.value = 59;
    }
    if (secondEl.value >= 60) {
        secondEl.value = 59;
    }
}, 1000);

function startTimer() {
    var hours = document.getElementById("hourInput").value;
    var minutes = document.getElementById("minuteInput").value;
    var seconds = document.getElementById("secondInput").value;
    var hourMilli = hours * 3600000;
    var minutesMilli = minutes * 60000;
    var secondsMilli = seconds * 1000;
}