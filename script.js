// display time //
setInterval(function() {
    document.querySelector("#timeEl").innerHTML = new Date().toLocaleString();
}, 1000);

// make window draggable //
dragElement(document.getElementById("welcome"));
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

// opening and closing welcome window //
var welcomeScreen = document.querySelector("#welcome");
function closeWindow(el) {
    el.style.display = "none";
}
function openWindow(el) {
    el.style.display = "block";
}
var welcomeScreenClose = document.querySelector("#welcomeclose"), welcomeScreenOpen = document.querySelector("#welcomeopen");
welcomeScreenClose.addEventListener("click", function() {
    closeWindow(welcomeScreen);
});
welcomeScreenOpen.addEventListener("click", function() {
    openWindow(welcomeScreen);
});
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
function handleIconTap(el) {
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
var appScreenClose = document.querySelector("appclose");
appScreenClose.addEventListener("click", () => 
    closeWindow(appScreen));