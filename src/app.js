import Buildings from "./buildings.js";


let GAME_HEIGHT = 600;
let GAME_WIDTH = 900;
let canvas = document.getElementById("gamecanvas")


let skyscrapers = ['../assets/bluebuilding.png', '../assets/greenbuilding.png', '../assets/purplebuilding.png', '../assets/redbuilding.png', '../assets/stripebuilding.png', '../assets/yellowbuilding.png']
canvas.height = GAME_HEIGHT; 
canvas.width = GAME_WIDTH;

// canvas.setAttribute("style", "height: 100%; width: 100%;")
let layer0 = canvas.getContext("2d")
let ctx = canvas.getContext("2d");


var backgroundImage = new Image();
backgroundImage.onload = function () {  
layer0.drawImage(backgroundImage, 0, 0, 900, 600);
buildings.draw(ctx, skyscrapers);

};
backgroundImage.src = "../assets/backgroundgame.jpg";
// function loaded() {
//   // woo yey image loaded
// }

// if (img1.complete) {
//   loaded();
// }
// else {
//   ck.addEventListener('load', loaded);
// }

// img1.addEventListener('error', function() {
//   // argh everything's broken
// });



ctx.clearRect(0, 0, GAME_HEIGHT, GAME_WIDTH);

let buildings = new Buildings(GAME_WIDTH, GAME_HEIGHT);





