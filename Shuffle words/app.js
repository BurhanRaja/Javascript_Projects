const inputVal = document.querySelector('.inp-word input');
const word = document.querySelector('.word');
const startBtn = document.querySelector('.btns .start')
const stopBtn = document.querySelector('.btns .stop')

inputVal.addEventListener("keyup", () => {
    word.innerText = inputVal.value;
});

// To Shuffle the word
function shuffleArr(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

// To stop the loop for a moment
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

// To indicate if a loop in on or off
let flag = false

// To stop the loop completely
stopBtn.addEventListener("click", () => {
    flag = true;
})

// To start shuffling
startBtn.addEventListener("click", async () => {
    flag = false;
    if (word.innerText !== "") {
        let wordArr = word.innerText.split('');
        let shuffArray = wordArr;
        while (true) {
            if (flag) {
                word.innerText = inputVal.value
                break;
            }
            shuffArray = shuffleArr(shuffArray);
            word.innerText = shuffArray.join('');
            await sleep(1500);
        }
    } else {
        word.innerText = 'Please enter a Word'
        setTimeout(() => {
            word.innerText = ''
        }, 2000);
    }
});

