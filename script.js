// script.js
document.addEventListener('DOMContentLoaded', function() {
    const videoContainers = document.querySelectorAll('.video-container');

    videoContainers.forEach(container => {
        const video = container.querySelector('video');
        video.addEventListener('play', function() {
            videoContainers.forEach(otherContainer => {
                const otherVideo = otherContainer.querySelector('video');
                if (otherVideo !== video) {
                    otherVideo.pause();
                }
            });
        });
    });
});