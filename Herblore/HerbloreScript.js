window.onload = run;

function run() {
	document.getElementById("CalculateExp").onclick = function() {
		CalculateExp()
	};
}

//Herbs
var CurrentExp = 0;
var Guam = {
	Clean: 2.5,
	AttackPotion: 25,
	GuamTars: 30
};
var Marrentill = {
	Clean: 3.8,
	Antipoison: 37.5,
	MarrentillTars: 42.5
};
var Tarromin = {
	Clean: 5,
	StrengthPotion: 50,
	Serum207: 50,
	TarrominTars: 55
};
var Harralander = {
	Clean: 6.3,
	EnergyPotion: 67.5,
	CombatPotion: 84,
	RestorePotion: 62.5,
	CompostPotion: 60,
	HarralanderTars: 72.5
};
var Ranarr = {
	Clean: 7.5,
	PrayerPotion: 87.5,
	DefencePotion: 75
};
var Toadflax = {
	Clean: 8,
	SaradominBrew: 180,
	AntidotePlus: 155,
	AgilityPotion: 80
};
var Irit = {
	Clean: 8.8,
	SuperAttack: 100,
	SuperAntipoison: 106.3,
	AntidotePlusPlus: 177.5
};
var Avantoe = {
	Clean: 10,
	SuperEnergyPotion: 117.5,
	FishingPotion: 112.5,
	HunterPotion: 120
};
var Kwuarm = {
	Clean: 11.3,
	SuperStrength: 125,
	WeaponPoison: 137.5
};
var Snapdragon = {
	Clean: 11.8,
	SuperRestore: 142.5
};
var Cadantine = {
	Clean: 12.5,
	SuperDefence: 150,
	BastionPotion: 155,
	BattlemagePotion: 155
};
var Lantadyme = {
	Clean: 13.1,
	AntifirePotion: 157.5,
	MagicPotion: 172.5
};
var DwarfWeed = {
	Clean: 13.8,
	RangingPotion: 162.5
};
var Torstol = {
	Clean: 15,
	SuperCombatPotion: 150,
	AntivenomPlus: 125,
	ZamorakBrew: 175
};

//Special
var Stamina = {
	Stamina: 25.5
};
var ExtendedAntifire = {
	ExtendedAntifire: 27.5
};
var SuperAntifire = {
	SuperAntifire: 130
};
var ExtendedSuperAntifire = {
	ExtendedSuperAntifire: 40
};
var Antivenom = {
	Antivenom: 30
};

function CalculateExp() {
	//Check currentExp value (set to 0 if empty(
    CurrentExp = document.getElementById("CurrentExp").value;
    if (CurrentExp === null || CurrentExp === 0 || CurrentExp === "") {
		CurrentExp = 0;
	}var ExperienceGained = 0;
    //Go through the HERBS and calculate xp gained
	var ActualMultiplier = GetMultiplier();
    var countAmountOfHerbs = document.getElementsByClassName("Herb").length;
    for (i = 0; i < countAmountOfHerbs; i++) {
		if (document.getElementsByClassName("Herb")[i].value === null || document.getElementsByClassName("Herb")[i].value === 0 || document.getElementsByClassName("Herb")[i].value === "") {
			ExperienceGained += 0;
            continue;
		}else {
			//Calculate potion experience
            ExperienceGained += CalculateIndividualHerbExp(document.getElementsByClassName("Herb")[i].id,
			document.getElementsByClassName("Herb")[i].value) * ActualMultiplier;
            //Calculate grimy experience
            ExperienceGained += CalculateGrimyExp(document.getElementsByClassName("Herb")[i].id,
			document.getElementsByClassName("Herb")[i].value) * ActualMultiplier;
		}
	}//Go through the SPECIAL and calculate xp gained
	
    var countAmountOfSpecial = document.getElementsByClassName("Special").length;
    for (i = 0; i < countAmountOfSpecial; i++) {
		if (document.getElementsByClassName("Special")[i].value === null || document.getElementsByClassName("Special")[i].value === 0 || document.getElementsByClassName("Special")[i].value === "") {
			ExperienceGained += 0;
            continue;
		}
		else {
			//Calculate potion experience
            ExperienceGained += CalculateIndividualSpecialExp(document.getElementsByClassName("Special")[i].id) * ActualMultiplier;
		}
	}
	
	
	//Output stuff
    var NewTotalExp = (parseInt(CurrentExp) + parseInt(ExperienceGained));
    document.getElementById("TotalExp").innerHTML = "New total experience: " + NewTotalExp.toLocaleString();
    var NewLevel = CalculateNewLevel(CurrentExp,ExperienceGained, "Herblore");
    document.getElementById("NewHerbloreLevel").innerHTML = "New herblore level: <span id='NewLevel'>" + NewLevel + "</span>, " + PercentToNewLevel(NewTotalExp) + "% to level " + (NewLevel + 1);
}

function CalculateIndividualSpecialExp(TypeOfSpecial) {
	var AmountOfDoses = 1;
    //get the dose of potion from the document
    var AmountOfDoseType = document.getElementById("DoseOfPotion" + TypeOfSpecial);
	var AmountOfPotions = document.getElementsByClassName("Special");
    //Check if xp is based on doses
    if (AmountOfDoseType === null) {
		AmountOfDoses = 1;
	}else {
		//find the selected index
        AmountOfDoses = AmountOfDoseType.options[AmountOfDoseType.selectedIndex].value;
	}//Stamina potion
    if (TypeOfSpecial === "Stamina") {
		return Stamina["Stamina"] * AmountOfDoses * AmountOfPotions[0].value;
	}//Super antifire potion
    if (TypeOfSpecial === "SuperAntifire") {
		return SuperAntifire["SuperAntifire"] * AmountOfPotions[1].value;
	}//Extended antifire potion
    if (TypeOfSpecial === "ExtendedAntifire") {
		return ExtendedAntifire["ExtendedAntifire"] * AmountOfDoses * AmountOfPotions[2].value;
	}//Extended Super antifire potion
    if (TypeOfSpecial === "ExtendedSuperAntifire") {
		return ExtendedSuperAntifire["ExtendedSuperAntifire"] * AmountOfDoses * AmountOfPotions[3].value;
	}//Anti-venom potion
    if (TypeOfSpecial === "Antivenom") {
		return Antivenom["Antivenom"]* AmountOfDoses * AmountOfPotions[4].value;
	}
}

function CalculateIndividualHerbExp(TypeOfHerb, AmountOfHerb) {
	var AmountOfHerbs = parseInt(AmountOfHerb);
    //Things you can make with Guam
    if (TypeOfHerb === "Guam") {
		var GuamType = document.getElementById("GuamType").value;
        if (GuamType === "AttackPotion") {
			return Guam["AttackPotion"]* AmountOfHerbs;
		}if (GuamType === "GuamTars") {
			return Guam["GuamTars"]* AmountOfHerbs;
		}
	}//Things you can make with Marrentill
    if (TypeOfHerb === "Marrentill") {
		var MarrentillType = document.getElementById("MarrentillType").value;
        if (MarrentillType === "Antipoison") {
			return Marrentill["Antipoison"]* AmountOfHerbs;
		}if (MarrentillType === "MarrentillTars") {
			return Marrentill["MarrentillTars"]* AmountOfHerbs;
		}
	}//Things you can make with Tarromin
    if (TypeOfHerb === "Tarromin") {
		var TarrominType = document.getElementById("TarrominType").value;
        if (TarrominType === "StrengthPotion") {
			return Tarromin["StrengthPotion"]* AmountOfHerbs;
		}if (TarrominType === "Serum207") {
			return Tarromin["Serum207"]* AmountOfHerbs;
		}if (TarrominType === "TarrominTars") {
			return Tarromin["TarrominTars"]* AmountOfHerbs;
		}
	}//Things you can make with Harralander
    if (TypeOfHerb === "Harralander") {
		var HarralanderType = document.getElementById("HarralanderType").value;
        if (HarralanderType === "EnergyPotion") {
			return Harralander["EnergyPotion"]* AmountOfHerbs;
		}if (HarralanderType === "CompostPotion") {
			return Harralander["CompostPotion"]* AmountOfHerbs;
		}if (HarralanderType === "RestorePotion") {
			return Harralander["RestorePotion"]* AmountOfHerbs;
		}if (HarralanderType === "CombatPotion") {
			return Harralander["CombatPotion"]* AmountOfHerbs;
		}if (HarralanderType === "HarralanderTars") {
			return Harralander["HarralanderTars"]* AmountOfHerbs;
		}
	}//Things you can make with Ranarr
    if (TypeOfHerb === "Ranarr") {
		var RanarrType = document.getElementById("RanarrType").value;
        if (RanarrType === "PrayerPotion") {
			return Ranarr["PrayerPotion"]* AmountOfHerbs;
		}if (RanarrType === "DefencePotion") {
			return Ranarr["DefencePotion"]* AmountOfHerbs;
		}
	}//Things you can make with Toadflax
    if (TypeOfHerb === "Toadflax") {
		var ToadflaxType = document.getElementById("ToadflaxType").value;
        if (ToadflaxType === "SaradominBrew") {
			return Toadflax["SaradominBrew"]* AmountOfHerbs;
		}if (ToadflaxType === "AntidotePlus") {
			return Toadflax["AntidotePlus"]* AmountOfHerbs;
		}if (ToadflaxType === "AgilityPotion") {
			return Toadflax["AgilityPotion"]* AmountOfHerbs;
		}
	}//Things you can make with Irit
    if (TypeOfHerb === "Irit") {
		var IritType = document.getElementById("IritType").value;
        if (IritType === "SuperAttack") {
			return Irit["SuperAttack"]* AmountOfHerbs;
		}if (IritType === "SuperAntipoison") {
			return Irit["SuperAntipoison"]* AmountOfHerbs;
		}if (IritType === "AntidotePlusPlus") {
			return Irit["AntidotePlusPlus"]* AmountOfHerbs;
		}
	}//Things you can make with Avantoe
    if (TypeOfHerb === "Avantoe") {
		var AvantoeType = document.getElementById("AvantoeType").value;
        if (AvantoeType === "SuperEnergyPotion") {
			return Avantoe["SuperEnergyPotion"]* AmountOfHerbs;
		}if (AvantoeType === "FishingPotion") {
			return Avantoe["FishingPotion"]* AmountOfHerbs;
		}if (AvantoeType === "HunterPotion") {
			return Avantoe["HunterPotion"]* AmountOfHerbs;
		}
	}//Things you can make with Kwuarm
    if (TypeOfHerb === "Kwuarm") {
		var KwuarmType = document.getElementById("KwuarmType").value;
        if (KwuarmType === "SuperStrength") {
			return Kwuarm["SuperStrength"]* AmountOfHerbs;
		}if (KwuarmType === "WeaponPoison") {
			return Kwuarm["WeaponPoison"]* AmountOfHerbs;
		}
	}//Things you can make with Snapdragon
    if (TypeOfHerb === "Snapdragon") {
		var SnapdragonType = document.getElementById("SnapdragonType").value;
        if (SnapdragonType === "SuperRestore") {
			return Snapdragon["SuperRestore"]* AmountOfHerbs;
		}
	}//Things you can make with Cadantine
    if (TypeOfHerb === "Cadantine") {
		var CadantineType = document.getElementById("CadantineType").value;
        if (CadantineType === "SuperDefence") {
			return Cadantine["SuperDefence"]* AmountOfHerbs;
		}if (CadantineType === "BastionPotion") {
			return Cadantine["BastionPotion"]* AmountOfHerbs;
		}if (CadantineType === "BattlemagePotion") {
			return Cadantine["BattlemagePotion"]* AmountOfHerbs;
		}
	}//Things you can make with Lantadyme
    if (TypeOfHerb === "Lantadyme") {
		var LantadymeType = document.getElementById("LantadymeType").value;
        if (LantadymeType === "AntifirePotion") {
			return Lantadyme["AntifirePotion"]* AmountOfHerbs;
		}if (LantadymeType === "MagicPotion") {
			return Lantadyme["MagicPotion"]* AmountOfHerbs;
		}
	}//Things you can make with DwarfWeed
    if (TypeOfHerb === "DwarfWeed") {
		var DwarfWeedType = document.getElementById("DwarfWeedType").value;
        if (DwarfWeedType === "RangingPotion") {
			return DwarfWeed["RangingPotion"]* AmountOfHerbs;
		}
	}//Things you can make with Torstol
    if (TypeOfHerb === "Torstol") {
		var TorstolType = document.getElementById("TorstolType").value;
        if (TorstolType === "SuperCombatPotion") {
			return Torstol["SuperCombatPotion"]* AmountOfHerbs;
		}if (TorstolType === "ZamorakBrew") {
			return Torstol["ZamorakBrew"]* AmountOfHerbs;
		}if (TorstolType === "AntivenomPlus") {
			return Torstol["AntivenomPlus"]* AmountOfHerbs;
		}
	}else {
		alert("Unknown type of herb, please try again");
	}
}

function CalculateGrimyExp(TypeOfHerb, AmountOfHerb) {
	var AmountOfHerbs = parseInt(AmountOfHerb);
    //Grimy Guam true
    if (TypeOfHerb === "Guam") {
		if (document.getElementById("GrimyGuam").checked === true) {
			return Guam["Clean"] * AmountOfHerb;
		}else {
			return 0;
		}
	}if (TypeOfHerb === "Marrentill") {
		if (document.getElementById("GrimyMarrentill").checked === true) {
			return Marrentill["Clean"] * AmountOfHerb;
		}else {
			return 0;
		}
	}if (TypeOfHerb === "Tarromin") {
		if (document.getElementById("GrimyTarromin").checked === true) {
			return Tarromin["Clean"] * AmountOfHerb;
		}else {
			return 0;
		}
	}if (TypeOfHerb === "Harralander") {
		if (document.getElementById("GrimyHarralander").checked === true) {
			return Harralander["Clean"] * AmountOfHerb;
		}else {
			return 0;
		}
	}if (TypeOfHerb === "Ranarr") {
		if (document.getElementById("GrimyRanarr").checked === true) {
			return Ranarr["Clean"] * AmountOfHerb;
		}else {
			return 0;
		}
	}if (TypeOfHerb === "Toadflax") {
		if (document.getElementById("GrimyToadflax").checked === true) {
			return Toadflax["Clean"] * AmountOfHerb;
		}else {
			return 0;
		}
	}if (TypeOfHerb === "Irit") {
		if (document.getElementById("GrimyIrit").checked === true) {
			return Irit["Clean"] * AmountOfHerb;
		}else {
			return 0;
		}
	}if (TypeOfHerb === "Avantoe") {
		if (document.getElementById("GrimyAvantoe").checked === true) {
			return Avantoe["Clean"] * AmountOfHerb;
		}else {
			return 0;
		}
	}if (TypeOfHerb === "Kwuarm") {
		if (document.getElementById("GrimyKwuarm").checked === true) {
			return Kwuarm["Clean"] * AmountOfHerb;
		}else {
			return 0;
		}
	}if (TypeOfHerb === "Snapdragon") {
		if (document.getElementById("GrimySnapdragon").checked === true) {
			return Snapdragon["Clean"] * AmountOfHerb;
		}else {
			return 0;
		}
	}if (TypeOfHerb === "Cadantine") {
		if (document.getElementById("GrimyCadantine").checked === true) {
			return Cadantine["Clean"] * AmountOfHerb;
		}else {
			return 0;
		}
	}if (TypeOfHerb === "Lantadyme") {
		if (document.getElementById("GrimyLantadyme").checked === true) {
			return Lantadyme["Clean"] * AmountOfHerb;
		}else {
			return 0;
		}
	}if (TypeOfHerb === "DwarfWeed") {
		if (document.getElementById("GrimyDwarfWeed").checked === true) {
			return DwarfWeed["Clean"] * AmountOfHerb;
		}else {
			return 0;
		}
	}if (TypeOfHerb === "Torstol") {
		if (document.getElementById("GrimyTorstol").checked === true) {
			return Torstol["Clean"] * AmountOfHerb;
		}else {
			return 0;
		}
	}else {
		alert("Unknown type of grimy herb, please try again");
	}
}

function GetMultiplier() {
//Check Multiplier
	Multiplier = document.getElementById("Multiplier").value;
	if (Multiplier === null || Multiplier === 0 || Multiplier === "") {
		Multiplier = 1;
	    	console.log("Multiplier: 1");
		return(Multiplier);
	} else {
	    	Multiplier = document.getElementById("Multiplier").value;
		console.log(Multiplier);
		return(Multiplier);
	    }	
}
