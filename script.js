
// Below is the toggle to toggle active state change to open the vertical menu //
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', function () {
menuToggle.classList.toggle('active');
showcase.classList.toggle('active');
})

//media player interactives
const step1Btn = document.querySelector("#step-1-btn");
console.log(step1Btn);
step1Btn.addEventListener("click", gotoStep1);

function gotoStep1() {
mediaPlayer.currentTime = 0.56;
} 
