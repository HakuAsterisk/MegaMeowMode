window.playSound = (elementId) => {
    const audio = document.getElementById(elementId);
    if (audio) {
        audio.play();
    }
};