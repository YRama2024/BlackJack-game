
let cards=[]
let sum=0
let hasblackjack=false
let isalive=false
let message="" 
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")

let player={
     name: "jack",
     chips: 145
}

let playerEl=document.getElementById(player-el)
playerEl.textContent= player.name+": $"+player.chips

function getRandomCard(){
    let rnum= Math.floor(Math.random()*13)+1
    if (rnum > 10) {
        return 10
    } else if (rnum === 1) {
        return 11
    } else {
        return rnum
    }
}

function startgame(){
    isalive=true
    let firstcard=getRandomCard()
    let secondcard=getRandomCard()
    cards=[firstcard,secondcard]
    sum=firstcard+secondcard
    rendergame()
}

function rendergame(){
   
    sumEl.textContent="sum:"+sum
    cardsEl.textContent="cards:"
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }
   
    if(sum<=20){
        message="do you want to draw a card"
    }
    else if(sum===21){
        message="wohoo! you won!"
        hasblackjack=true
    }
    else{
        message="you lost"
        isalive=false
    }
    messageEl.textContent=message

}
function newcard(){

    if(isalive===true && hasblackjack===false){
        let card=getRandomCard()
        sum+=card
        cards.push(card)
        rendergame()
    }
}
