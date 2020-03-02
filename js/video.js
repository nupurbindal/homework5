var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
    video.play();
    console.log("Play Video");
} 

function pauseVid() {
    video.pause();
    console.log("Pause Video");
}

function decreaseSpeed() {
    video.playbackRate = video.playbackRate - 0.2*video.playbackRate;
    console.log("Speed is " + video.playbackRate)
}

function increaseSpeed() {
    video.playbackRate = video.playbackRate + 0.25*video.playbackRate;
    console.log("Speed is " + video.playbackRate)
}

function mute() {

    if (video.muted == true) {
        video.muted = false;
        console.log("Unmuted")
        document.getElementById('mute').innerHTML = "Mute";
    }

    else {
        video.muted = true;
        console.log("Muted");
        document.getElementById('mute').innerHTML = "Unmute";
    }

}

function changeVolume() {
    var volume = document.querySelector("#volumeSlider").value/100;
    video.volume = volume;
    console.log("Volume is " + volume * 100);
    document.querySelector("#volume").innerHTML = volume*100 + "%";
}


function gray() { 
console.log("In grayscale")
video.classList.add("grayscale");
}

function color() {
console.log("In color") 
video.classList.remove("grayscale");
}

function skipAhead() {
    duration = video.duration;
    current = video.currentTime;
    console.log(duration);
    console.log(current);
    
    if (current + 60 < duration) {
        video.currentTime = current + 60;
        video.play();
    }
    
    else {
        video.currentTime = 0;
        video.playbackRate = 1;
        video.play();
    }
}