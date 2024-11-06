let randomNum1 = Math.floor(Math.random()*6)+1;
let randomDice1 = "./images/dice"+ randomNum1 + ".png";

let randomNum2 = Math.floor(Math.random()*6)+1;
let randomDice2 = "./images/dice"+ randomNum2 + ".png";

document.querySelector(".img1").setAttribute("src",randomDice1);
document.querySelector(".img2").setAttribute("src",randomDice2);

if(randomNum1>randomNum2){
    document.querySelector("h1").textContent=" <- Player 1 wins!" 
}
else if(randomNum1<randomNum2){
    document.querySelector("h1").textContent="Player 2 wins! ->" 
}
else{
    document.querySelector("h1").textContent= "Its a tie! Try again :)"
}