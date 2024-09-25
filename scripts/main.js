// Function to generate a random hexadecimal color code
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


let maincolorbox = document.getElementById('color-box');

let clickchanger = document.getElementById("change-color-btn");
clickchanger.addEventListener('click', () =>{
    maincolorbox.style.backgroundColor = getRandomColor();
});

