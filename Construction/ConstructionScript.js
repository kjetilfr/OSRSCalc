window.onload = run;

function run() {
	document.getElementById("CalculateExp").onclick = function() {
		CalculateExp()
	};
}

//Herbs
var CurrentExp = 0;

var Plank = {
	Experience: 29,
	Cost: 100
};
var OakPlank = {
	Experience: 60,
	Cost: 250
};
var TeakPlank = {
	Experience: 90,
	Cost: 500
};
var MahoganyPlank = {
	Experience: 140,
	Cost: 1500
};

function CalculateExp() {
	//Check currentExp value (set to 0 if empty)
    CurrentExp = document.getElementById("CurrentExp").value;
    if (CurrentExp === null || CurrentExp === 0 || CurrentExp === "") {
		CurrentExp = 0;
	}
	var ExperienceGained = 0;
	
	var TotalCostOfConstruction = 0;
	

	
    //Go through the Construcion that have input and calculate xp gained
    var countAmountOfPlankInput = document.getElementsByClassName("Plank").length;
    for (i = 0 ; i < countAmountOfPlankInput ; i++) {
		if (document.getElementsByClassName("Plank")[i].value === null || document.getElementsByClassName("Plank")[i].value === 0 || document.getElementsByClassName("Plank")[i].value === "") {
			ExperienceGained += 0;
            continue;
		}else {
			//Calculate plank experience
			var TypeOfPlank = document.getElementsByClassName("Plank")[i].id;
			var AmountOfPlanks = document.getElementsByClassName("Plank")[i].value;
            ExperienceGained += CalculateIndividualConstructionExp(TypeOfPlank, AmountOfPlanks);
		}
	}
	
	var countAmountOfLogsInput = document.getElementsByClassName("Log").length;
	for (i = 0 ; i < countAmountOfLogsInput ; i++) {
		if (document.getElementsByClassName("Log")[i].value === null || document.getElementsByClassName("Log")[i].value === 0 || document.getElementsByClassName("Log")[i].value === "") {
			ExperienceGained += 0;
            continue;
		}else {
			//Calculate log experience
			var TypeOfLog = document.getElementsByClassName("Log")[i].id;
			var AmountOfLogs = document.getElementsByClassName("Log")[i].value;
            ExperienceGained += CalculateIndividualConstructionExp(TypeOfLog, AmountOfLogs);
			
			//Calculate cost to make planks and use butler
			TotalCostOfConstruction += CostOfConstruction(TypeOfLog, AmountOfLogs, AmountOfPlanks);
		}
	}

	//Output new total experience
    var NewTotalExp = (parseInt(CurrentExp) + parseInt(ExperienceGained));
    document.getElementById("TotalExp").innerHTML = "New total experience: " + NewTotalExp;
	//Outputs new level and % to new level
    var NewLevel = CalculateNewLevel(CurrentExp,ExperienceGained, "Construction");
    document.getElementById("NewConstructionLevel").innerHTML = "New construction level: " + NewLevel + ", " + PercentToNewLevel(NewTotalExp) + "% to level " + (NewLevel + 1);
	//Outputs totalcost
	document.getElementById("CostResponse").innerHTML = "Cost: " + TotalCostOfConstruction + "gp";
	}
	
function CostOfConstruction (TypeOfLog, AmountOfLogs, AmountOfPlanks) {
	//Checkboxes true of false
	var CostOfPlanks = document.getElementById("CostOfPlanks").checked;
	var CostOfButlerMakingPlanks = document.getElementById("CostOfButlerMakingPlanks").checked;
	var CostOfConstructionPlanks = document.getElementById("CostOfConstructionPlanks").checked;
	
	//Declare variables
	var CostToMakePlanks = 0;
	
	//Adds Amount of logs to Total to find loss from butler
	var TotalAmountOfLogs = 0;
	TotalAmountOfLogs += AmountOfLogs;
	
	var AmountOfLogs;
	if (AmountOfLogs === null || AmountOfLogs === 0 || AmountOfLogs === "" || AmountOfLogs === undefined) {
			AmountOfLogs = 0;
		}
	var AmountOfPlanks;
	if (AmountOfPlanks === null || AmountOfPlanks === 0 || AmountOfPlanks === "" || AmountOfPlanks === undefined) {
			AmountOfPlanks = 0;
		}
	
	var TotalAmountOfLogPlank = 0;
	TotalAmountOfLogPlank += AmountOfLogs + AmountOfPlanks;
	
	//Check if 'CostOfPlanks' is checked
	if (CostOfPlanks === true) {
		//Checks if type of log is equal to Normal log
		if (TypeOfLog === "NormalLog") {
			//Multiples cost of to make 1 plank by the number of normal logs.
			CostToMakePlanks += Plank["Cost"] * AmountOfLogs;
		}
		if (TypeOfLog === "OakLog") {
			//Multiples cost of to make 1 oak plank by the number of normal logs.
			CostToMakePlanks += OakPlank["Cost"] * AmountOfLogs;
		}
		if (TypeOfLog === "TeakLog") {
			//Multiples cost of to make 1 teak plank by the number of normal logs.
			CostToMakePlanks += TeakPlank["Cost"] * AmountOfLogs;
		}
		if (TypeOfLog === "MahoganyLog") {
			//Multiples cost of to make 1 mahogany plank by the number of normal logs.
			CostToMakePlanks += MahoganyPlank["Cost"] * AmountOfLogs;
		}
	}
	//Cost of butler making planks
	if (CostOfButlerMakingPlanks === true) {
		//Checks how many planks butler makes at a time
		var AmountOfMakingPlanksAtATime = document.getElementById("AmountOfMakingPlanks").options[AmountOfMakingPlanks.selectedIndex].value;
		
		CostToMakePlanks += Math.ceil(TotalAmountOfLogs / AmountOfMakingPlanksAtATime / 8) * 10000;
	}
	
	//Cost of butler making planks
	if (CostOfConstructionPlanks === true) {
		//Checks how many planks butler makes at a time
		var AmountOfUsingPlanksAtATime = document.getElementById("AmountOfUsingPlanks").options[AmountOfUsingPlanks.selectedIndex].value;
		
		CostToMakePlanks += Math.ceil(TotalAmountOfLogPlank / AmountOfUsingPlanksAtATime / 8) * 10000;
	}
	
	return CostToMakePlanks;
}
	
function CalculateIndividualConstructionExp(TypeOfPlank, AmountOfPlanks) {
	var AmountOfPlanks = parseInt(AmountOfPlanks);
    //Things you can make with Normal Plank
    if (TypeOfPlank === "NormalPlank" || TypeOfPlank === "NormalLog") {
		return Plank["Experience"] * AmountOfPlanks;
	}
	if (TypeOfPlank === "OakPlank" || TypeOfPlank === "OakLog") {
		return OakPlank["Experience"] * AmountOfPlanks;
	}
	if (TypeOfPlank === "TeakPlank" || TypeOfPlank === "TeakLog") {
		return TeakPlank["Experience"] * AmountOfPlanks;
	}
	if (TypeOfPlank === "MahoganyPlank" || TypeOfPlank === "MahoganyLog") {
		return MahoganyPlank["Experience"] * AmountOfPlanks;
	}
	else {
		alert("Unknown type of herb, please try again");
	}
}
