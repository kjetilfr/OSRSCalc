window.onload = run;

function run() {
	document.getElementById("CalculateExp").onclick = function() {
		CalculateExp()
	};
	document.getElementById("CalculateSeaweed").onclick = function() {
		SeaweedCalculator()
	};
}

var CurrentExp = 0;

//Crafting categories
var Dhide = {
	Green: 62,
	Blue: 70,
	Red: 78,
	Black: 86
};
var Glassblowing = {
	BeerGlass: 17.5,
	CandleLantern: 19,
	OilLamp: 25,
	Vial: 35,
	Fishbowl: 42.5,
	UnpoweredOrb: 52.5,
	LanternLens: 55,
	LightOrb: 70
};
var Gems = {
	Opal: 15,
	Jade: 20,
	Topaz: 25,
	Sapphire: 50,
	Emerald: 67.5,
	Ruby: 85,
	Diamond: 107.5,
	Dragonstone: 137.5,
	Onyx: 167.5,
	Zenyte: 200
};
var GoldJewellery = {
	GoldRing: 15,
	GoldNecklace: 20,
	GoldBracelet: 25,
	GoldAmulet: 30,
	SapphireRing: 40,
	SapphireNecklace: 55,
	SapphireBracelet: 60,
	SapphireAmulet: 65,
	EmeraldRind: 55,
	EmeraldNecklace: 60,
	EmeraldBracelet: 65,
	EmeraldAmulet: 70,
	RubyRing: 70,
	RubyNecklace: 75,
	RubyBracelet: 80,
	RubyAmulet: 85,
	DiamondRing: 85,
	DiamondNecklace: 90,
	DiamondBracelet: 95,
	DragonstoneRing: 100,
	DragonstoneNecklace: 105,
	DragonstoneBracelet: 110,
	DragonstoneAmulet:150,
	SlayerRing: 15,
	OnyxRing: 115,
	OnyxNecklace: 120,
	OnyxBracelet: 125,
	OnyxAmulet:165,
	ZenyteRing: 150,
	ZenyteNecklace: 165,
	ZenyteBracelet: 180,
	ZenyteAmulet: 200
};
var SilverJewellery = {
	OpalRing: 10,
	OpalNecklace: 35,
	OpalBracelet: 45,
	OpalAmulet: 55,
	JadeRing: 32,
	JadeNecklace: 54,
	JadeBracelet: 60,
	JadeAmulet: 70,
	TopazRing: 35,
	TopazNecklace: 70,
	TopazBracelet: 75,
	TopazAmulet: 80
};
var Battlestaves = {
	Water: 100,
	Earth: 112.5,
	Fire: 125,
	Air: 137.5
};

function CalculateExp() {
	//Check Input Exp value (set to 0 if empty)
    InputExp = document.getElementById("CurrentExp").value;
    if (InputExp === null || InputExp === 0 || InputExp === "") {
		InputExp = 0;
	}
	
	var SeaweedExp = document.getElementById("SeaweedExp").value;
	if (SeaweedExp === null || SeaweedExp === 0 || SeaweedExp === "") {
		SeaweedExp = 0;
	}

	CurrentExp = parseInt(InputExp) + parseInt(SeaweedExp);
	
	var ExperienceGained = 0;
	
    //Go through the Supplies and calculate xp gained
    var countAmountOfSupplies = document.getElementsByClassName("Supplies").length;
    for (i = 0; i < countAmountOfSupplies ; i++) {
		if (document.getElementsByClassName("Supplies")[i].value === null || document.getElementsByClassName("Supplies")[i].value === 0 || document.getElementsByClassName("Supplies")[i].value === "") {
			ExperienceGained += 0;
            continue;
		}else {
			//Calculate Supply experience
            ExperienceGained += CalculateIndividualSuppliesExp(document.getElementsByClassName("Supplies")[i].id, document.getElementsByClassName("Supplies")[i].value);
		}
	}
	//Output stuff
    var NewTotalExp = (parseInt(CurrentExp) + parseInt(ExperienceGained));
    document.getElementById("TotalExp").innerHTML = "New total experience: " + NewTotalExp.toLocaleString();
    var NewLevel = CalculateNewLevel(CurrentExp,ExperienceGained, "Crafting");
    document.getElementById("NewCraftingLevel").innerHTML = "New crafting level: <span id='NewLevel'>" + NewLevel + "</span>, " + PercentToNewLevel(NewTotalExp) + "% to level " + (NewLevel + 1);
}

function SeaweedCalculator() {
	var AmountOfSeaweed = document.getElementById("Seaweed").value;
	var AmountOfGiantSweaweed = document.getElementById("GiantSeaweed").value;
	
	if (AmountOfSeaweed === null || AmountOfSeaweed === 0 || AmountOfSeaweed === "") {
		AmountOfSeaweed = 0;
	}
	if (AmountOfGiantSweaweed === null || AmountOfGiantSweaweed === 0 || AmountOfGiantSweaweed === "") {
		AmountOfGiantSweaweed = 0;
	}
	
	var MoltenGlass = 0;
	
	//Making normal seaweed into molten glass
	MoltenGlass += AmountOfSeaweed * 1.3;
	
	//Making giant seaweed into molten glass
	MoltenGlass += AmountOfGiantSweaweed * 8.75;
	
	//Experience Gained
	var ExperienceGained = (AmountOfSeaweed * 10) + (AmountOfGiantSweaweed * 6 * 10);
	
	//Output
	document.getElementById("ExperienceFromSuperglassMake").innerHTML = "Experience from Superglass make spell: " + ExperienceGained.toLocaleString();
	document.getElementById("NumberOfMoltenglass").innerHTML = "Molten glass made: " + MoltenGlass;
	document.getElementById("Information").innerHTML = "Based on average, might get lucky or unlucky. Using the superglass make spell!";
	
	//Add seaweed xp to total xp
	document.getElementById("SeaweedExp").value = ExperienceGained;
}



function CalculateIndividualSuppliesExp(TypeOfSupply, AmountOfSupplies) {
	var AmountOfSupplies = parseInt(AmountOfSupplies);
    //Things you can make with Dhide
    if (TypeOfSupply === "Greendhide") {
		return Dhide["Green"] * AmountOfSupplies;
	}
	if (TypeOfSupply === "Bluedhide") {
		return Dhide["Blue"] * AmountOfSupplies;
	}
	if (TypeOfSupply === "Reddhide") {
		return Dhide["Red"] * AmountOfSupplies;
	}
	if (TypeOfSupply === "Blackdhide") {
		return Dhide["Black"] * AmountOfSupplies;
	}
	
	//Glassblowing
    if (TypeOfSupply === "Glassblowing") {
		var GlassblowingType = document.getElementById("GlassblowingType").value;
        if (GlassblowingType === "BeerGlass") {
			return Glassblowing["BeerGlass"] * AmountOfSupplies;
		}
		if (GlassblowingType === "CandleLantern") {
			return Glassblowing["CandleLantern"] * AmountOfSupplies;
		}
		if (GlassblowingType === "OilLamp") {
			return Glassblowing["OilLamp"] * AmountOfSupplies;
		}
		if (GlassblowingType === "Vial") {
			return Glassblowing["Vial"] * AmountOfSupplies;
		}
		if (GlassblowingType === "Fishbowl") {
			return Glassblowing["Fishbowl"] * AmountOfSupplies;
		}
		if (GlassblowingType === "UnpoweredOrb") {
			return Glassblowing["UnpoweredOrb"] * AmountOfSupplies;
		}
		if (GlassblowingType === "LanternLens") {
			return Glassblowing["LanternLens"] * AmountOfSupplies;
		}
		if (GlassblowingType === "LightOrb") {
			return Glassblowing["LightOrb"] * AmountOfSupplies;
		}
	}
	if (TypeOfSupply === "Glassblowing2") {
		var GlassblowingType = document.getElementById("GlassblowingType2").value;
        if (GlassblowingType === "BeerGlass") {
			return Glassblowing["BeerGlass"] * AmountOfSupplies;
		}
		if (GlassblowingType === "CandleLantern") {
			return Glassblowing["CandleLantern"] * AmountOfSupplies;
		}
		if (GlassblowingType === "OilLamp") {
			return Glassblowing["OilLamp"] * AmountOfSupplies;
		}
		if (GlassblowingType === "Vial") {
			return Glassblowing["Vial"] * AmountOfSupplies;
		}
		if (GlassblowingType === "Fishbowl") {
			return Glassblowing["Fishbowl"] * AmountOfSupplies;
		}
		if (GlassblowingType === "UnpoweredOrb") {
			return Glassblowing["UnpoweredOrb"] * AmountOfSupplies;
		}
		if (GlassblowingType === "LanternLens") {
			return Glassblowing["LanternLens"] * AmountOfSupplies;
		}
		if (GlassblowingType === "LightOrb") {
			return Glassblowing["LightOrb"] * AmountOfSupplies;
		}
	}
	
	//Things you can make with cutting gems
    if (TypeOfSupply === "Opal") {
		return Gems["Opal"] * AmountOfSupplies;
	}
	if (TypeOfSupply === "Jade") {
		return Gems["Jade"] * AmountOfSupplies;
	}
	if (TypeOfSupply === "Topaz") {
		return Gems["Topaz"] * AmountOfSupplies;
	}
	if (TypeOfSupply === "Sapphire") {
		return Gems["Sapphire"] * AmountOfSupplies;
	}
	if (TypeOfSupply === "Emerald") {
		return Gems["Emerald"] * AmountOfSupplies;
	}
	if (TypeOfSupply === "Ruby") {
		return Gems["Ruby"] * AmountOfSupplies;
	}
	if (TypeOfSupply === "Diamond") {
		return Gems["Diamond"] * AmountOfSupplies;
	}
	if (TypeOfSupply === "Dragonstone") {
		return Gems["Dragonstone"] * AmountOfSupplies;
	}
	if (TypeOfSupply === "Onyx") {
		return Gems["Onyx"] * AmountOfSupplies;
	}
	if (TypeOfSupply === "Zenyte") {
		return Gems["Zenyte"] * AmountOfSupplies;
	}
	
	//Silver jewellery
	//Opal
	if (TypeOfSupply === "OpalJewellery") {
		var OpalType = document.getElementById("OpalType").value;
        if (OpalType === "OpalRing") {
			return SilverJewellery["OpalRing"] * AmountOfSupplies;
		}
		if (OpalType === "OpalNecklace") {
			return SilverJewellery["OpalNecklace"] * AmountOfSupplies;
		}
		if (OpalType === "OpalBracelet") {
			return SilverJewellery["OpalBracelet"] * AmountOfSupplies;
		}
		if (OpalType === "OpalAmulet") {
			return SilverJewellery["OpalAmulet"] * AmountOfSupplies;
		}
	}
	//Jade
	if (TypeOfSupply === "JadeJewellery") {
		var JadeType = document.getElementById("JadeType").value;
        if (JadeType === "JadeRing") {
			return SilverJewellery["JadeRing"] * AmountOfSupplies;
		}
		if (JadeType === "JadeNecklace") {
			return SilverJewellery["JadeNecklace"] * AmountOfSupplies;
		}
		if (JadeType === "JadeBracelet") {
			return SilverJewellery["JadeBracelet"] * AmountOfSupplies;
		}
		if (JadeType === "JadeAmulet") {
			return SilverJewellery["JadeAmulet"] * AmountOfSupplies;
		}
	}
	//Topaz
	if (TypeOfSupply === "TopazJewellery") {
		var TopazType = document.getElementById("TopazType").value;
        if (TopazType === "TopazRing") {
			return SilverJewellery["TopazRing"] * AmountOfSupplies;
		}
		if (TopazType === "TopazNecklace") {
			return SilverJewellery["TopazNecklace"] * AmountOfSupplies;
		}
		if (TopazType === "TopazBracelet") {
			return SilverJewellery["TopazBracelet"] * AmountOfSupplies;
		}
		if (TopazType === "TopazAmulet") {
			return SilverJewellery["TopazAmulet"] * AmountOfSupplies;
		}
	}
	
	
	//Gold jewellery
	//Gold
	if (TypeOfSupply === "GoldJewellery") {
		var Type = document.getElementById("GoldType").value;
        if (Type === "GoldRing") {
			return GoldJewellery["GoldRing"] * AmountOfSupplies;
		}
		if (Type === "GoldNecklace") {
			return GoldJewellery["GoldNecklace"] * AmountOfSupplies;
		}
		if (Type === "GoldBracelet") {
			return GoldJewellery["GoldBracelet"] * AmountOfSupplies;
		}
		if (Type === "GoldAmulet") {
			return GoldJewellery["GoldAmulet"] * AmountOfSupplies;
		}
	}
	//Sapphire
	if (TypeOfSupply === "SapphireJewellery") {
		var Type = document.getElementById("SapphireType").value;
        if (Type === "SapphireRing") {
			return GoldJewellery["SapphireRing"] * AmountOfSupplies;
		}
		if (Type === "SapphireNecklace") {
			return GoldJewellery["SapphireNecklace"] * AmountOfSupplies;
		}
		if (Type === "SapphireBracelet") {
			return GoldJewellery["SapphireBracelet"] * AmountOfSupplies;
		}
		if (Type === "SapphireAmulet") {
			return GoldJewellery["SapphireAmulet"] * AmountOfSupplies;
		}
	}
	//Emerald
	if (TypeOfSupply === "EmeraldJewellery") {
		var Type = document.getElementById("EmeraldType").value;
        if (Type === "EmeraldRing") {
			return GoldJewellery["EmeraldRing"] * AmountOfSupplies;
		}
		if (Type === "EmeraldNecklace") {
			return GoldJewellery["EmeraldNecklace"] * AmountOfSupplies;
		}
		if (Type === "EmeraldBracelet") {
			return GoldJewellery["EmeraldBracelet"] * AmountOfSupplies;
		}
		if (Type === "EmeraldAmulet") {
			return GoldJewellery["EmeraldAmulet"] * AmountOfSupplies;
		}
	}
	//Ruby
	if (TypeOfSupply === "RubyJewellery") {
		var Type = document.getElementById("RubyType").value;
        if (Type === "RubyRing") {
			return GoldJewellery["RubyRing"] * AmountOfSupplies;
		}
		if (Type === "RubyNecklace") {
			return GoldJewellery["RubyNecklace"] * AmountOfSupplies;
		}
		if (Type === "RubyBracelet") {
			return GoldJewellery["RubyBracelet"] * AmountOfSupplies;
		}
		if (Type === "RubyAmulet") {
			return GoldJewellery["RubyAmulet"] * AmountOfSupplies;
		}
	}
	//Diamond
	if (TypeOfSupply === "DiamondJewellery") {
		var Type = document.getElementById("DiamondType").value;
        if (Type === "DiamondRing") {
			return GoldJewellery["DiamondRing"] * AmountOfSupplies;
		}
		if (Type === "DiamondNecklace") {
			return GoldJewellery["DiamondNecklace"] * AmountOfSupplies;
		}
		if (Type === "DiamondBracelet") {
			return GoldJewellery["DiamondBracelet"] * AmountOfSupplies;
		}
		if (Type === "DiamondAmulet") {
			return GoldJewellery["DiamondAmulet"] * AmountOfSupplies;
		}
	}
	//Dragonstone
	if (TypeOfSupply === "DragonstoneJewellery") {
		var Type = document.getElementById("DragonstoneType").value;
        if (Type === "DragonstoneRing") {
			return GoldJewellery["DragonstoneRing"] * AmountOfSupplies;
		}
		if (Type === "DragonstoneNecklace") {
			return GoldJewellery["DragonstoneNecklace"] * AmountOfSupplies;
		}
		if (Type === "DragonstoneBracelet") {
			return GoldJewellery["DragonstoneBracelet"] * AmountOfSupplies;
		}
		if (Type === "DragonstoneAmulet") {
			return GoldJewellery["DragonstoneAmulet"] * AmountOfSupplies;
		}
	}
	//Onyx
	if (TypeOfSupply === "OnyxJewellery") {
		var Type = document.getElementById("OnyxType").value;
        if (Type === "OnyxRing") {
			return GoldJewellery["OnyxRing"] * AmountOfSupplies;
		}
		if (Type === "OnyxNecklace") {
			return GoldJewellery["OnyxNecklace"] * AmountOfSupplies;
		}
		if (Type === "OnyxBracelet") {
			return GoldJewellery["OnyxBracelet"] * AmountOfSupplies;
		}
		if (Type === "OnyxAmulet") {
			return GoldJewellery["OnyxAmulet"] * AmountOfSupplies;
		}
	}
	//Zenyte
	if (TypeOfSupply === "ZenyteJewellery") {
		var Type = document.getElementById("ZenyteType").value;
        if (Type === "ZenyteRing") {
			return GoldJewellery["ZenyteRing"] * AmountOfSupplies;
		}
		if (Type === "ZenyteNecklace") {
			return GoldJewellery["ZenyteNecklace"] * AmountOfSupplies;
		}
		if (Type === "ZenyteBracelet") {
			return GoldJewellery["ZenyteBracelet"] * AmountOfSupplies;
		}
		if (Type === "ZenyteAmulet") {
			return GoldJewellery["ZenyteAmulet"] * AmountOfSupplies;
		}
	}
	//Slayer Ring
	if (TypeOfSupply === "SlayerRing") {
		return GoldJewellery["SlayerRing"] * AmountOfSupplies;
	}
	
	//Weaponry
	if (TypeOfSupply === "WaterBattlestaff") {
		return Battlestaves["Water"] * AmountOfSupplies;
	}
	if (TypeOfSupply === "EarthBattlestaff") {
		return Battlestaves["Earth"] * AmountOfSupplies;
	}
	if (TypeOfSupply === "FireBattlestaff") {
		return Battlestaves["Fire"] * AmountOfSupplies;
	}
	if (TypeOfSupply === "AirBattlestaff") {
		return Battlestaves["Air"] * AmountOfSupplies;
	}
	
	else {
		alert("Unknown type, please try again");
	}
}
