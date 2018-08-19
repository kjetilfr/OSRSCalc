window.onload = run;

function run() {
	document.getElementById("CalculateExp").onclick = function() {
		CalculateExp()
	};
}

//Ores
var CurrentExp = 0;
var Ore = {
	Bronze: 6.25,
	Blurite: 8,
	Iron: 12.5,
	Silver: 13.67,
	Steel: 17.5,
	Gold: 22.5,
	GoldGloves: 56.2,
	Mithril: 30,
	Adamant: 37.5,
	Runite: 50
};

//Bars
var Bar = {
	Bronze: 12.5,
	Blurite: 17,
	Iron: 25,
	Steel: 37.5,
	Mithril: 50,
	Adamant: 62.5,
	Runite: 75
 };

function CalculateExp() {
	//Check currentExp value (set to 0 if empty(
    CurrentExp = document.getElementById("CurrentExp").value;
    if (CurrentExp === null || CurrentExp === 0 || CurrentExp === "") {
		CurrentExp = 0;
	}var ExperienceGained = 0;
    //Go through the Supplies and calculate xp gained
    var countAmountOfSupplies = document.getElementsByClassName("Supply").length;
    for (i = 0; i < countAmountOfSupplies ; i++) {
		if (document.getElementsByClassName("Supply")[i].value === null || document.getElementsByClassName("Supply")[i].value === 0 || document.getElementsByClassName("Supply")[i].value === "") {
			ExperienceGained += 0;
            continue;
		}else {
			//Calculate food experience
            ExperienceGained += CalculateIndividualSupplyExp(document.getElementsByClassName("Supply")[i].id, document.getElementsByClassName("Supply")[i].value);
		}
	}
	//Output stuff
    var NewTotalExp = (parseInt(CurrentExp) + parseInt(ExperienceGained));
    document.getElementById("TotalExp").innerHTML = "New total experience: " + NewTotalExp.toLocaleString();
    var NewLevel = CalculateNewLevel(CurrentExp,ExperienceGained, "Smithing");
    document.getElementById("NewSmithingLevel").innerHTML = "New smithing level: <span id='NewLevel'>" + NewLevel + "</span>, " + PercentToNewLevel(NewTotalExp) + "% to level " + (NewLevel + 1);
}

function CalculateIndividualSupplyExp(SupplyID, SupplyAmount) {
	var AmountOfSupplies = parseInt(SupplyAmount);
	//Making Ores into Bars
	if (SupplyID === "BronzeOre") {
		return Ore["Bronze"] * SupplyAmount;
	}
	if (SupplyID === "BluriteOre") {
		return Ore["Blurite"] * SupplyAmount;
	}
	if (SupplyID === "IronOre") {
		return Ore["Iron"] * SupplyAmount;
	}
	if (SupplyID === "SilverOre") {
		return Ore["Silver"] * SupplyAmount;
	}
	if (SupplyID === "SteelOre") {
		return Ore["Steel"] * SupplyAmount;
	}
	if (SupplyID === "GoldOre") {
		if (document.getElementById("GoldGloves").checked === false) {
			return Ore["Gold"] * SupplyAmount;	
		}
		if (document.getElementById("GoldGloves").checked === true) {
			return Ore["GoldGloves"] * SupplyAmount;	
		}
	}
	if (SupplyID === "MithrilOre") {
		return Ore["Mithril"] * SupplyAmount;
	}
	if (SupplyID === "AdamantOre") {
		return Ore["Adamant"] * SupplyAmount;
	}
	if (SupplyID === "RuniteOre") {
		return Ore["Runite"] * SupplyAmount;
	}
	
	//Making Bars into Items
	if (SupplyID === "BronzeBar") {
		return Bar["Bronze"] * SupplyAmount;
	}
	if (SupplyID === "IronBar") {
		return Bar["Iron"] * SupplyAmount;
	}
	if (SupplyID === "SteelBar") {
		return Bar["Steel"] * SupplyAmount;
	}
	if (SupplyID === "MithrilBar") {
		return Bar["Mithril"] * SupplyAmount;
	}
	if (SupplyID === "AdamantBar") {
		return Bar["Adamant"] * SupplyAmount;
	}
	if (SupplyID === "RuniteBar") {
		return Bar["Runite"] * SupplyAmount;
	}
	else {
		alert("Unknown type of ore/bar, please try again");
	}
}
