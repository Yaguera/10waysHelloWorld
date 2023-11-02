
// item 1
function log() {
    alert('Olhe o console.')
    console.log("HELLO, WORLD!")
}

// item 2
let item2 = document.getElementById('innerHTML')
item2.innerHTML = "Hello, World!"

// item 3
let item3 = document.getElementById('loop')
for (i = 0; i < 1; i++) {
    item3.innerHTML = "Hello, World!"
}

// item 4
function alerta() {
    alert("HELLO, WORLD!")
}

// item 5
let item4 = document.getElementById('write')
item4.innerHTML = "<h1>Hello, World!</h1>"

// item 6
window.onload = function () {
    document.getElementById("onload").innerHTML = "Hello, World!";
};

// item 7
let item7 = document.getElementById('funcao')
function escrever() {
    item7.innerHTML = "Hello, World!"
}

// item 8
fetch("hello.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("8").innerHTML = data;
    });

// item 9
document.getElementById("butao9").addEventListener("mouseover", function () {
    this.textContent = "Hello, World!";
});

document.getElementById("butao9").addEventListener("mouseout", function () {
    this.textContent = "Passe o cursor";
});


// item 10
setTimeout(function () {
    document.getElementById("10").innerHTML = "Hello, World!";
}, 5000); 
