const text = document.getElementById("displayText");
const video = document.getElementById("theVideo");
const muteButton = document.getElementById("muteButton");

function toggleMute() {
    video.muted = !video.muted;

    muteButton.textContent = video.muted ? "Unmute Audio" : "Mute Audio";
}

window.addEventListener("load", () => {
    const currentTime = Math.floor(Date.now() / 1000);
    video.currentTime = (currentTime % video.duration);
});

function animate(timestamp) {
    const target = new Date("2026-11-10T09:00:00").getTime();

    const remaining = Math.max(0, target - Date.now());

    const totalHours = Math.floor(remaining / (1000 * 60 * 60)).toString().padStart(3, '0');
    const minutes = Math.floor((remaining / (1000 * 60)) % 60).toString().padStart(2, '0');
    const seconds = Math.floor((remaining / 1000) % 60).toString().padStart(2, '0');
    const milliseconds = (remaining % 1000).toString().padStart(3, '0');

    text.innerHTML = `TIME REMAINING <br>${totalHours}:${minutes}:${seconds}.${milliseconds}`

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
