let cardArray = []

let sum = 0
let hasBlackJack = false

let isAlive = false

let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

let player = {
    playerName: "Player",
    chips: 145
}


function getRandomCard() {
    let cardNum = Math.floor(Math.random()*13) + 1
    if (cardNum > 10 ){
        return 10
    }
    else if (cardNum === 1) {
        return 11
    }
    else {
        return cardNum
    }
}

function startgame() {
    isAlive = true

    let firstcard = getRandomCard()
    let secondcard = getRandomCard()

    cardArray = [firstcard, secondcard]
    sum = firstcard + secondcard

    rendergame()
}

function rendergame() {
    playerEl.textContent = player.playerName + " :$" + player.chips
    cardEl.textContent = "Cards: ";
    for (let index = 0; index < cardArray.length; index++) {
        cardEl.textContent += cardArray[index] + " "
    }
    sumEl.textContent = sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } 
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    }
    else{
        message = "You're out of the game."
        isAlive = false
    }

    messageEl.textContent = message
}

function newcard() {
    if (isAlive === true && sum!=21) {
        let card = getRandomCard()
        sum += card
        cardArray.push(card)
    }
    rendergame()
}

