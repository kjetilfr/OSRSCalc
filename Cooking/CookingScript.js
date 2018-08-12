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
	Shrimps: 30,
	Sardine: 40,
	Anchovies: 30,
	KaramwanPoison: 80,
	Herring: 50,
	Mackerel: 60,
	Trout:70,
	Cod: 75,
	Pike: 80,
	Salmon: 90,
	SlimyEel: 90,
	Tuna: 100,
	KaramwanCooked: 190,
	RainbowFish: 110,
	CaveEel: 115,
	Lobster: 120,
	Bass: 130,
	Swordfish: 140,
	LavaEel: 30,
	Monkfish: 150,
	SacredEel: 116.5,
	Shark: 210,
	SeaTurtle: 211.3,
	Anglerfish: 230,
	DarkCrab: 215,
	MantaRay: 216.5
};
var Pies = {
	RedberryPie: 78,
	MeatPie: 104,
	MudPie: 128,
	ApplePie: 130,
	GardenPie: 128,
	FishPie: 164,
	BotanicalPie: 180,
	AdmiralPie: 210,
	WildPie: 240,
	SummerPie: 260
};
var Pizza = {
	PlainPizza: 143,
	MeatPizza: 169,
	AnchovyPizza: 182,
	PineapplePizza: 195
};
var Potatoes = {
	BakedPotato: 15,
	PotatoWithButter: 40,
	ChilliPotato: 15,
	PotatoWithCheese: 40,
	EggPotato: 45,
	TunaPotato: 309.5
};
var Cake = {
	FishCake: 100,
	Cake: 180,
	ChocolateCake: 210
};
var Drinks = {
	JugOfWine: 200,
	WineOfZamorak: 200
};
var Other = {
	Sweetcorn: 104
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
    document.getElementById("NewCookingLevel").innerHTML = "New cooking level: " + NewLevel + ", " + PercentToNewLevel(NewTotalExp) + "% to level " + (NewLevel + 1);
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
	if (TypeOfFood === "Rabbit") {
		return Meat["Rabbit"] * AmountOfFood;
	}
	if (TypeOfFood === "RoastBirdMeat") {
		return Meat["RoastRabbit"] * AmountOfFood;
	}
	if (TypeOfFood === "CrabMeat") {
		return Meat["CrabMeat"] * AmountOfFood;
	}
	
	//Things you can make with Fish
    if (TypeOfFood === "Shrimps") {
		return Fish["Shrimps"] * AmountOfFood;
	}
	if (TypeOfFood === "Sardine") {
		return Fish["Sardine"] * AmountOfFood;
	}
	if (TypeOfFood === "Anchovies") {
		return Fish["Anchovies"] * AmountOfFood;
	}
	if (TypeOfFood === "KaramwanPoison") {
		return Fish["KaramwanPoison"] * AmountOfFood;
	}
	if (TypeOfFood === "Herring") {
		return Fish["Herring"] * AmountOfFood;
	}
	if (TypeOfFood === "Mackerel") {
		return Fish["Mackerel"] * AmountOfFood;
	}
	if (TypeOfFood === "Trout") {
		return Fish["Trout"] * AmountOfFood;
	}
	if (TypeOfFood === "Cod") {
		return Fish["Cod"] * AmountOfFood;
	}
	if (TypeOfFood === "Pike") {
		return Fish["Pike"] * AmountOfFood;
	}
	if (TypeOfFood === "Salmon") {
		return Fish["Salmon"] * AmountOfFood;
	}
	if (TypeOfFood === "SlimyEel") {
		return Fish["SlimyEel"] * AmountOfFood;
	}
	if (TypeOfFood === "Tuna") {
		return Fish["Tuna"] * AmountOfFood;
	}
	if (TypeOfFood === "Tuna") {
		return Fish["Tuna"] * AmountOfFood;
	}
	if (TypeOfFood === "KaramwanCooked") {
		return Fish["KaramwanCooked"] * AmountOfFood;
	}
	if (TypeOfFood === "RainbowFish") {
		return Fish["RainbowFish"] * AmountOfFood;
	}
	if (TypeOfFood === "CaveEel") {
		return Fish["CaveEel"] * AmountOfFood;
	}
	if (TypeOfFood === "Lobster") {
		return Fish["Lobster"] * AmountOfFood;
	}
	if (TypeOfFood === "Bass") {
		return Fish["Bass"] * AmountOfFood;
	}
	if (TypeOfFood === "Swordfish") {
		return Fish["Swordfish"] * AmountOfFood;
	}
	if (TypeOfFood === "LavaEel") {
		return Fish["LavaEel"] * AmountOfFood;
	}
	if (TypeOfFood === "Monkfish") {
		return Fish["Monkfish"] * AmountOfFood;
	}
	if (TypeOfFood === "SacredEel") {
		return Fish["SacredEel"] * AmountOfFood;
	}
	if (TypeOfFood === "Shark") {
		return Fish["Shark"] * AmountOfFood;
	}
	if (TypeOfFood === "SeaTurtle") {
		return Fish["SeaTurtle"] * AmountOfFood;
	}
	if (TypeOfFood === "Anglerfish") {
		return Fish["Anglerfish"] * AmountOfFood;
	}
	if (TypeOfFood === "DarkCrab") {
		return Fish["DarkCrab"] * AmountOfFood;
	}
	if (TypeOfFood === "MantaRay") {
		return Fish["MantaRay"] * AmountOfFood;
	}
	
	
	//Things you can make with Pies
 	if (TypeOfFood === "RedberryPie") {
		return Pies["RedberryPie"] * AmountOfFood;
	}
	if (TypeOfFood === "MeatPie") {
		return Pies["MeatPie"] * AmountOfFood;
	}
	if (TypeOfFood === "MudPie") {
		return Pies["MudPie"] * AmountOfFood;
	}
	if (TypeOfFood === "ApplePie") {
		return Pies["ApplePie"] * AmountOfFood;
	}
	if (TypeOfFood === "GardenPie") {
		return Pies["GardenPie"] * AmountOfFood;
	}
	if (TypeOfFood === "FishPie") {
		return Pies["FishPie"] * AmountOfFood;
	}
	if (TypeOfFood === "BotanicalPie") {
		return Pies["BotanicalPie"] * AmountOfFood;
	}
	if (TypeOfFood === "AdmiralPie") {
		return Pies["AdmiralPie"] * AmountOfFood;
	}
	if (TypeOfFood === "WildPie") {
		return Pies["WildPie"] * AmountOfFood;
	}
	if (TypeOfFood === "SummerPie") {
		return Pies["SummerPie"] * AmountOfFood;
	}
	
	//Things you can make with Pizza
	if (TypeOfFood === "PlainPizza") {
		return Pizza["PlainPizza"] * AmountOfFood;
	}
	if (TypeOfFood === "MeatPizza") {
		return Pizza["MeatPizza"] * AmountOfFood;
	}
	if (TypeOfFood === "AnchovyPizza") {
		return Pizza["AnchovyPizza"] * AmountOfFood;
	}
	if (TypeOfFood === "PineapplePizza") {
		return Pizza["PineapplePizza"] * AmountOfFood;
	}
	
	//Things you can make with Potatoes
	if (TypeOfFood === "BakedPotato") {
		return Potatoes["BakedPotato"] * AmountOfFood;
	}
	if (TypeOfFood === "PotatoWithButter") {
		return Potatoes["PotatoWithButter"] * AmountOfFood;
	}
	if (TypeOfFood === "ChilliPotato") {
		return Potatoes["ChilliPotato"] * AmountOfFood;
	}
	if (TypeOfFood === "PotatoWithCheese") {
		return Potatoes["PotatoWithCheese"] * AmountOfFood;
	}
	if (TypeOfFood === "EggPotato") {
		return Potatoes["EggPotato"] * AmountOfFood;
	}
	if (TypeOfFood === "TunaPotato") {
		return Potatoes["TunaPotato"] * AmountOfFood;
	}

	//Things you can make with Cake
	if (TypeOfFood === "FishCake") {
		return Cake["FishCake"] * AmountOfFood;
	}
	if (TypeOfFood === "Cake") {
		return Cake["Cake"] * AmountOfFood;
	}
	if (TypeOfFood === "ChocolateCake") {
		return Cake["ChocolateCake"] * AmountOfFood;
	}
	//Things you can make with Drinks
	if (TypeOfFood === "JugOfWine") {
		return Cake["JugOfWine"] * AmountOfFood;
	}
	if (TypeOfFood === "WineOfZamorak") {
		return Cake["WineOfZamorak"] * AmountOfFood;
	}
	//Things you can make with Other
	if (TypeOfFood === "Sweetcorn") {
		return Other["Sweetcorn"] * AmountOfFood;
	}
	
	else {
		alert("Unknown type of food, please try again");
	}
}