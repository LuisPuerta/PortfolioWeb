let menuVisible = false;
//Show/hide menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    // Hiding nav once an option is selected
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Greetings API
const greetings = document.querySelector('#greetings')
const API_URL = "https://www.greetingsapi.com/random";

window.addEventListener('DOMContentLoaded', loadAPI)

function loadAPI(){
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        greetings.innerHTML = `${data.greeting}!`;
        greetings.setAttribute("title", `Hello in ${data.language}, click for more!`)
    })
}

//Fixing "To be continued" in portfolio
const project = document.querySelector('.proyecto');
const tbc = document.querySelector('.tbc');

window.addEventListener('DOMContentLoaded', fixTBC)
window.addEventListener('resize', fixTBC)

function fixTBC(){
    tbc.setAttribute("style", `width:${project.clientWidth}px; height:${project.clientHeight}px`)
    console.log('ey')
}
