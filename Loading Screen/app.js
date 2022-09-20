const inner = document.querySelector('.inner')
const outer = document.querySelector('.outer')
const percentage = document.querySelector('span')
let count = 0

inner.addEventListener('click', () => {
    let loading = setInterval(animate, 150)

    function animate() {
        if (count === 100) {
            outer.classList.remove("add-animation")
            clearInterval()
        }
        else {
            count = count + 2
            percentage.textContent = count + "%"
            outer.classList.add("add-animation")
        }
    }
})
