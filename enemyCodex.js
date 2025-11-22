const background_audio = new Audio('audio/background/Xploshi - New You.mp3');
//Looping music
document.addEventListener('mouseover', (event) => {
    background_audio.loop = true;
    background_audio.volume = 0.05;
    background_audio.play();
});
//Starting.pausing music when in/out of tab
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    background_audio.pause();
  } else {
    background_audio.play()
  }
});

/* Linking Pages*/
let exit = document.getElementById('exit');

exit.onclick = function (){
  window.location.href = ("https://alexioprado.github.io/Boohbah_TheLastHope/");
}



let boohbahs = document.getElementsByClassName('boohbah');
let teachers = document.getElementsByClassName('teacher');
let magical = document.getElementsByClassName('magical');

/* General css styling*/
for (let i = 0; i < boohbahs.length; i++) {
  boohbahs[i].children[0].style = 'border-color: rgba(255, 199, 199, 1);';
}
for (let i = 0; i < teachers.length; i++) {
  teachers[i].children[0].style = 'border-color: rgb(255, 93, 143);';
}
for (let i = 0; i < magical.length; i++) {
  magical[i].children[0].style = 'border-color: rgb(189, 224, 254);';
}