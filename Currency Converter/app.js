const dropList = document.querySelectorAll(".selector select")
const displayAmount = document.querySelector('.display-converter b')
const amountInp = document.querySelector('.amount-input input')
const exchangeRateBtn = document.querySelector('.exchange-rate-btn-container button')
const fromCurrency = document.querySelector('.from select')
const toCurrency = document.querySelector('.to select')
const exchangeCurrBtn = document.querySelector('.converter-arrows i')

// Displaying Country Codes as options
for (let i = 0; i < dropList.length; i++) {
    for (let currency_code in country_list) {
        let selected;
        if (i == 0) {
            selected = currency_code === "USD" ? 'selected' : ''
        }
        else if (i == 1) {
            selected = currency_code === "INR" ? 'selected' : ''
        }
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`
        dropList[i].insertAdjacentHTML("beforeend", optionTag)
    }

    dropList[i].addEventListener("change", (e) => {
        console.log(e.target.value)
        fetchFlag(e.target)
    })
}

// Default Currency Exchange
window.addEventListener("load", () => {
    const base = fromCurrency.value
    const convertedTo = toCurrency.value
    const amount = amountInp.value
    getExchangeRates(base, convertedTo, amount)
})

// Get Exchange Rates
exchangeRateBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    const base = fromCurrency.value
    const convertedTo = toCurrency.value
    const amount = amountInp.value
    displayAmount.innerText = `Getting Exchange Rate ....`
    getExchangeRates(base, convertedTo, amount)
})


exchangeCurrBtn.addEventListener("click", () => {
    exchange()
})

// Flags 
const fetchFlag = (element) => {
    for (let code in country_list) {
        if (code === element.value) {
            let imageTag = element.parentElement.querySelector("img")
            imageTag.src = `https://countryflagsapi.com/png/${country_list[code].toLowerCase()}`
        }
    }
}


// Exchange the Currency Code
const exchange = () => {
    let temp = toCurrency.value
    toCurrency.value = fromCurrency.value
    fromCurrency.value = temp

    fetchFlag(toCurrency)
    fetchFlag(fromCurrency)

    const base = fromCurrency.value
    const convertedTo = toCurrency.value
    const amount = amountInp.value
    getExchangeRates(base, convertedTo, amount)
}


// Currency Conversion
const getExchangeRates = async (base, convertedTo, amount) => {
    let myHeaders = new Headers();
    myHeaders.append("apikey", secret.API_KEY);
    
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    
    const response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${convertedTo}&from=${base}&amount=${amount}`, requestOptions)
        .catch(error => console.log('error', error));
    
    let result = await response.json()

    displayAmount.innerText = `${amount} ${base} = ${result.result} ${convertedTo}`   
}
