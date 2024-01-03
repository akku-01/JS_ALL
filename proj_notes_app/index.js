const createNotes = document.querySelector('.create_btn');
var notesContainer = document.querySelector('.notes-container');
let notes = document.querySelectorAll('.input-box');
// let notes_node = document.getElementsByClassName(".input-box")
// console.log(para);

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createNotes.addEventListener('click',()=>{
    // console.log("click hua");
    // const container = para;
    // container.className = "notes_container";
    // console.log(container);
    // notes_containers.appendChild(container);
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    // console.log(notesContainer);
    notesContainer.appendChild(inputBox).appendChild(img);
})
// const deleteit = document.querySelector("#deleteit");

notesContainer.addEventListener('click',function(e){
     if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
     }else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(notes =>{
            notes.onkeyup = function(){
                updateStorage();
            }
        })
     }
});
// console.log(deleteit);
document.addEventListener("keydown",event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})