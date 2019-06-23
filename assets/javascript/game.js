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

var startGame = function() {
    currentScore = 0;
    targetScore = getRandom(19, 120);
    stiller.meanJoe.value = getRandom(1, 12);
    stiller.Franco.value = getRandom(1, 12);
    stiller.Troy.value = getRandom(1, 12);
    stiller.Hines.value = getRandom(1, 12);

    $("#your-score").text(currentScore);
    $("#target-score").text(targetScore);

    // To be deleted or commented out after testing:
    console.log("Target Score: " + targetScore);
    console.log("Mean Joe: " + stiller.meanJoe.value + " | Franco: " + stiller.Franco.value + " | Troy: " + stiller.Troy.value + " | Hines: " + stiller.Hines.value);
};
startGame()