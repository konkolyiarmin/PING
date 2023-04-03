const audio = new Audio('relax.mp3'); 
const playBtn = document.getElementById('playBtn');
let isPlaying = false;

playBtn.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    playBtn.innerHTML = 'Click to play music';
  } else {
    audio.play();
    playBtn.innerHTML = 'Click to stop music';
  }
  isPlaying = !isPlaying;
});
