var yesButton = document.getElementById("yesButton");
var noButton = document.getElementById("noButton");

// Old button functions, consolidated into one function
// function goalAchieved () {
//     var h2 = document.createElement("h2");
//     h2.innerText = "Congratulations you achieved your goals today!";
//     document.getElementById("goalReached").appendChild(h2);
//     yesButton.remove();
//     noButton.remove();
// }

// function goalFailed () {
//     var h2 = document.createElement("h2");
//     h2.innerText = "You can do it! Tomorrow is another chance!";
//     document.getElementById("goalReached").appendChild(h2);
//     yesButton.remove();
//     noButton.remove();
// }

// function to replace goalachieved and goal failed
function goalStatus (status) {
    var goalReached = document.getElementById("goalReached")
    var h2 = document.createElement("h2");
    if (status === "reached") {
        h2.innerText = "Congratulations you achieved your goals today!";
    } else {
        h2.innerText = "You can do it! Tomorrow is another chance!";
    }
    h2.setAttribute("id", "statusText");
    goalReached.appendChild(h2);
    document.getElementById("yesButton").remove();
    document.getElementById("noButton").remove();
    var reset = document.createElement("button");
    reset.innerText = "Reset";
    reset.setAttribute("type", "button");
    reset.setAttribute("id", "resetButton");
    goalReached.appendChild(reset);
}

// function to work the reset button
function resetClicked () {
    var statusText = document.getElementById("statusText");
    var reset = document.getElementById("resetButton");
    statusText.remove();
    var yesButton = document.createElement("button");
    yesButton.setAttribute("type", "button");
    yesButton.setAttribute("id", "yesButton");
    yesButton.innerText = "Yes";
    var noButton = document.createElement("button");
    noButton.setAttribute("type", "button");
    noButton.setAttribute("id", "noButton");
    noButton.innerText = "No";
    goalReached.appendChild(yesButton);
    goalReached.appendChild(noButton);
    reset.remove();
}

// yesButton.addEventListener("click", function () {
//     goalStatus("reached");
// }, false);

// noButton.addEventListener("click", function () {
//     goalStatus(false);
// }, false);

$(document).on("click", "#resetButton", function(){
    resetClicked();
});

$(document).on("click", "#yesButton", function(){
    goalStatus("reached");
});

$(document).on("click", "#noButton", function(){
    goalStatus(false);
});