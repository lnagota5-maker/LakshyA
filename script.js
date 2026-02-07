// script.js

// Functionality for the "Evil No Button"
function evilNoButton() {
    alert("No! You shouldn't do that!");
    playMusic();
}

// Function to play music
function playMusic() {
    var audio = new Audio('path_to_your_music.mp3'); // Please replace with actual music path
    audio.play();
}

// Attaching the evilNoButton function to some button click event
document.getElementById('evilNoBtn').onclick = evilNoButton;