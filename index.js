

var firstPlayerRandomNumber = Math.floor(Math.random() * 6) + 1;
var secondPlayerRandomNumber = Math.floor(Math.random() * 6) + 1;

var firstRandomDiceImage = "./images/dice"+ firstPlayerRandomNumber + ".png";
var secondRandomDiceImage = "./images/dice"+ secondPlayerRandomNumber +".png";

document.querySelector(".img1").setAttribute("src", firstRandomDiceImage)
document.querySelector(".img2").setAttribute("src", secondRandomDiceImage)


var winnerPlayer = document.querySelector(".winner")

function winner() {
    if(firstPlayerRandomNumber > secondPlayerRandomNumber){
        winnerPlayer.textContent = "Jogador 1 venceu!!"
    } else if (firstPlayerRandomNumber < secondPlayerRandomNumber){
        winnerPlayer.textContent = "Jogador 2 venceu!!"
    } else {
        winnerPlayer.textContent = "Empate!!"
    }
}


winner();


document.onload = winner();