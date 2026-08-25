// display time //
setInterval(function() {
    document.querySelector("#timeEl").innerHTML = new Date().toLocaleString();
}, 1000);
// var welcomeMinimize = document.getElementById("welcomeminimize");
/* welcomeMinimize.addEventListener("click", function() {
    minimizeWindow(welcomeScreen);
}); */

let OSIconBtm = document.getElementById("OSIconBtm");
let updatesIconBtm = document.getElementById("updatesIconBtm");
let notesIconBtm = document.getElementById("notesIconBtm");
let galleryIconBtm = document.getElementById("galleryIconBtm");
// make window draggable //
dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("notes"));
dragElement(document.getElementById("gallery"));
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
var notesScreen = document.querySelector("#notes");
var galleryScreen = document.querySelector("#gallery");
function closeWindow(el) {
    if (el) {
        el.classList.remove("active");
        el.style.display = "none";
        biggestIndex = biggestIndex - 1;
        el.style.zIndex = biggestIndex;
        if (el.id === "app") {
            bottomAppUnactive(app);
        } else if (el.id === "notes") {
            bottomAppUnactive(notes);
        }
         else if (el.id === "gallery") {
            bottomAppUnactive(gallery);
        }
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
     if (!el.classList.contains("active")) {
         el.classList.add("active");
         el.style.left = 50 + "%";
         el.style.top = 50 + "%";
         if (el.id === ("windowApp")) {
            COSTab.style.borderBottom = `2px black solid`;
         }
         console.log(el);
         if (el.id === "app") {
            bottomAppActive(app);
         } else if (el.id === "notes") {
            bottomAppActive(notes);
         } else if (el.id === "gallery") {
            bottomAppActive(gallery);
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
welcomeScreenClose.addEventListener("click", function() {
    closeWindow(welcomeScreen);
});
welcomeScreenOpen.addEventListener("click", function() {
     openWindow(welcomeScreen);
});
notesScreenOpen.addEventListener("click", () => 
    openWindow(notesScreen));

notesScreenClose.addEventListener("click", () => 
    closeWindow(notesScreen));
galleryScreenOpen.addEventListener("click", () => 
    openWindow(galleryScreen));

galleryScreenClose.addEventListener("click", () => 
 closeWindow(galleryScreen));
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
addWindowTapHandling(notesScreen);
addWindowTapHandling(galleryScreen);

function initializeIcon(name) {
    var icon = document.querySelector('#' + name + 'Icon');
    var screen = document.querySelector('#' + name);
    icon.addEventListener("click", () => handleIconTap(icon, screen));
}
//initializeIcon("notes");
console.log("notes");
// initializeIcon("gallery");

function initializeWindow(elName) {
    var screen = document.querySelector("#" + elName);
    addWindowTapHandling(screen);
    closeWindow(screen);
    dragElement(screen);
    if (elName != "window") {
        if (elName === "welcome") {

        } else {
            initializeIcon(elName);
        }
        
    }
}
initializeWindow("welcome");
initializeWindow("app");
initializeWindow("gallery");


let galleryImgs = [
    {"name": "cat", "path": "./images/cat.png"},
    {"name": "outside", "path": "./images/outside.png"},
]
let galleryImgEl = document.getElementById("galleryImgEl");
let prevImgBtn = document.getElementById("prevImg");
let nextImgBtn = document.getElementById("nextImg");
let imgIndex = 0;
let galleryImagePath = document.getElementById("galleryImagePath");
prevImgBtn.addEventListener("click", function() {
    console.log("red")
    imgIndex--;
    if(imgIndex<0){
        imgIndex=galleryImgs.length - 1;
    }
    // if (imgIndex > galleryImgs.length){
    //     imgIndex = 0;
    // } else {
    //     imgIndex -= 1;
    // }
    console.log(galleryImgs[0]["path"]);
    galleryImgEl.src = galleryImgs[imgIndex]["path"];
    galleryImagePath.textContent = galleryImgs[imgIndex]["path"];
});
nextImgBtn.addEventListener("click", function() {
    console.log("blue");
    imgIndex++;
    if(imgIndex>galleryImgs.length-1){
        imgIndex=0;
    }
    // if (imgIndex < galleryImgs.length){
    //     imgIndex = 0;
    // } else {
    //     imgIndex += 1;
    // }
    galleryImgEl.src = galleryImgs[imgIndex]["path"];
    galleryImagePath.textContent = galleryImgs[imgIndex]["path"];
});


function bottomAppActive(el) {
    if (el === app) {
        updatesIconBtm.classList.add("bottomActive");
        console.log("app");
    } else if (el === notes) {
        notesIconBtm.classList.add("bottomActive");
        console.log("notes");
    } else if (el === gallery) {
        galleryIconBtm.classList.add("bottomActive");
        console.log("gallery");
    }
}
function bottomAppUnactive(el) {
    if (el === app) {
        updatesIconBtm.classList.remove("bottomActive");
        console.log("app");
    } else if (el === notes) {
        notesIconBtm.classList.remove("bottomActive");
        console.log("notes");
    } else if (el === gallery) {
        galleryIconBtm.classList.remove("bottomActive");
        console.log("gallery");
    }
}