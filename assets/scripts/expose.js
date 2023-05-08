let pic = document.querySelector('#expose img');
let select = document.querySelector('#horn-select');

select.addEventListener('change', () => {
  pic.src = `assets/images/${select.value}.svg`;
  pic.alt = `${select.value} image`;
});

let btn = document.querySelector('button');
let audio = document.querySelector('audio');
let jsConfetti = new JSConfetti();

select.addEventListener('change', () => {
  audio.src = `assets/audio/${select.value}.mp3`;
});
btn.addEventListener('click', () => {
  audio.play();
  if(select.value == 'party-horn'){
    jsConfetti.addConfetti();
  }
});

let vol = document.querySelector('#volume-controls input');
let volImg = document.querySelector('#volume-controls img');

vol.addEventListener('input', () => {
  let volNum = vol.value;
  audio.volume = volNum / 100;
  if(volNum == 0){
    volImg.src = 'assets/icons/volume-level-0.svg';
  } else if(volNum >= 1 && volNum <= 33){
    volImg.src = 'assets/icons/volume-level-1.svg';
  } else if(volNum >= 34 && volNum <= 66){
    volImg.src = 'assets/icons/volume-level-2.svg';
  } else {
    volImg.src = 'assets/icons/volume-level-3.svg';
  }
});