
// Grabbing an element by id
let countEl = document.getElementById('count')

// Assuming the initial value
let count = 0

// Function to increment the count
function increment(){
    count += 1
    countEl.innerText = count
    console.log(count) 
}

let paratextEl = document.getElementById('para-text')

// Function to save the incremented number
function save(){
    let countStr = count + " - "
    paratextEl.textContent += countStr
    countEl.innerText = 0
    count = 0
}

