function diceGame() {

    var a = Math.floor(Math.random() * 6) + 1 ;
    var b = Math.floor(Math.random() * 6) + 1;

    document.getElementById("dice1").src = `images/dice${a}.png`;
    document.getElementById("dice2").src = `images/dice${b}.png`;

    if(a>b)
        document.getElementById("ans").innerHTML = "A Wins";
    else if(a==b)
        document.getElementById("ans").innerHTML = "Tie";
    else
        document.getElementById("ans").innerHTML = "B Wins";

}