//  variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

let diceArray=["images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png",]


function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
    document.getElementById("money-emoji").style.display="none"
}

/* Adding a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6)
    console.log(diceArray[randomNumber])
    if (player1Turn) {
        player1Score += randomNumber +1
        player1Scoreboard.textContent = player1Score
        player1Dice.innerHTML = `<img src="${diceArray[randomNumber]}">`
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn 👇"
    } else {
        player2Score += randomNumber +1
        player2Scoreboard.textContent = player2Score
        player2Dice.innerHTML = `<img src="${diceArray[randomNumber]}">`
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "👇 Player 1 Turn"
    }
     
    if (player1Score >= 20) {
        message.textContent = "🏆 Player 1 Won 🥳"
        showResetButton()
    }  else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉 🏆"
        showResetButton()
    }
    player1Turn = !player1Turn
    
})
 
resetBtn.addEventListener("click", function(){
    reset()
    
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    document.getElementById("money-emoji").style.display="block"
}
