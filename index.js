var random1 = Math.floor(Math.random() * 5) + 1;
var path = "images/dice" + random1 + ".png";

document.querySelectorAll("img")[0].src = path;

var random2 = Math.floor(Math.random() * 5) + 1;
path = "images/dice" + random2 + ".png";

document.querySelectorAll("img")[1].src = path;

if (random1 < random2) {
    document.querySelector("h1").innerHTML = "Player2 Won!";
}
else if (random1 > random2) {
    document.querySelector("h1").innerHTML = "Player1 Won!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}