var click = new Audio('audio/ui/minecraft_click.mp3')
var background_audio = new Audio('audio/background/Wii Fit - Get In Shape!.mp3');

document.addEventListener('mouseover', (event) => {
    background_audio.loop = true;
    background_audio.volume = 0.05;
    background_audio.play();
});

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

/* Filtering */

//role lists
let tanks = document.getElementsByClassName('tank');
let attacks = document.getElementsByClassName('attack');
let supports = document.getElementsByClassName('support');
//attribute lists
let coders = document.getElementsByClassName('coder');
let biotechs = document.getElementsByClassName('biotech');
let cybers = document.getElementsByClassName('cyber');

//filter button
let filter = document.getElementById('filter');
//role buttons

//attribute buttons


//role off/on
let tankSwitch = false;
let attackSwitch = false;
let supportSwitch = false;
//attribute  off/on
let coderSwitch = false;
let biotechSwitch = false;
let cyberSwitch = false;


filter.onclick = function(){
  if (!tankSwitch){

    if (!attackSwitch){
      for (let i = 0; i < attacks.length; i++) {
        attacks[i].style = 'display: none;';
      }
    }

    if (supportSwitch){
      for (let i = 0; i < supports.length; i++) {
        supports[i].style = 'display: none;';
      }
    }

    for (let i = 0; i < tanks.length; i++) {
      tanks[i].style = 'display: grid;';
    }

    console.log('Tanks only');
    tankSwitch = true;
  }
  else {
    if (!attackSwitch){
      for (let i = 0; i < attacks.length; i++) {
        attacks[i].style = 'display: grid;';
      }
    }

    if (!supportSwitch){
      for (let i = 0; i < supports.length; i++) {
        supports[i].style = 'display: grid;';
      }
    }

    console.log('Include other roles');
    tankSwitch = false;
  }

}


/* General css styling*/

for (let i = 0; i < coders.length; i++) {
  coders[i].children[0].style = 'border-color: rgb(0, 71, 171);';
}
for (let i = 0; i < biotechs.length; i++) {
  biotechs[i].children[0].style = 'border-color: rgb(8, 143, 143);';
}
for (let i = 0; i < cybers.length; i++) {
  cybers[i].children[0].style = 'border-color: rgb(255, 191, 0);';
}