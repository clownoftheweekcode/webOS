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
dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("app"));
dragElement(document.getElementById("timer"));
var biggestIndex = 1;
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
function closeWindow(el) {
    el.style.display = "none";
}
function openWindow(el) {
    el.style.display = "block";
    biggestIndex++;
    el.style.zIndex = biggestIndex;
}
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
function addWindowTapHandling(el) {
    el.addEventListener("mousedown", () =>
    handleIconTap(el))
}
function initializeIcon(name) {
    var icon = document.querySelector('#' + name + 'Icon');
    var screen = document.querySelector('#' + name);
    icon.addEventListener("click", () => handleIconTap(icon, screen));
}
function initializeWindow(elName) {
    var screen = document.querySelector("#" + elName);
    addWindowTapHandling(screen);
    closeWindow(elName);
    dragElement(screen);
    if (elName != "window") {
        initializeIcon(elName);
    }
}
addWindowTapHandling(welcomeScreen);
addWindowTapHandling(appScreen);
initializeIcon("timer");
initializeIcon("welcome");
initializeIcon("app");
initializeWindow("welcome");
initializeWindow("timer");
initializeWindow("app");
welcomeScreenOpen.addEventListener("click", function() {
        dragElement(document.getElementById("welcome"));
    });
        
    appScreenOpen.addEventListener("click", function() {
        document.getElementById("app");
    });
    timerScreenOpen.addEventListener("click", () => 
        openWindow(timerScreen));
    welcomeClose.addEventListener("click", () => 
        closeWindow(welcomeScreen));
    appClose.addEventListener("click", () => 
        closeWindow(appScree));
    timerClose.addEventListener("click", () => 
        closeWindow(timerScreen));