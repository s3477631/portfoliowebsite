function gamepage(){
  return  window.location.href='./gamepage.html'
}
function aboutme(){
    return  window.location.href='./html/aboutme.html'
  }
function workingprojects(){
    return  window.location.href='./html/ruok.html'
  }
function startpage(){
    return  window.location.href='./html/index.html'
}

function blogpost(){
    return window.location.href='./html/blogpost.html'
}

function completedprojects(){
  return window.location.href='./html/completeproj.html'
}

function opencamera(){
  document.body.requestFullscreen();
  return window.location.href='./ruokcamera.html'
}

function mobilemenu() {
var showmenu = document.getElementById("pop_out_menu");
 if(showmenu.style.display.block = true){
  showmenu.setAttribute("style", "display: block;  position: absolute; margin-top: -40vh; margin-left: 5vw; height: 50vh; width: 50vw; background: #bbb;" )
  showmenu.appendChild(listitems);
}
}
const listitems = document.createElement("li");
const closebtn = document.createElement("span");
const homepage= document.createElement("a");
const completedpro = document.createElement("a");
const aboutdevin = document.createElement("a");
closebtn.innerText = "X";
homepage.innerText = "Home";
completedpro.innerText = "Completed Project";
aboutdevin.innerText = "About Me";
closebtn.setAttribute("style", "display: block; background-color: #00000000;");
closebtn.setAttribute("onclick", "closemenu()");
aboutdevin.setAttribute("style", "display: block; position: absolute; top: 30vh;");
aboutdevin.setAttribute("href", "../html/aboutme.html");
completedpro.setAttribute("style", "display: block; position: absolute; top: 20vh;");
completedpro.setAttribute("href", "../html/completeproj.html")
homepage.setAttribute("href", "../index.html");
homepage.setAttribute("style", "display: block; background-color: blue; top: 10vh; position: absolute; width: 100%;");
listitems.setAttribute('style', "list-style: none; display: flex; flex-direction: column;");
listitems.appendChild(closebtn);
listitems.appendChild(homepage);
listitems.appendChild(completedpro);
listitems.appendChild(aboutdevin);


function closemenu() {
  document.getElementById("pop_out_menu").setAttribute("style", "display: none");
}