let numEl_1 = document.getElementById('num1')
let numEl_2 = document.getElementById('num2')
let result = document.getElementById('result')

let num_1 = 0
let num_2 = 0
let sum = 0

function increment_1(){
    num_1 += 1
    numEl_1.textContent = num_1
}

function decrement_1(){
    num_1 -= 1
    numEl_1.textContent = num_1
}


function increment_2(){
    num_2 += 1
    numEl_2.textContent = num_2
}

function decrement_2(){
    num_2 -= 1
    numEl_2.textContent = num_2
}

function resetnum(){
    numEl_1.textContent = 0
    num_1=0
    numEl_2.textContent = 0
    num_2=0
    result.textContent = 0
}

function add(){
    result.textContent = num_1 + num_2
}
function subtract(){
    result.textContent = num_1 - num_2
}
function multiply(){
    result.textContent = num_1 * num_2
}
function divide(){
    result.textContent = num_1 / num_2
}