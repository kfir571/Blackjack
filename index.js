let firstCard, secondCard, message
let card = 0
let cards = []
let sum = 0
let hasBlackJack,in_game = false
let isAlive, newgame = true
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let error = document.getElementById("error-el")
let playerEl = document.getElementById("player-el")

let player = {
    name: "per",
    chips: 145
}
playerEl.textContent = player.name + ": $" +player.chips

function  getRandomCard(){
    //if 1  ->return 11
    //11=13 -> return 10
    let randomNamber =Math.floor(Math.random() * 13) + 1

    if (randomNamber > 10){
        randomNamber =10
    }else if(randomNamber === 1){
        randomNamber = 11
    }
    return randomNamber
}

function setCards(){
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cards.push(firstCard)
    cards.push(secondCard)
}

function startGame(){
    if (newgame) {
        setCards()
        newgame = false

        renderGame()
    } else error.textContent = "You just start a new game"
}

function  renderGame(){
    in_game = true
    cardsEl.textContent = "Cards: "
    sum = 0
    for (let i= 0; i< cards.length; i++){
        cardsEl.textContent += cards[i] + " "

        sum += cards[i]
    }
    sumEl.textContent = "Sum: " + sum
    console.log("renderGame: cards length:" +cards.length + " and the cards is: " + cards + " and sum is: " + sum)

    if(sum <= 20){
        message = "Do you want to drow a new cars?"

    } else if (sum === 21) {
        message = "Wohoo ! you've got Blackjack!"
        hasBlackJack = true

    }else {
        message = "You're out of the game !"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if (in_game) {

        error.textContent = ""
        card = Math.floor(Math.random() * (11 - 2) + 2)
        cards.push(card)
        firstCard = ""
        secondCard = ""
        renderGame()
    } else error.textContent = "Start game!"
}

function newGame(){

    cards = []
    console.log("new game, number of cards: " + cards.length + " and the cards is: " + cards)

    setCards()
    newgame =false
    error.textContent = ""
    hasBlackJack = false
    isAlive = true
    cardsEl.textContent = "Cards: "

    renderGame()
}
