// counters and the such
var idCounter = 0; 

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

// since i seem to be doing it alot, here is a function to create buttons

function createButton (id, innerText) {
    var button = document.createElement("button");
    button.setAttribute("id", id);
    button.setAttribute("type", "button");
    button.innerText = innerText;
    return button;
}

// function to work the reset button
function resetClicked () {
    var statusText = document.getElementById("statusText");
    var reset = document.getElementById("resetButton");
    statusText.remove();
    var yesButton = createButton("yesButton", "Yes");
    var noButton = createButton("noButton", "No");
    goalReached.appendChild(yesButton);
    goalReached.appendChild(noButton);
    reset.remove();
}

function addGoal () {
    var newGoal = $("#newGoal").val();
    var test = document.getElementById("newGoal");
    test.value = "";
    var li = document.createElement("li");
    li.setAttribute("id", idCounter);
    idCounter +=1;
    var goal = document.createElement("p");
    goal.setAttribute("id", newGoal);
    goal.innerText = newGoal;
    var goalList = document.getElementById("goalList");
    var completedButton = createButton("completedButton", "Completed");
    var notCompleteButton = createButton("notCompleteButton", "Not Complete");
    li.appendChild(goal);
    li.appendChild(completedButton);
    li.appendChild(notCompleteButton);
    goalList.appendChild(li);
}

$(document).on("click", "#resetButton", function(){
    resetClicked();
});

$(document).on("click", "#yesButton", function(){
    goalStatus("reached");
});

$(document).on("click", "#noButton", function(){
    goalStatus(false);
});

$(document).on("click", "#addGoal", function(){
    addGoal();
})