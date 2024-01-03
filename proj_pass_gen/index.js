const passwordbox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const special_chars = "!@#$%^&*()-_+=<>?/{}[]|";

const whole_set = upperCase + lowerCase + numbers + special_chars;

let len = whole_set.length;
let rand_int = 0;

generate.addEventListener('click', ()=>{
    document.querySelector(".copied").style.display = "none";
    document.querySelector("#img").style.display = "block";
    let str = "";
    for(let i=0;i<length;i++){
        rand_int = Math.round(Math.random()*(len-1));
        str += whole_set[rand_int];
    }
    passwordbox.value = `${str}`;
})
function copy(){
    let val = passwordbox.value;
    navigator.clipboard.writeText(val);
    document.querySelector(".copied").style.display = "block";
    document.querySelector("#img").style.display = "none";

}