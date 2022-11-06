const inpName = document.querySelector('.inpName')
const addBtn = document.querySelector('.add-array')
const printBtn = document.querySelector('.print-array')
const msg = document.querySelector('.message p')

let names = []

addBtn.addEventListener("click", () => {
    if (inpName.value === '') {
        msg.innerText = 'Please Write a Name'
        msg.style.color = "red"
        setTimeout(() => {
            msg.innerText = ''
            msg.style.color = "black"
        }, 3000);
    }
    else {
        names.push(inpName.value)
        inpName.value = ''
        console.log(names)
    }
})

const shuffle = () => {
    let j;
    for (let i = 0; i < names.length; i++) {
        j = Math.floor(Math.random() * names.length)
        swap(names, i, j)
    }
}

const swap = (names, a, b) => {
    let temp = names[a]
    names[a] = names[b]
    names[b] = temp
}

printBtn.addEventListener("click", () => {
    shuffle()
    let time = 1000
    for (let i = 0; i < names.length; i++) {
        setTimeout(() => {
            if (names.length <= 1) {
                msg.innerText += names[i]
            }
            if (i === names.length - 1) {
                msg.innerText += names[i]
            }
            if (names.length > 1 && i < names.length - 1) {
                msg.innerText += names[i] + ', '
            }
        }, time)
        time += 1000
    }
})

