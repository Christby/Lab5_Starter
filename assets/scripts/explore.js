let btn = document.querySelector('button');
let text = document.querySelector('#text-to-speak');
let voice = document.querySelector('#voice-select');
let img = document.querySelector('img');

let synth = window.speechSynthesis;
let voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    let option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voice.appendChild(option);
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

btn.addEventListener('click', () => {
  let utterThis = new SpeechSynthesisUtterance(text.value);
  let selectedOption = voice.selectedOptions[0].getAttribute('data-name');
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  synth.speak(utterThis);
  img.src = `assets/images/smiling-open.png`;
  utterThis.addEventListener('end', () => {
    img.src = `assets/images/smiling.png`;
  });
});