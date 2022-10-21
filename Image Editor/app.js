const fileInput = document.querySelector('.file-input')
const chooseImg = document.querySelector('.choose-img')
let image = document.querySelector('.image-container img')
let imageRotate = document.querySelector('.image-container')
let filterBtns = document.querySelectorAll('.filter-btn button')
let filterSliderName = document.querySelector('.filter-name')
let filterSliderValue = document.querySelector('.filter-value')
let filterSlider = document.getElementById('range-slider')
let rotateBtns = document.querySelectorAll('.rotate-btns button')

// Initial value of SLider
let brightness = 100
let saturation = 100
let inversion = 0
let grayscale = 0

// Rotate values
let rotate = 0, veritcalRotate = -1, horizontalRotate = -1

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
            filterSliderValue.innerText = `${brightness}%`
        }
        else if (option.innerText === 'Saturation') {
            filterSlider.value = saturation
            filterSlider.max = 200
            filterSliderValue.innerText = `${saturation}%`
        }
        else if (option.innerText === 'Inversion') {
            filterSlider.value = inversion
            filterSlider.max = 100
            filterSliderValue.innerText = `${inversion}%`
        }
        else if(option.innerText === 'Grayscale') {
            filterSlider.value = grayscale
            filterSlider.max = 100
            filterSliderValue.innerText = `${grayscale}%`
        }
    })
});

// TODO: Filter Slider Input add to the filterSliderValue 
filterSlider.addEventListener('input', () => {
    filterSliderValue.innerText = `${filterSlider.value}%`
    let selectedFilter = document.querySelector('.filter-btn .active');
    if (selectedFilter.innerText === 'Brightness') {
        brightness = filterSlider.value; // Slider value
        image.style.filter = `brightness(${brightness}%)` // image filter
    }
    else if (selectedFilter.innerText === 'Saturation') {
        saturation = filterSlider.value; // Slider value
        image.style.filter = `saturate(${saturation}%)` // image filter
    }
    else if (selectedFilter.innerText === 'Inversion') {
        inversion = filterSlider.value; // Slider value
        image.style.filter = `invert(${inversion}%)` // image filter
    }
    else {
        grayscale = filterSlider.value; // Slider value 
        image.style.filter = `grayscale(${grayscale}%)` // image filter
    }
})

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

// Rotate Image
rotateBtns.forEach(btn => {
btn.addEventListener("click", () => {

        if (btn.id === 'rotate-left') {
            rotate += 90
            imageRotate.style.transform = `rotate(${rotate}deg)`
        }
        else if (btn.id === 'rotate-right') {
            rotate -= 90
            imageRotate.style.transform = `rotate(${rotate}deg)`
        }
        else if (btn.id === 'rotate-vertical') {
            if (veritcalRotate == -1) {
                imageRotate.style.transform = `scaleX(-1)`
                veritcalRotate = 1
            }
            else {
                imageRotate.style.transform = `scaleX(1)`
                veritcalRotate = -1
            }
        }
        else if (btn.id === 'rotate-horizontal') {
            if (horizontalRotate == -1) {
                imageRotate.style.transform = `scaleY(-1)`
                horizontalRotate = 1
            }
            else {
                imageRotate.style.transform = `scaleY(1)`
                horizontalRotate = -1
            }
        }
    })
})



