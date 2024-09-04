window.playSound = (elementId, volume = 1.0) => {
    const audio = document.getElementById(elementId);
    if (audio) {
        audio.volume = volume;
        audio.play();
    }
};
window.stopSound = (elementId) => {
    const audio = document.getElementById(elementId);
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
};
