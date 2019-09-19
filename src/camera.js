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
cameraView = document.querySelector("#camera--view"),
      cameraOutput = document.querySelector("#camera--output"),
      cameraSensor = document.querySelector("#camera--sensor"),

cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
};