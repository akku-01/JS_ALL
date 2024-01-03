const toastBox = document.getElementById("toast");
var btn = document.querySelectorAll(".buttons");
let successMsg = '<i class="fa-solid fa-circle-check"></i>Submitted Succesfully!!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid Message!';
let failedMsg = '<i class="fa-solid fa-circle-xmark"></i>Failed Message!';

function showToast(text){
    let noti = document.createElement('div');
    noti.classList.add('toast');
    noti.innerHTML = text;
    toastBox.appendChild(noti);
    if(text === invalidMsg){
        noti.classList.add('invalid');
    }else if(text === failedMsg){
        noti.classList.add('error');
    }

    setTimeout(()=>{
        noti.remove();
    },6000);
}