function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "yashi" && password == "yashi") {
        window.location.href = "mainPage/index.html"; 
        return false;
    } else {
        alert("Login failed");
    }
}

function link(){
    window.location.href = "https://www.linkedin.com/in/yashi-gupta-8b5201288/";
    return false;
}

var dropUpVisible = false;

function toggleDropUpOptions() {
    var dropUpOptions = document.getElementById("dropUpOptions");
    dropUpVisible = !dropUpVisible; 
    if (dropUpVisible) {
        dropUpOptions.classList.add("show-drop-up");
    } else {
        dropUpOptions.classList.remove("show-drop-up");
    }
}
var Searchbox = false;
function openSearchBox() {
    var upsearchbox = document.getElementById("find");
    Searchbox = !Searchbox;
    if (Searchbox) {
        upsearchbox.classList.add("show-search");

    }
    else {
        upsearchbox.classList.remove("show-search");

    }
}
var Notibox = false;
function openNotibox() {
    var upnotibox = document.getElementById("notification-box");
    Notibox = !Notibox;
    if (Notibox) {
        upnotibox.classList.add("show-notificaion");

    }
    else {
        upnotibox.classList.remove("show-notificaion");

    }
}
var postbox = false;
function opencreatebox() {
    var upbox = document.getElementById("create-post");
    postbox = !postbox;
    if (postbox) {
        upbox.classList.add("show-createbox");

    }
    else {
        upbox.classList.remove("show-createbox");

    }
}
function closecreate() {
    var upbox = document.getElementById("create-post");
    upbox.classList.remove("show-createbox");
}

function logout() {
    window.location.href = "../index.html";
    return false;
}