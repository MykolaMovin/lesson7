// Practical task 1
let newWindow = window.open("", "", "width = 300 height = 300");
window.setTimeout(() => newWindow.resizeTo(500, 500), 2000);
window.setTimeout(() => newWindow.moveTo(200,200), 4000);
window.setTimeout(() => newWindow.close(), 6000);

// Practical task 2
let textElement = document.querySelector("#text");

function changeCSS(element) {
    element.addEventListener("click", () => {
        element.style.color = 'orange';
        element.style.fontSize = '20px';
        element.style.fontFamily = 'Comic Sans MS';
    });
};

// Practical task 3
document.getElementById("button1")
    .addEventListener("click", () => document.body.style.backgroundColor = 'blue');
document.getElementById("button2")
    .addEventListener("dblclick", () => document.body.style.backgroundColor = 'pink');
document.getElementById("button3")
    .addEventListener("mousedown", () => document.body.style.backgroundColor = 'brown');
document.getElementById("button3")
    .addEventListener("mouseup", () => document.body.style.backgroundColor = 'white');
document.querySelector('#link')
    .addEventListener("mouseover", () => document.body.style.backgroundColor = 'yellow');
document.querySelector('#link')
    .addEventListener("mouseout", () => document.body.style.backgroundColor = 'white');

// Practical task 4
const dropdown = document.getElementById("dropdown");
document.getElementById("button4")
    .addEventListener("click", () => removeDropdownElement(dropdown));

function removeDropdownElement(dropdown) {
    let value = dropdown.value;
    document.querySelector(`[value="${value}"]`).remove();
};

// Practical task 5
const button = document.getElementById("button5");
function liveButton(liveButton) {
    actions.pressed(liveButton);
    actions.hOver(liveButton);
    actions.hOut(liveButton);
}

const actions = {
    pressed: element => element.addEventListener("click", () => document.getElementById("liveButtonText").innerHTML = "<p>I was pressed!</p>"),
    hOver: element => element.addEventListener("mouseover", () => document.getElementById("liveButtonText").innerHTML = "<p>Mouse on me!</p>"),
    hOut: element => element.addEventListener("mouseout", () => document.getElementById("liveButtonText").innerHTML = "<p>Mouse is not on me!</p>")
}

liveButton(button)

//Practical task 6
function showWindowSize() { 
     document.body.innerHTML = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
}

showWindowSize();

window.addEventListener('resize', showWindowSize);
