window.onload = run;

function run() {
	document.getElementById("CalculateExp").onclick = function() {
		CalculateExp()
	};
}

//Planks
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
	
	var TotalAmountOfLogPlank = 0;
	
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
			
			
			if (isNaN(AmountOfPlanks)) {
				TotalAmountOfLogPlank += 0;
			}
			else {
				TotalAmountOfLogPlank += parseInt(AmountOfPlanks);
			}
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
			
			//Calculate cost to make planks
			TotalCostOfConstruction += TotalCostOfPlanks(TypeOfLog, AmountOfLogs);
			
			TotalCostOfConstruction += TotalCostOfMakingPlanks(AmountOfLogs);
	
			if (isNaN(AmountOfLogs)) {
				TotalAmountOfLogPlank += 0;
			}
			else {
				TotalAmountOfLogPlank += parseInt(AmountOfLogs);
			}
			
	}
		
	}

	TotalCostOfConstruction += TotalCostOfUnnotingPlanks(TotalAmountOfLogPlank);
	
	//Output new total experience
    var NewTotalExp = (parseInt(CurrentExp) + parseInt(ExperienceGained));
    document.getElementById("TotalExp").innerHTML = "New total experience: " + NewTotalExp.toLocaleString();
	
	//Outputs new level and % to new level
	if (CurrentExp + ExperienceGained >= 200000) {
		document.getElementById("NewConstructionLevel").innerHTML = "Congratulations! You reached 200M experience.";
	} else {
		var NewLevel = CalculateNewLevel(CurrentExp,ExperienceGained, "Construction");
		document.getElementById("NewConstructionLevel").innerHTML = "New construction level: <span id='NewLevel'>" + NewLevel + "</span>, " + PercentToNewLevel(NewTotalExp) + "% to level " + (NewLevel + 1);
	}
	//Outputs totalcost
	document.getElementById("CostResponse").innerHTML = "Cost: " + TotalCostOfConstruction.toLocaleString() + "gp";
}
	
function TotalCostOfPlanks (TypeOfLog, AmountOfLogs) {
	//Checkboxes true of false
	var CostOfPlanks = document.getElementById("CostOfPlanks").checked;

	var AmountOfLogs = parseInt(AmountOfLogs);
	if (AmountOfLogs === null || AmountOfLogs === 0 || AmountOfLogs === "" || AmountOfLogs === undefined || isNaN(AmountOfLogs)) {
			AmountOfLogs = 0;
		}
	
	//Declare variables
	var CostToMakePlanks = 0;
	
	//Adds Amount of logs to Total to find loss from butler
	var TotalAmountOfLogs = 0;

	var TotalAmountOfLogPlank = 0;
	
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
	
	return CostToMakePlanks;
}

function TotalCostOfMakingPlanks(AmountOfLogs) {
	
	var AmountOfPlanksAtATime = document.getElementById("AmountOfMakingPlanks").options[AmountOfMakingPlanks.selectedIndex].value;
	
	return Math.ceil(AmountOfLogs / AmountOfPlanksAtATime / 8) * 10000;
}

function TotalCostOfUnnotingPlanks(AmountOfPlankLogs) {
	
	var UnnoteAmount = document.getElementById("AmountOfUsingPlanks").options[AmountOfUsingPlanks.selectedIndex].value;
	
	return Math.ceil(AmountOfPlankLogs / UnnoteAmount / 8) * 10000;
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
		alert("Unknown type of plank, please try again");
	}
}
