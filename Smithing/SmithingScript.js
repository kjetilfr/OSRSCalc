window.onload = run;

function run() {
	document.getElementById("CalculateExp").onclick = function() {
		CalculateExp()
	};
}

//Uncooked food
var CurrentExp = 0;
var Meat = {
	Meat: 30,
	Chicken: 30,
	Rabbit: 30,
	RoastBirdMeat: 60,
	RoastRabbit: 70,
	CrabMeat: 100
};

var Fish = {
	Shrimps: 30
 };

function CalculateExp() {
	//Check currentExp value (set to 0 if empty(
    CurrentExp = document.getElementById("CurrentExp").value;
    if (CurrentExp === null || CurrentExp === 0 || CurrentExp === "") {
		CurrentExp = 0;
	}var ExperienceGained = 0;
    //Go through the FOOD and calculate xp gained
    var countAmountOfFood = document.getElementsByClassName("Food").length;
    for (i = 0; i < countAmountOfFood ; i++) {
		if (document.getElementsByClassName("Food")[i].value === null || document.getElementsByClassName("Food")[i].value === 0 || document.getElementsByClassName("Food")[i].value === "") {
			ExperienceGained += 0;
            continue;
		}else {
			//Calculate food experience
            ExperienceGained += CalculateIndividualFoodExp(document.getElementsByClassName("Food")[i].id, document.getElementsByClassName("Food")[i].value);
		}
	}
	//Output stuff
    var NewTotalExp = (parseInt(CurrentExp) + parseInt(ExperienceGained));
    document.getElementById("TotalExp").innerHTML = "New total experience: " + NewTotalExp.toLocaleString();
    var NewLevel = CalculateNewLevel(CurrentExp,ExperienceGained, "Cooking");
    document.getElementById("NewCookingLevel").innerHTML = "New cooking level: <span id='NewLevel'>" + NewLevel + "</span>, " + PercentToNewLevel(NewTotalExp) + "% to level " + (NewLevel + 1);
}

function CalculateIndividualFoodExp(TypeOfFood, AmountOfFood) {
	var AmountOfFood = parseInt(AmountOfFood);
    //Things you can make with Meat
    if (TypeOfFood === "Meat") {
		return Meat["Meat"] * AmountOfFood;
	}
	if (TypeOfFood === "Chicken") {
		return Meat["Chicken"] * AmountOfFood;
	}
	
	else {
		alert("Unknown type of ore/bar, please try again");
	}
}
