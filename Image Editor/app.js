const fileInput = document.querySelector('.file-input')
const chooseImg = document.querySelector('.choose-img')
const image = document.querySelector('.image-container img')
const filterBtns = document.querySelectorAll('.filter-btn button')
const filterSliderName = document.querySelector('.filter-name')
const filterSliderValue = document.querySelector('.filter-value')
const filterSlider = document.getElementById('range-slider')

// Initial value of SLider
let brightness = 100
let saturation = 100
let inversion = 0
let grayscale = 0

// Add Image
chooseImg.addEventListener("click", () => {
    fileInput.click()
});

// Filter Buttons
filterBtns.forEach(option => {
    option.addEventListener("click", () => {
        document.querySelector('.filter-btn .active').classList.remove('active')
        option.classList.add("active")
        filterSliderName.innerText = option.innerText

        if (option.innerText === 'Brightness') {
            filterSlider.value = brightness
            filterSlider.max = 200
        }
        else if (option.innerText === 'Saturation') {
            filterSlider.value = saturation
            filterSlider.max = 200
        }
        else if (option.innerText === 'Inversion') {
            filterSlider.value = inversion
            filterSlider.max = 100
        }
        else if(option.innerText === 'Grayscale') {
            filterSlider.value = grayscale
            filterSlider.max = 100
        }
    })
});

// TODO: Filter Slider Input add to the filterSliderValue 
// filterSlider.addEventListener('input', () => {
    
// })

// Filter Inputs enable when image is added
fileInput.addEventListener("change", () => {
    let file = fileInput.files[0]
    if (!file) {
        return
    }
    image.src = URL.createObjectURL(file)
    image.style.padding = 0
    image.addEventListener("load", () => {
        document.querySelector(".filters-container").classList.remove("disable")
    })
});



