window.playSound = (elementId) => {
    const audio = document.getElementById(elementId);
    if (audio) {
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