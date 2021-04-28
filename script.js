const musiccontainer = document.querySelector('.msuic-container')
const plasyBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')
const songs = ['hey', 'summer', ukulele]
let songIndex = 2
loadSong(songs(songIndex))

function loadSong(songs)
title.innerText = songs
audio.src = 'music/${songs}.mp3'