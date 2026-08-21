// display time //
setInterval(function() {
    const timeEl = document.querySelector("#timeEl");
    if (timeEl) timeEl.textContent = new Date().toLocaleString();
}, 1000);
// var welcomeMinimize = document.getElementById("welcomeminimize");
/* welcomeMinimize.addEventListener("click", function() {
    minimizeWindow(welcomeScreen);
}); */
// make window draggable //
dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("notes"));
dragElement(document.getElementById("gallery"));
function dragElement(el) {
    if (!el) return;
    var initialX = 0, initialY = 0, currentX = 0, currentY = 0;
    if (document.getElementById(el.id + "header")) {
        document.getElementById(el.id + "header").onmousedown = startDragging;
    } else {
        el.onmousedown = startDragging;
    }
    function startDragging(e) {
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
}
    function dragElement(e) {
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
var notesScreen = document.querySelector("#notes");
var galleryScreen = document.querySelector("#gallery");
function closeWindow(el) {
    if (el) {
        el.classList.remove("active");
        el.style.display = "none";
        el.style.zIndex = 0;
    }
}
/* var bottomBar = document.getElementById("bottomBar");
function minimizeWindow(el) {
    el.classList.add("minimized");
    el.style.display = "none";
    if (el === "welcome") {
        let appOnBar = document.createElement("img");
        appOnBar.classList.add("appOnBar");
        appOnBar.backgroundImage = "url('./images/notesIcon.png')";
        bottomBar.appendChild(appOnBar);
    }
} */
let COSTab = document.getElementById("welcomeTab");
let appTab = document.getElementById("appTab");
let notesTab = document.getElementById("notesTab");
let galleryTab = document.getElementById("galleryTab");
function openWindow(el) {
    if (!el) return;
     if (!el.classList.contains("active")) {
         el.classList.add("active");
         el.style.left = 50 + "%";
         el.style.top = 50 + "%";
         if (el.id === ("windowApp")) {
            COSTab.style.borderBottom = `2px black solid`;
         }
     }
    el.style.display = "block";
    biggestIndex++;
    el.style.zIndex = biggestIndex;
}
var welcomeScreenClose = document.querySelector("#welcomeclose"), welcomeScreenOpen = document.querySelector("#welcomeopen");
var notesScreenClose = document.querySelector("#notesclose");
var notesScreenOpen = document.querySelector("#notesopen");
var galleryScreenClose = document.querySelector("#galleryclose");
var galleryScreenOpen = document.querySelector("#galleryopen");
if (welcomeScreenClose) welcomeScreenClose.addEventListener("click", () => closeWindow(welcomeScreen));
if (welcomeScreenOpen) welcomeScreenOpen.addEventListener("click", () => openWindow(welcomeScreen));
if (notesScreenOpen) notesScreenOpen.addEventListener("click", () => openWindow(notesScreen));
if (notesScreenClose) notesScreenClose.addEventListener("click", () => closeWindow(notesScreen));
if (galleryScreenOpen) galleryScreenOpen.addEventListener("click", () => openWindow(galleryScreen));
if (galleryScreenClose) galleryScreenClose.addEventListener("click", () => closeWindow(galleryScreen));
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
    if (!el) return;
    el.addEventListener("mousedown", () => {
        biggestIndex++;
        el.style.zIndex = biggestIndex;
    });
}
if (appOpen) appOpen.addEventListener("click", () => openWindow(appScreen));
addWindowTapHandling(welcomeScreen);
addWindowTapHandling(appScreen);
addWindowTapHandling(notesScreen);
addWindowTapHandling(galleryScreen);

function initializeIcon(name) {
    var icon = document.querySelector('#' + name + 'Icon');
    var screen = document.querySelector('#' + name);
    if (icon && screen) icon.addEventListener("click", () => handleIconTap(icon, screen));
}
//initializeIcon("notes");
console.log("notes");
// initializeIcon("gallery");

function initializeWindow(elName) {
    var screen = document.querySelector("#" + elName);
    addWindowTapHandling(screen);
    closeWindow(screen);
    dragElement(screen);
    if (elName !== "window" && screen) {
        initializeIcon(elName);
    }
}
initializeWindow("welcome");
initializeWindow("app");
initializeWindow("gallery");


let galleryImgs = [
    {"name": "cat", "source": "./images/cat.png"},
    {"name": "outside", "source": "./images/outside.png"},
]
let galleryImgEl = document.getElementById("galleryImgEl");
let prevImgBtn = document.getElementById("prevImg");
let nextImgBtn = document.getElementById("nextImg");
let imgIndex = 0;
if (prevImgBtn && galleryImgEl) prevImgBtn.addEventListener("click", function() {
    imgIndex = (imgIndex - 1 + galleryImgs.length) % galleryImgs.length;
    galleryImgEl.src = galleryImgs[imgIndex].source;
});
if (nextImgBtn && galleryImgEl) nextImgBtn.addEventListener("click", function() {
    imgIndex = (imgIndex + 1) % galleryImgs.length;
    galleryImgEl.src = galleryImgs[imgIndex].source;
});
