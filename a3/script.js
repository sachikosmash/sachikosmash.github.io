
// Below is the toggle to toggle active state change to open the vertical menu //
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

// const progressFill = 

menuToggle.addEventListener('click', function () {
menuToggle.classList.toggle('active');
showcase.classList.toggle('active');
})

document.addEventListener('DOMContentLoaded', function() {
    const videoElement = document.getElementById('mediaPlayer');
    const playPauseBtn = document.getElementById('play');
    const seekSlider = document.getElementById('seekSlider');
    const currentTimeDisplay = document.getElementById('currentTime');
    const durationDisplay = document.getElementById('duration');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeLevelDisplay = document.getElementById('volumeLevel');
    const muteBtn = document.getElementById('mute');

    let isPlaying = false;
    let loop = true;
    let lastSeekTime = 0;

    // Add event listeners
    playPauseBtn.addEventListener('click', togglePlayPause);
    seekSlider.addEventListener('input', updateSeekPosition);
    volumeSlider.addEventListener('input', updateVolume);
    muteBtn.addEventListener('click', toggleMute);

    // Initialize video element
    videoElement.addEventListener('loadedmetadata', function() {
        durationDisplay.textContent = formatTime(videoElement.duration);
        seekSlider.max = videoElement.duration;
        
    });
    
    videoElement.addEventListener('timeupdate', function() {
        seekSlider.value = videoElement.currentTime;
        currentTimeDisplay.textContent = formatTime(videoElement.currentTime);
    });

    // Toggle play/pause
    function togglePlayPause() {
        isPlaying = !isPlaying;
        if (isPlaying) {
            videoElement.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            videoElement.pause();
            playPauseBtn.textContent = 'Play';
        }
    }

    // Update seek position
    function updateSeekPosition() {
        const seekTime = (seekSlider.value / seekSlider.max) * videoElement.duration;
        videoElement.currentTime = seekTime;
        currentTimeDisplay.textContent = formatTime(seekTime);
    }

    // Update volume
    function updateVolume() {
        videoElement.volume = volumeSlider.value;
        volumeLevelDisplay.textContent = Math.round(videoElement.volume * 100) + '%';
    }

    // Toggle mute
    function toggleMute() {
        if (videoElement.muted) {
            videoElement.muted = false;
            muteBtn.classList.remove('pulse');
        } else {
            videoElement.muted = true;
            muteBtn.classList.add('pulse');
        }
    }

    // Format time
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
});

//media player interactives

// Get the video element
const myVideo = document.getElementById('myVideo');

// Define the timestamps for each button (in seconds)
const timeStamps = {
    'step-1-btn': 1, // Timestamp for "Incubation"
    'step-2-btn': 56, // Timestamp for "Static"
    'step-3-btn': 91, // Timestamp for "Ripple"
    'step-4-btn': 150, // Timestamp for "Aurora"
    'step-5-btn': 180, // Timestamp for "Fireworks"
    'step-6-btn': 206, // Timestamp for "The Swamp"
    'step-7-btn': 256, // Timestamp for "Particle World"
};

document.getElementById('step-1-btn').addEventListener('click', jumpToTime);
document.getElementById('step-2-btn').addEventListener('click', jumpToTime);
document.getElementById('step-3-btn').addEventListener('click', jumpToTime);
document.getElementById('step-4-btn').addEventListener('click', jumpToTime);
document.getElementById('step-5-btn').addEventListener('click', jumpToTime);
document.getElementById('step-6-btn').addEventListener('click', jumpToTime);
document.getElementById('step-7-btn').addEventListener('click', jumpToTime);

function jumpToTime(event) {
    const buttonId = event.target.id; // Get the ID of the clicked button
    const time = timeStamps[step-1-btn]; // Retrieve the corresponding timestamp
    if (time !== undefined) {
        myVideo.currentTime = 0.10; // Set the video's current time to the timestamp
        myVideo.play(); // Start playing the video from that time
    }

const step1Button = document.querySelector("#step-1-btn");
console.log(step1Button)
step1Button.addEventListener("click", gotoStep1); 

function gotoStep1() {
    myVideo.currentTime = 0.01;
    if (myVideo.paused) {
        myVideo.play();
    }
}

const step2Button = document.querySelector("#step-2-btn");
console.log(step2Button)
step1Button.addEventListener("click", gotoStep2); 

function gotoStep2() {
    myVideo.currentTime = 0.56;
    if (myVideo.paused) {
        myVideo.play();
    }
}

const step3Button = document.querySelector("#step-3-btn");
console.log(step3Button)
step1Button.addEventListener("click", gotoStep3); 

function gotoStep3() {
    myVideo.currentTime = 1.31;
    if (myVideo.paused) {
        myVideo.play();
    }
}

const step4Button = document.querySelector("#step-4-btn");
console.log(step4Button)
step1Button.addEventListener("click", gotoStep4); 

function gotoStep4() {
    myVideo.currentTime = 2.30;
    if (myVideo.paused) {
        myVideo.play();
    }
}

const step5Button = document.querySelector("#step-5-btn");
console.log(step5Button)
step1Button.addEventListener("click", gotoStep5); 

function gotoStep5() {
    myVideo.currentTime = 3.00;
    if (myVideo.paused) {
        myVideo.play();
    }
}

const step6Button = document.querySelector("#step-6-btn");
console.log(step6Button)
step1Button.addEventListener("click", gotoStep6); 

function gotoStep5() {
    myVideo.currentTime = 3.26;
    if (myVideo.paused) {
        myVideo.play();
    }
}

const step7Button = document.querySelector("#step-7-btn");
console.log(step7Button)
step1Button.addEventListener("click", gotoStep7); 

function gotoStep5() {
    myVideo.currentTime = 4.16;
    if (myVideo.paused) {
        myVideo.play();
    }
}}



// Simulate video playback
let currentTime = 0;
let duration = 60; // Adjust this value based on your actual video duration

function updateProgress() {
  const percentage = (currentTime / duration) * 100;
  console.log(percentage);
// progressFill.style.height = `${percentage}%`;

if (currentTime < duration) {
    requestAnimationFrame(updateProgress);
}
}

// Start the animation
updateProgress();

// Update progress bar as video plays
videoPlayer.addEventListener('timeupdate', () => {
currentTime = videoPlayer.currentTime;
  const newPercentage = (currentTime / duration) * 100;
// progressFill.style.height = `${newPercentage}%`;
});

// Handle scrubbing (dragging the progress bar)
let mousedown = false;

progressBar.addEventListener('mousedown', () => (mousedown = true));
progressBar.addEventListener('mousemove', (e) => {
if (!mousedown) return;
const rect = progressBar.getBoundingClientRect();
const x = e.clientX - rect.left;
  const percentage = (x / rect.width) * 100;
  videoPlayer.currentTime = (duration / 100) * percentage;
});
progressBar.addEventListener('mouseup', () => (mousedown = false));

// Add play/pause functionality
const playButton = document.createElement('button');
playButton.textContent = 'Play/Pause';
playButton.onclick = () => {
if (videoPlayer.paused || videoPlayer.ended) {
    videoPlayer.play();
} else {
    videoPlayer.pause();
}
};
videoContainer.appendChild(playButton);
