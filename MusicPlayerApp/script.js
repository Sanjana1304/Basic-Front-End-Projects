
const body = document.getElementById("body");
const music_container = document.getElementById("music_container");

const progressContainer = document.getElementById("progress_container");
const progress = document.getElementById("progress");

const title = document.getElementById("title");
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");

const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");


const songs = ["Hukum","Kaavaalaa","Rathamaarey"];

const movies = [" (JAILER) "," (JAILER) "," (JAILER) "]
const bg_imgs = ['linear-gradient(0deg, rgba(247, 247, 247, 1) 23.8%, rgb(166, 76, 7) 92%)','linear-gradient(0deg, rgba(247, 255, 247, 1) 23.8%, rgb(255, 255, 0) 92%)','linear-gradient(0deg, rgba(255, 247, 247, 1) 23.8%, rgb(247, 0, 0) 92%)'];
songIndex = 0;

loadSong(songs[songIndex],songIndex);

function loadSong(song,sgInd) {
    title.innerText = song+movies[sgInd];
    audio.src = `songs/${song}.mp3`;
    cover.src = `img/${song}.jpg`;
    body.style.backgroundImage = bg_imgs[sgInd%3];
}

function playSong() {
    music_container.classList.add("play");
    playBtn.querySelector("i.fa").classList.remove("fa-play");
    playBtn.querySelector("i.fa").classList.add("fa-pause");
    audio.play();
}

function  pauseSong() {
    music_container.classList.remove("play");
    playBtn.querySelector("i.fa").classList.remove("fa-pause");
    playBtn.querySelector("i.fa").classList.add("fa-play");
    audio.pause();
    
}

playBtn.addEventListener("click",function() {
    const isPlaying = music_container.classList.contains("play");
    if (isPlaying) {
        pauseSong();
    }
    else{
        playSong();
    }
});

function nextSong() {
    songIndex++;
    if (songIndex>=songs.length) {
        songIndex=0;
    }
    loadSong(songs[songIndex],songIndex);
    playSong();
}

function prevSong() {
    songIndex--;
    if (songIndex<0) {
        songIndex=songs.length-1;
    }
    loadSong(songs[songIndex],songIndex);
    playSong();

}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPerCent = (currentTime / duration) * 100;
    progress.style.width = `${progressPerCent}%`;
}
    // Set Progress
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}
prevBtn.addEventListener("click",prevSong);
nextBtn.addEventListener("click",nextSong);


audio.addEventListener("timeupdate", updateProgress);
// Click On progress Bar
progressContainer.addEventListener("click", setProgress);

audio.addEventListener("ended",nextSong);

const volDec = document.getElementById("volDec");
const volInc = document.getElementById("volInc");

initialVol = 1;
volInc.addEventListener("click",function(){
    if (initialVol>=0 && initialVol<=0.8) {
        audio.volume = initialVol+0.2;
        initialVol = initialVol+0.2;
    }
});

volDec.addEventListener("click",function(){
    if (initialVol>=0.2) {
        audio.volume = initialVol-0.2;
        initialVol = initialVol-0.2;
    }
});