const synth = window.speechSynthesis;

let textarea = document.querySelector("textarea");
let voiceselect = document.querySelector("select");
let btn = document.querySelector("button");

let voices;

synth.onvoiceschanged = ()=>{
    // voiceselect.innerHTML = '';
    voices = synth.getVoices();
    for(let i=0;i<voices.length;i++){
        let elem = document.createElement('option');
        elem.textContent = `${voices[i].name} (${voices[i].lang})`;
        elem.value = i;
        voiceselect.appendChild(elem);
        // console.log(voices[i]);
    }
};
let speech = new SpeechSynthesisUtterance();
// voiceselect.addEventListener("change",()=>{
//     speech.voice = voices[voiceselect.value]
// })


console.log(voiceselect.value);
btn.addEventListener('click',()=>{
    speech.text = textarea.value;
    speech.voice = voices[voiceselect.value]
    synth.speak(speech);
});
// console.log(btn);
// console.log(speech.voice);