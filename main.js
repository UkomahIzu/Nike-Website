// Assign dom elements to variables
let leftButton = document.getElementById('left')
let rightButton = document.getElementById('right')
let display = document.getElementById('display')
let count = document.getElementById('count')
let divCount = document.getElementById('counts')

// Array to contain the shoe Images
const shoes = [
    `<img src="Images/one.png" alt="">`,
    `<img src="Images/three.png" alt="">`,
    `<img class="six" src="Images/six.png" alt="">`,
    `<img class="eleven" src="Images/eleven.png" alt="">`,
    `<img src="Images/ten.png" alt="">`,
]

let index = 0
display.innerHTML = shoes[index]
divCount.innerHTML = `<h2 class="one">0${index + 1}</h2>`

function prev() {
    // Condition that runs if the index is greater than one
    if(index>0) {
        index--
        display.innerHTML=shoes[index]
        divCount.innerHTML = `<h2 class="one">0${index + 1}</h2>`
    }
}

function next() {
    // Condition that runs if the index is less than four
    if(index<4) {
        index++
        display.innerHTML=shoes[index]
        divCount.innerHTML = `<h2 class="one">0${index + 1}</h2>`
    }
}

// Event listeners to run the prev and next functions on click
leftButton.addEventListener("click", prev)
rightButton.addEventListener("click", next)