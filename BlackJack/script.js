let player = {
    name: "Player1",
    chips: 200
}

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
const messageEl = document.getElementById('message-el');
const cardsEl = document.getElementById('cards-el')
const sumEl = document.getElementById('sum-el');
const playerEl = document.getElementById('player-el');

playerEl.textContent = player.name + ': ' + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13) + 1;

    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true;
    hasBlackJack = false;
    let card1 = getRandomCard();
    let card2 = getRandomCard();
    cards = [card1, card2];
    sum = card1 + card2;
    renderGame();
}

function renderGame() {
    let sCard = ''
    for(let i=0; i<cards.length; i++){
        sCard += cards[i] + ' ';
    }

    cardsEl.textContent = 'Cards: ' + sCard;

    sumEl.textContent = 'Sum: ' + sum;

    if(sum <= 20 ){
        message = "Do you want to draw a new card?"
    } else if(sum == 21){
        message = "You've got Blackjack!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card3 = getRandomCard();
        cards.push(card3);
        sum += card3;
        renderGame();
    }
}


