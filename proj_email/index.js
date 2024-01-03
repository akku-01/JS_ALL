const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
const scriptURL = 'https://script.google.com/macros/s/AKfycbyl5sGEEKqOFMzhtz12pdsbdFKvp4QKmY2owd8jYwrd0Dx8g4fDoLib13cBGdQVZFMNRA/exec'
const span = document.getElementById('span');

form.addEventListener('submit', e => {
    submitButton.disabled = true
    e.preventDefault()
    let requestBody = new FormData(form)
    fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
        console.log("Success");
        submitButton.disabled = false
        })
    .catch(error => {
    alert('Error!', error.message)
        submitButton.disabled = false

    }
    )
    span.style.display = "block";
    setTimeout(()=>{
        span.style.display = "none";
    },5000);
})
// setTimeout(()=>{
//     span.style.display = "block";
// },5000);
// span.style.display = "none";
