const inpColor = document.querySelector('.inp-color')
const colorBtn = document.querySelector('.change-color')
const bgCont = document.querySelector('.container')

let colorPalette = 'abcdefABCDEF123456'


let color

const getColor = () => {
    color = ''
    for (let i = 0; i < 6; i++) {
        let ranNum = Math.floor(Math.random()*18)
        color += colorPalette[ranNum]
    }
    color = '#'+color
    return color
}

colorBtn.addEventListener("click", () => {
    let genColor = getColor()
    inpColor.value = genColor
    bgCont.style.backgroundColor = genColor
})