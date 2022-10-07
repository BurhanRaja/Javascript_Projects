const dropList = document.querySelectorAll(".selector select")
const imageFlag = document.querySelector(".selector img")

const displayAmount = document.querySelector('.display-converter b')

const amountInp = document.querySelector('.amount-input input')
const exchangeBtn = document.querySelector('.exchange-rate-btn-container button')

const fromCurrency = document.querySelector('.from select')
const toCurrency = document.querySelector('.to select')

// Displaying Country Codes as options
for (let i = 0; i < dropList.length; i++) {
    for (currency_code in country_list) {
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
}


// Get Exchange Rates
exchangeBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    const base = fromCurrency.value
    const convertedTo = toCurrency.value
    const amount = amountInp.value
    getExchangeRates(base, convertedTo, amount)
})


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
    
    
}

// Flags 
const fetchFlag = (element) => {
    imageFlag.alt = element
    element = element.slice(0, 2)
    element = element.toLowerCase()
    imageFlag.src = `https://countryflagsapi.com/png/${element}`
}

// async function update() {
//     const he = await fetchExchangeRates("USD", "INR", 1)
//     console.log(he)
// }

// update()