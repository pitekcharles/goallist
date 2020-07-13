var yesButton = document.getElementById("yesButton");

function goalAchieved () {
    var h2 = document.createElement("h2");
    h2.innerText = "Congratulations!";
    document.getElementById("goalReached").appendChild(h2);
}

yesButton.addEventListener("click", function () {
    goalAchieved();
}, false);