const popupBtn = document.getElementsByClassName('popup');
const submitted = document.getElementsByClassName('btn');

// console.log(popup[0]);
// console.log(submit[0]);

function submit(){
    submitted[0].style.display = "none";
    // popupBtn[0].style.display = "block";
    popupBtn[0].classList.add("open-popup");
}
function ok(){
    submitted[0].style.display = "block";
    popupBtn[0].classList.remove("open-popup");
}