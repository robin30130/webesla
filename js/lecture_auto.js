document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const tracks = document.querySelectorAll('.collection-item a');
    let currentTrack = 0;

    tracks.forEach((track, index) => {
        track.addEventListener('click', function(e) {
            e.preventDefault();
            currentTrack = index;
            playTrack(track);
        });
    });

    audioPlayer.addEventListener('ended', function() {
        currentTrack = (currentTrack + 1) % tracks.length;
        playTrack(tracks[currentTrack]);
    });

    function playTrack(track) {
        audioPlayer.src = track.getAttribute('data-src');
        audioPlayer.play();
    }
});
