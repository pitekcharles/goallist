var yesButton = document.getElementById("yesButton");
var noButton = document.getElementById("noButton");

function goalAchieved () {
    var h2 = document.createElement("h2");
    h2.innerText = "Congratulations you achieved your goals today!";
    document.getElementById("goalReached").appendChild(h2);
    yesButton.remove();
    noButton.remove();
}

function goalFailed () {
    var h2 = document.createElement("h2");
    h2.innerText = "You can do it! Tomorrow is another chance!";
    document.getElementById("goalReached").appendChild(h2);
    yesButton.remove();
    noButton.remove();
}

yesButton.addEventListener("click", function () {
    goalAchieved();
}, false);

noButton.addEventListener("click", function () {
    goalFailed();
}, false);