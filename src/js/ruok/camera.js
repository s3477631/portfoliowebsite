let constrainObj = {
    audio: false, 
    video: {
        facingMode: "user", 
        width: { min: 640, ideal: 1280, max: 1920},
        height: { min: 480, ideal: 720, max: 1080}
    }
}
navigator.mediaDevices.getUserMedia(constrainObj)
.then(function(mediaStreamObj){
    let video = document.querySelector('video'); 
    if("srcObject" in video){
        video.srcObject = mediaStreamObj;
    }
    else {
        video.src = window.URL.createObjectURL(mediaStreamObj);
    }
    video.onloadeddata = function(ev){
        video.play()
    }
})


const cameraTrigger = document.querySelector("#camera--trigger")
const cameraView = document.querySelector("#camera--view")
const cameraoutput = document.querySelector("#camera--output")
const imageoutput = document.createElement("img");
const filterimage = document.createElement("img"); 
filterimage.setAttribute("src", '../assets/working_project/ruok/filter.png')
const cameraSensor = document.createElement("canvas")
cameraSensor.setAttribute("id", "canvas");
const fontlayer = cameraSensor.getContext("2d");
fontlayer.font= "100px Arial;"
const imagescaptured = []
// const cameraSensor = document.querySelector("#camera--sensor")
setTimeout(function(){
    setInterval(function(){ 
        document.body.requestFullscreen();
        cameraSensor.width = cameraView.videoWidth;
        cameraSensor.height = cameraView.videoHeight;
        cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
        imagescaptured.push(cameraSensor.toDataURL("image/webp"));     
        console.log(imagescaptured)
         }, 2000);
}, 2000);
 var counter = 0;
window.addEventListener('devicemotion', function(event){
    var motioned = event.acceleration.z;
    var movement = Math.round(motioned * 1000);
    if(movement > 3000){
    //   document.getElementById("indicator").innerText = 'back';
    cameraTrigger.style.display = "none";
        cameraoutput.src = imagescaptured[counter]
    document.getElementById('noimages').innerText = counter
    if(counter < imagescaptured.length && counter >= 0){
        counter++
        }
        else {
            counter = 0
        }
   
    }
    else if (movement < -3000){
        cameraoutput.src = imagescaptured[counter]
    //   document.getElementById("indicator").innerText = 'forward'
    document.getElementById('noimages').innerText = counter
         
        if(counter < imagescaptured.length && counter >= 0){
        counter++
        cameraTrigger.style.display = "none";
        }
        else {
            counter = 0
        }

    }
  });

  function doSomething(scroll_pos){
    //   cameraoutput.src = imagescaptured[scroll_pos]
    console.log(scroll_pos);
  }
  
let ticking = false;
window.addEventListener('scroll', function(e){
  last_known = window.scroll;
//   console.log(window)
if (!ticking) {
window.requestAnimationFrame(function() {
  doSomething(last_known);
  ticking = false;
});

ticking = true;
}
});