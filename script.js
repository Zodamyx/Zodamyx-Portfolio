let now_playing = document.quarySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.quarySelector('.track_name');

let playpause_btn = document.quarySelector('.playpause-track');
let next_btn = document.quarySelector('.next-track');
let prev_btn = document.quarySelector('.prev_track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.quarySelector('.volume_slider');
let curr_time = document.quarySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('.wave')
let curr_track = document.createElement('.audio');

let track_index = 0;
let isplaying = false;
let updateTimer;

const music_list = [
    {
        img : 'Images/R4iny.jpg',
        name : 'Chi11_R4iny_D4y.wav',
        music : 'Audio/Chi11_R4iny_D4y.mp3',
    },
    {
        img : 'Images/Living District.jpg',
        name : 'Eerie, Empty Home with Eyes',
        music : 'Audio/Eerie, Empty Home with Eyes.mp3',
    },
    {
        img : 'Images/Living District.jpg',
        name : 'Living District',
        music : 'Audio/Living District.mp3',
    },
    {
        img : 'Images/Living District.jpg',
        name : 'Wait and Chill Zone',
        music : 'Audio/Wait and Chill Zone.mp3',
    },
    {
        img : 'Images/Crinis.jpg',
        name : 'Crinis Theme',
        music : 'Audio/CrinisTheme.mp3',
    },
    {
        img : 'Images/Large_Cockroach.jpg',
        name : 'Space Cockroach Theme',
        music : 'Audio/Space Cockaroach theme.mp3',
    },
    {
        img : 'Images/Di9it41_Sp4c3_Cover.jpg',
        name : 'Di9it41_Sp4c3.wav',
        music : 'Audio/Di9it41_Sp4c3.mp3',
    },
    {
        img : 'Images/MeiKai_R0cky_Drink.jpg',
        name : 'R0cky_Drink3r.wav',
        music : 'Audio/R0cky_Drink3r.mp3',
    },
];

loadTrack(track_index);

function loadTrack(track_index) {
    clearInterval(updateTimer);
    resizeTo();

    curr_time src = music_list [track_index].music;
    curr_track.load();

    track_art.computedStyleMap.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    now_playing.textConent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000)

    curr_track.addEventListener('ended', nextTrack);
}

function playpauseTrack() {
    isplaying ? pauseTrack() : playTrack();
}

function playTrack() {
    curr_track.play();
    isplaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="Image/PauseButton';
}