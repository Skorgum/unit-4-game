console.log("I don't know what you're looking for, but you won't find it here.")

var stiller = {
    meanJoe: 
    {
        name: "Mean Joe Green",
        value: 0 
    },
    Franco:
    {
        name: "Franco Harris",
        value: 0
    },
    Troy: 
    {
        name: "Troy Polamalu",
        value: 0
    },
    Hines: 
    {
        name: "Hines Ward",
        value: 0
    }     
};

var currentScore = 0;
var targetScore = 0;
var wins = 0;
var losses = 0;

var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
};

// audio workaround
var yoiClick = document.getElementById("yoiClick");
var winner = document.getElementById("winner");
var loser = document.getElementById("loser");

var startGame = function() {
    currentScore = 0;
    targetScore = getRandom(19, 120);
    stiller.meanJoe.value = getRandom(1, 12);
    stiller.Franco.value = getRandom(1, 12);
    stiller.Troy.value = getRandom(1, 12);
    stiller.Hines.value = getRandom(1, 12);

    $("#your-score").text(currentScore);
    $("#target-score").text(targetScore);

    // Testing:
    // console.log("Target Score: " + targetScore);
    // console.log("Mean Joe: " + stiller.meanJoe.value + " | Franco: " + stiller.Franco.value + " | Troy: " + stiller.Troy.value + " | Hines: " + stiller.Hines.value);
};

var checkWin = function() {
    if (currentScore > targetScore) {
        loser.play();
        alert("You lose!");
        losses++;
        $("#loss-count").text(losses);
        startGame()
    }

    else if (currentScore === targetScore) {
        winner.play();
        alert("You win!");
        wins++
        $("#win-count").text(wins);
        startGame()
    }
};

var addValues = function(clickedStiller) {
    currentScore += clickedStiller.value;
    $("#your-score").text(currentScore);
    checkWin();
    // Testing:
    // console.log("Your Score: " + currentScore);
};
startGame();



$("#meanJoe").click(function() {
    addValues(stiller.meanJoe);
    yoiClick.play();
});
$("#Franco").click(function() {
    addValues(stiller.Franco);
    yoiClick.play();
});
$("#Troy").click(function() {
    addValues(stiller.Troy);
    yoiClick.play();
});
$("#Hines").click(function() {
    addValues(stiller.Hines);
    yoiClick.play();
})