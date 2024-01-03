const img = document.getElementById("img-box")
const baseUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
var inputContent = document.querySelector("#input-box");
var content = "";

function generate(){
    content = inputContent.value;
    let apiUrl = baseUrl + content;
    img.src = apiUrl;
    img.style.display = "block";
}