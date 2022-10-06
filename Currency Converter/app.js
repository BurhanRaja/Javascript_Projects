const dropList = document.querySelectorAll(".selector select")
const imageFlag = document.querySelectorAll(".selector img")

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

const fetchExchangeRates = async (base, convertedTo, amount) => {
    let myHeaders = new Headers();
    myHeaders.append("apikey", secret.API_KEY);
    
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    
    await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${convertedTo}&from=${base}&amount=${amount}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

const fetchFlags = (base, convertedTo) => {
    imageFlag[0].alt = base
    imageFlag[1].alt = convertedTo

    base = base.slice(0, 2)
    convertedTo = convertedTo.slice(0, 2)

    base = base.toLowerCase()
    convertedTo = convertedTo.toLowerCase()

    imageFlag[0].src = `https://countryflagsapi.com/png/${base}`
    imageFlag[1].src = `https://countryflagsapi.com/png/${convertedTo}`
}