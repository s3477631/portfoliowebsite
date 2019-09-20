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
const show = document.querySelector("#showimage")
const imageoutput = document.createElement("img");
const cameraSensor = document.createElement("canvas")
        cameraSensor.setAttribute("id", "canvas");
const imagescaptured = []
var counter = 0;
// const cameraSensor = document.querySelector("#camera--sensor")

cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    imagescaptured.push(cameraSensor.toDataURL("image/webp"));
    console.log(imagescaptured)
};

 showimage.onclick = function() {
     cameraoutput.src = imagescaptured[0]
 }
window.addEventListener('devicemotion', function(event){
    var motioned = event.acceleration.z;
    var movement = Math.round(motioned * 1000);

    document.getElementById("rawdata").innerText = movement
    if(movement > 3000){
    //   document.getElementById("indicator").innerText = 'back';
        if(counter == imagescaptured.length){
            this.cameraoutput.src = imagescaptured[counter]
            counter--
        }     
        else {
            this.cameraoutput.src = imagescaptured[counter]
            counter++
        }

    }
    else if (movement < -3000){
        cameraoutput.src = imagescaptured[counter]
    //   document.getElementById("indicator").innerText = 'forward'
         if(counter == imagescaptured.length){
            this.cameraoutput.src = imagescaptured[counter]
            counter--
        }     
        else {
            this.cameraoutput.src = imagescaptured[counter]
            counter++
        }
    }
    else {
        // document.getElementById("indicator").innerText = 'stationary'
    }
  
  });