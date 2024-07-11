//3 components whih are needed to be modified
title = document.getElementById("title");
audio = document.getElementById("audio");
cover = document.getElementById("cover");

//3 buttons
playBtn = document.getElementById("play");
prevBtn = document.getElementById("prev");
nextBtn = document.getElementById("next");


music_container = document.getElementById("music_container");

const songs = ['Hukum','Kaavaalaa','Rathamaarey'];

songIndex = 0;

// functions: playSong() , pauseSong(), nextSong(), prevSong(), loadSong();


function loadSong(song) {
    title.innerText = song;
    audio.src = `songs/${song}.mp3`; //$ symbol is used to put/include a variable in a string
    cover.src = `img/${song}.jpg`;
}

loadSong(songs[songIndex]); //songs[0]

function playSong() {
    music_container.classList.add("play"); // to rotate the image and display the title
    playBtn.querySelector("i.fa").classList.remove("fa-play");
    playBtn.querySelector("i.fa").classList.add("fa-pause");
    audio.play(); //built-in func to play the audio which is loaded using loadSong() function
}

function pauseSong() {
    music_container.classList.remove("play");
    playBtn.querySelector("i.fa").classList.remove("fa-pause");
    playBtn.querySelector("i.fa").classList.add("fa-play");
    audio.pause(); //built-in func to pause the audio which is loaded using loadSong() function
}

playBtn.addEventListener("click",function() {
    x = music_container.classList.contains("play"); //check whether the play class is active or not.
    if (x) { //if it is active, the button will work as pause
        pauseSong();
    }
    else{
        playSong();
    }
});

function nextSong() {
    songIndex = songIndex+1;
    if (songIndex>=songs.length) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function prevSong(){
    songIndex--;
    if (songIndex<0) {
        songIndex = songs.length-1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

nextBtn.addEventListener("click",function(){
    nextSong();
});

prevBtn.addEventListener("click",function(){
    prevSong();
})







