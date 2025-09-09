let navbar = document.getElementById("navbar");
let frame = document.getElementById("app-frame");
let titlelabel = document.getElementById("app-title-holder");
let closebtn = document.getElementById("closebtn");
let inputarea = document.getElementById("inputform");
let newuser = document.getElementById("newuser");
let username = localStorage.getItem("username");
let usernameInput = document.getElementById("usernameinput");
let homescreen = document.getElementById("homescreen");
let homescreentitle = document.getElementById("homescreen-title");
if( username != null ){
    newuser.style.display = "none";
    navbar.style.right = "0px";
    homescreen.style.display = "flex";
    homescreentitle.textContent = "Hi, " + username;
}
else{
    newuser.style.display = "block";
    homescreen.style.display = "none";
    navbar.style.right = "100px";
    inputform.addEventListener("submit", function(event) {
    localStorage.setItem("username", usernameInput.value);
    });
}
function openapp(title,url){
    homescreen.style.display = "none";
    titlelabel.textContent = title;
    closebtn.style.display = "block";
    frame.style.height = "100%";
    frame.style.width = "100%";
    frame.src = "";
    frame.src = url;
}
function closeapp(){
    titlelabel.textContent = "";
    closebtn.style.display = "none";
    frame.style.height = "0px";
    frame.style.width = "0px";
    frame.src = "";
    homescreen.style.display = "flex";
}
function logout(){
    localStorage.removeItem("username");
    window.location.reload();
}