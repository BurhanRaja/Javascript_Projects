const dropList = document.querySelectorAll(".selector select")

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

const fetchExchangeRates = (base, convertedTo) => {
    let myHeaders = new Headers();
    myHeaders.append("apikey", secret.API_KEY);
    
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    
    fetch("https://api.apilayer.com/exchangerates_data/convert?to=INR&from=USD&amount=1", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

fetchExchangeRates("USD", "INR")
