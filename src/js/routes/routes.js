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
  showmenu.setAttribute("style", "display: block;  position: absolute; margin-top: -40vh; margin-left: 5vw; height: 50vh; width: 50vw; background-color: #F5440E;" )
  showmenu.appendChild(listitems);
}
}
const listitems = document.createElement("li");
const closebtn = document.createElement("span");
const homepage= document.createElement("a");
const ruoklink = document.createElement("a");
const completedpro = document.createElement("a");
const aboutdevin = document.createElement("a");
closebtn.innerText = "X";
homepage.innerText = "Home";
completedpro.innerText = "Completed Project";
aboutdevin.innerText = "About Me";
ruoklink.innerText = "R U OK"
closebtn.setAttribute("style", "display: block; background-color: #00000000;");
aboutdevin.setAttribute("style", "display: block; position: absolute; top: 35vh;");
aboutdevin.setAttribute("href", "../html/aboutme.html");
completedpro.setAttribute("style", "display: block; position: absolute; top: 25vh;");
completedpro.setAttribute("href", "../html/completeproj.html")
homepage.setAttribute("href", "../index.html");
homepage.setAttribute("style", "display: block; top: 15vh; position: absolute; width: 100%;");
ruoklink.setAttribute('style', 'display: block; position: absolute; top: 5vh;');
ruoklink.setAttribute('href', "../html/ruok.html")
listitems.setAttribute('style', "list-style: none; display: flex; flex-direction: column;");
listitems.appendChild(closebtn);
listitems.appendChild(ruoklink);
listitems.appendChild(homepage);
listitems.appendChild(completedpro);
listitems.appendChild(aboutdevin);

