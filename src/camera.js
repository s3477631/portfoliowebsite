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
const cameraSensor = document.createElement("canvas")
        cameraSensor.setAttribute("id", "canvas");
const imagescaptured = []
// const cameraSensor = document.querySelector("#camera--sensor")

cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    imagescaptured.push(cameraSensor.toDataURL("image/webp"));
    console.log(imagescaptured)
};

//  showimage.onclick = function() {
//      cameraoutput.src = imagescaptured[0]
//  }
 var counter = 0;
window.addEventListener('devicemotion', function(event){
    var motioned = event.acceleration.z;
    var movement = Math.round(motioned * 1000);
    // document.getElementById("rawdata").innerText = movement
    if(movement > 3000){
    //   document.getElementById("indicator").innerText = 'back';
        cameraoutput.src = imagescaptured[counter]
        counter--
    document.getElementById('noimages').innerText = counter
    }
    else if (movement < -3000){
        cameraoutput.src = imagescaptured[counter]
    //   document.getElementById("indicator").innerText = 'forward'
            counter++
    document.getElementById('noimages').innerText = counter
    }
    else {
        // document.getElementById("indicator").innerText = 'stationary'
    }
  
  });

  function doSomething(scroll_pos){
      console.log(scroll_pos)
  }
  
let ticking = false;
window.addEventListener('scroll', function(e){
  last_known = window.scrollY;
  console.log(window)
if (!ticking) {
window.requestAnimationFrame(function() {
  doSomething(last_known);
  ticking = false;
});

ticking = true;
}
});