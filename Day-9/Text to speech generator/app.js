const listenBtn = document.querySelector("#listen-btn");
const voiceSelect = document.querySelector("#language");
const speechInput = document.querySelector("#speech-input");

let voices = [];
let speech = new SpeechSynthesisUtterance();

const populateVoices = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach((voice, i) => {
    voiceSelect.options[i] = new Option(voice.name, i);
  });
};

const changeVoice = () => {
  speech.voice = voices[voiceSelect.value];
};

const startTextToSpeech = () => {
  const inputValue = speechInput.value;
  console.log(inputValue);
  speech.text = inputValue;
  window.speechSynthesis.speak(speech);
};

window.speechSynthesis.onvoiceschanged = populateVoices;

const handleEvents = () => {
  voiceSelect.addEventListener("change", changeVoice);
  listenBtn.addEventListener("click", startTextToSpeech);
};

handleEvents();
