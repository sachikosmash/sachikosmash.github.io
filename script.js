
// Below is the toggle to toggle active state change to open the vertical menu //
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', function () {
menuToggle.classList.toggle('active');
showcase.classList.toggle('active');
})

const videoList = [
    { name: "Modal", link: "modal.mp4" },
];

{
    myVideo.pause(); // Pause the video before changing source
    console.log(videoList[0].link);
    myVideo.src = videoList[0].link;
    myVideo.load(); // Load the new source
    myVideo.play(); // Play the video
}

let loop = true;

//media player interactives
const myVideo = document.querySelector("#my-video");
const videoName = document.querySelector("#video-name");
const videoTime = document.querySelector("#video-time");
const progressBar = document.querySelector("#progress-bar-fill");

const step1Button = document.querySelector("#Incubation");
console.log(step1Button)
step1Button.addEventListener("click", gotoStep1); 

function gotoStep1() {
    myVideo.currentTime = 0.01;
    if (myVideo.paused) {
        myVideo.play();
    }
}

const step2Button = document.querySelector("#Static");
console.log(step2Button)
step1Button.addEventListener("click", gotoStep2); 

function gotoStep2() {
    myVideo.currentTime = 0.56;
    if (myVideo.paused) {
        myVideo.play();
    }
}

const step3Button = document.querySelector("#Ripple");
console.log(step3Button)
step1Button.addEventListener("click", gotoStep3); 

function gotoStep3() {
    myVideo.currentTime = 1.31;
    if (myVideo.paused) {
        myVideo.play();
    }
}

const step4Button = document.querySelector("#Aurora");
console.log(step4Button)
step1Button.addEventListener("click", gotoStep4); 

function gotoStep4() {
    myVideo.currentTime = 2.30;
    if (myVideo.paused) {
        myVideo.play();
    }
}

const step5Button = document.querySelector("#Fireworks");
console.log(step5Button)
step1Button.addEventListener("click", gotoStep5); 

function gotoStep5() {
    myVideo.currentTime = 2.30;
    if (myVideo.paused) {
        myVideo.play();
    }
}

const step6Button = document.querySelector("#Swamp");
console.log(step6Button)
step1Button.addEventListener("click", gotoStep6); 

const step7Button = document.querySelector("#Particle");
console.log(step7Button)
step1Button.addEventListener("click", gotoStep7); 