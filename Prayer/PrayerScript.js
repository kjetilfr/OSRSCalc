window.onload = run;
function run() {
	document.getElementById("CalculateExp").onclick = function() {
		ExpFromHeads()
	};
}
var CurrentExp = 0;
var EnsouledGoblin = {
	prayer:130,
	runes:{
		Nature:1,
		Body:2
	}
};
var EnsouledMonkey = {
	prayer:182,
	runes:{
		Nature:1,
		Body:3
	}
};
			var EnsouledImp = {
	prayer:286,
	runes:{
		Nature:2,
		Body:3
	}
};
var EnsouledMiniotaur = {
	prayer:364,
	runes:{
		Nature:2,
		Body:4
	}
};
var EnsouledScorpion = {
	prayer:454,
	runes:{
		Soul:1,
		Nature:1
	}
};
var EnsouledBear = {
	prayer:480,
	runes:{
		Soul:1,
		Nature:1,
		Body:1
	}
};
var EnsouledUnicorn = {
	prayer:494,
	runes:{
		Soul:1,
		Nature:1,
		Body:2
	}
};
var EnsouledDog = {
	prayer:520,
	runes:{
		Soul:1,
		Nature:2,
		Body:2
	}
};
var EnsouledChaosDruid = {
	prayer:584,
	runes:{
		Soul:1,
		Nature:2,
		Body:3
	}
};
var EnsouledGiant = {
	prayer:650,
	runes:{
		Soul:1,
		Nature:2,
		Body:4
	}
};
var EnsouledOgre = {
	prayer:716,
	runes:{
		Soul:1,
		Nature:3,
		Body:4
	}
};
var EnsouledElf = {
	prayer:754,
	runes:{
		Soul:2,
		Nature:2,
		Body:2
	}
};
var EnsouledTroll = {
	prayer:780,
	runes:{
		Soul:2,
		Nature:2,
		Body:3
	}
};
var EnsouledHorror = {
	prayer:832,
	runes:{
		Soul:2,
		Nature:2,
		Body:4
	}
};
var EnsouledKalphite = {
	prayer:884,
	runes:{
		Soul:2,
		Nature:3,
		Body:4
	}
};
var EnsouledDagannoth = {
	prayer:936,
	runes:{
		Soul:3,
		Nature:3,
		Body:4
	}
};
var EnsouledBloodveld = {
	prayer:1040,
	runes:{
		Soul:2,
		Blood:1,
		Nature:2
	}
};
var EnsouledTzHaar = {
	prayer:1104,
	runes:{
		Soul:2,
		Blood:1,
		Nature:3
	}
};
var EnsouledDemon = {
	prayer:1170,
	runes:{
		Soul:2,
		Blood:1,
		Nature:4
	}
};
var EnsouledAviansie = {
	prayer:1234,
	runes:{
		Soul:3,
		Blood:1,
		Nature:4
	}
};
var EnsouledAbyssal = {
	prayer:1300,
	runes:{
		Soul:4,
		Blood:1,
		Nature:4
	}
};
var EnsouledDragon = {
	prayer:1560,
	runes:{
		Soul:4,
		Blood:2,
		Nature:4
	}
};

function ExpFromHeads () {
	var totalExpGained = 0;
	var totalSoulRunes = 0;
	var totalNatureRunes = 0;
	var totalBloodRunes = 0;
	var totalBodyRunes = 0;
	var Currentxp = document.getElementById("CurrentExp").value;
	if (Currentxp === "") {
		CurrentExp = 0;
	}else {
		CurrentExp = Currentxp;
	}
	var GoblinHeadInput = document.getElementById("EnsouledGoblinHeadAmount");
	if (GoblinHeadInput.value !== null) {
		totalExpGained += CalculateExp(GoblinHeadInput.value, EnsouledGoblin.prayer);
		totalBodyRunes += EnsouledGoblin.runes.Body * GoblinHeadInput.value;
		totalNatureRunes += EnsouledGoblin.runes.Nature * GoblinHeadInput.value;
	}
	var MonkeyHeadInput = document.getElementById("EnsouledMonkeyHeadAmount");
	if (MonkeyHeadInput.value !== null) {
		totalExpGained += CalculateExp(MonkeyHeadInput.value, EnsouledMonkey.prayer);
		totalBodyRunes += EnsouledMonkey.runes.Body * MonkeyHeadInput.value;
		totalNatureRunes += EnsouledMonkey.runes.Nature * MonkeyHeadInput.value;
	}
	var ImpHeadInput = document.getElementById("EnsouledImpHeadAmount");
	if (ImpHeadInput.value !== null) {
		totalExpGained += CalculateExp(ImpHeadInput.value, EnsouledImp.prayer);
		totalBodyRunes += EnsouledImp.runes.Body * ImpHeadInput.value;
		totalNatureRunes += EnsouledImp.runes.Nature * ImpHeadInput.value;
	}
	var MiniotaurHeadInput = document.getElementById("EnsouledMiniotaurHeadAmount");
	if (MiniotaurHeadInput.value !== null) {
		totalExpGained += CalculateExp(MiniotaurHeadInput.value, EnsouledMiniotaur.prayer);
		totalBodyRunes += EnsouledMiniotaur.runes.Body * MiniotaurHeadInput.value;
		totalNatureRunes += EnsouledMiniotaur.runes.Nature * MiniotaurHeadInput.value;
	}
	var ScorpionHeadInput = document.getElementById("EnsouledScorpionHeadAmount");
	if (ScorpionHeadInput.value !== null) {
		totalExpGained += CalculateExp(ScorpionHeadInput.value, EnsouledScorpion.prayer);
		totalSoulRunes += EnsouledScorpion.runes.Soul * ScorpionHeadInput.value;
		totalNatureRunes += EnsouledScorpion.runes.Nature * ScorpionHeadInput.value;
	}
	var BearHeadInput = document.getElementById("EnsouledBearHeadAmount");
	if (BearHeadInput.value !== null) {
		totalExpGained += CalculateExp(BearHeadInput.value, EnsouledBear.prayer);
		totalSoulRunes += EnsouledBear.runes.Soul * BearHeadInput.value;
		totalNatureRunes += EnsouledBear.runes.Nature * BearHeadInput.value;
		totalBodyRunes += EnsouledBear.runes.Body * BearHeadInput.value;
	}
	var UnicornHeadInput = document.getElementById("EnsouledUnicornHeadAmount");
	if (UnicornHeadInput.value !== null) {
		totalExpGained += CalculateExp(UnicornHeadInput.value, EnsouledUnicorn.prayer);
		totalSoulRunes += EnsouledUnicorn.runes.Soul * UnicornHeadInput.value;
		totalNatureRunes += EnsouledUnicorn.runes.Nature * UnicornHeadInput.value;
		totalBodyRunes += EnsouledUnicorn.runes.Body * UnicornHeadInput.value;
	}
	var DogHeadInput = document.getElementById("EnsouledDogHeadAmount");
	if (DogHeadInput.value !== null) {
		totalExpGained += CalculateExp(DogHeadInput.value, EnsouledDog.prayer);
		totalSoulRunes += EnsouledDog.runes.Soul * DogHeadInput.value;
		totalNatureRunes += EnsouledDog.runes.Nature * DogHeadInput.value;
		totalBodyRunes += EnsouledDog.runes.Body * DogHeadInput.value;
	}
	var ChaosDruidHeadInput = document.getElementById("EnsouledChaosDruidHeadAmount");
	if (ChaosDruidHeadInput.value !== null) {
		totalExpGained += CalculateExp(ChaosDruidHeadInput.value, EnsouledChaosDruid.prayer);
		totalSoulRunes += EnsouledChaosDruid.runes.Soul * ChaosDruidHeadInput.value;
		totalNatureRunes += EnsouledChaosDruid.runes.Nature * ChaosDruidHeadInput.value;
		totalBodyRunes += EnsouledChaosDruid.runes.Body * ChaosDruidHeadInput.value;
	}
	var GiantHeadInput = document.getElementById("EnsouledGiantHeadAmount");
	if (GiantHeadInput.value !== null) {
		totalExpGained += CalculateExp(GiantHeadInput.value, EnsouledGiant.prayer);
		totalSoulRunes += EnsouledGiant.runes.Soul * GiantHeadInput.value;
		totalNatureRunes += EnsouledGiant.runes.Nature * GiantHeadInput.value;
		totalBodyRunes += EnsouledGiant.runes.Body * GiantHeadInput.value;
	}var OgreHeadInput = document.getElementById("EnsouledOgreHeadAmount");
	if (OgreHeadInput.value !== null) {
		totalExpGained += CalculateExp(OgreHeadInput.value, EnsouledOgre.prayer);
		totalSoulRunes += EnsouledOgre.runes.Soul * OgreHeadInput.value;
		totalNatureRunes += EnsouledOgre.runes.Nature * OgreHeadInput.value;
		totalBodyRunes += EnsouledOgre.runes.Body * OgreHeadInput.value;
	}
	var ElfHeadInput = document.getElementById("EnsouledElfHeadAmount");
	if (ElfHeadInput.value !== null) {
		totalExpGained += CalculateExp(ElfHeadInput.value, EnsouledElf.prayer);
		totalSoulRunes += EnsouledElf.runes.Soul * ElfHeadInput.value;
		totalNatureRunes += EnsouledElf.runes.Nature * ElfHeadInput.value;
		totalBodyRunes += EnsouledElf.runes.Body * ElfHeadInput.value;
	}
	var TrollHeadInput = document.getElementById("EnsouledTrollHeadAmount");
	if (TrollHeadInput.value !== null) {
		totalExpGained += CalculateExp(TrollHeadInput.value, EnsouledTroll.prayer);
		totalSoulRunes += EnsouledTroll.runes.Soul * TrollHeadInput.value;
		totalNatureRunes += EnsouledTroll.runes.Nature * TrollHeadInput.value;
		totalBodyRunes += EnsouledTroll.runes.Body * TrollHeadInput.value;
	}
	var HorrorHeadInput = document.getElementById("EnsouledHorrorHeadAmount");
	if (HorrorHeadInput.value !== null) {
		totalExpGained += CalculateExp(HorrorHeadInput.value, EnsouledHorror.prayer);
		totalSoulRunes += EnsouledHorror.runes.Soul * HorrorHeadInput.value;
		totalNatureRunes += EnsouledHorror.runes.Nature * HorrorHeadInput.value;
		totalBodyRunes += EnsouledHorror.runes.Body * HorrorHeadInput.value;
	}
	var KalphiteHeadInput = document.getElementById("EnsouledKalphiteHeadAmount");
	if (KalphiteHeadInput.value !== null) {
		totalExpGained += CalculateExp(KalphiteHeadInput.value, EnsouledKalphite.prayer);
		totalSoulRunes += EnsouledKalphite.runes.Soul * KalphiteHeadInput.value;
		totalNatureRunes += EnsouledKalphite.runes.Nature * KalphiteHeadInput.value;
		totalBodyRunes += EnsouledKalphite.runes.Body * KalphiteHeadInput.value;
	}
	var DagannothHeadInput = document.getElementById("EnsouledDagannothHeadAmount");
	if (DagannothHeadInput.value !== null) {
		totalExpGained += CalculateExp(DagannothHeadInput.value, EnsouledDagannoth.prayer);
		totalSoulRunes += EnsouledDagannoth.runes.Soul * DagannothHeadInput.value;
		totalNatureRunes += EnsouledDagannoth.runes.Nature * DagannothHeadInput.value;
		totalBodyRunes += EnsouledDagannoth.runes.Body * DagannothHeadInput.value;
	}
	var BloodveldHeadInput = document.getElementById("EnsouledBloodveldHeadAmount");
	if (BloodveldHeadInput.value !== null) {
		totalExpGained += CalculateExp(BloodveldHeadInput.value, EnsouledBloodveld.prayer);
		totalSoulRunes += EnsouledBloodveld.runes.Soul * BloodveldHeadInput.value;
		totalNatureRunes += EnsouledBloodveld.runes.Nature * BloodveldHeadInput.value;
		totalBloodRunes += EnsouledBloodveld.runes.Blood * BloodveldHeadInput.value;
	}
	var TzHaarHeadInput = document.getElementById("EnsouledTzHaarHeadAmount");
	if (TzHaarHeadInput.value !== null) {
		totalExpGained += CalculateExp(TzHaarHeadInput.value, EnsouledTzHaar.prayer);
		totalSoulRunes += EnsouledTzHaar.runes.Soul * TzHaarHeadInput.value;
		totalNatureRunes += EnsouledTzHaar.runes.Nature * TzHaarHeadInput.value;
		totalBloodRunes += EnsouledTzHaar.runes.Blood * TzHaarHeadInput.value;
	}
	var DemonHeadInput = document.getElementById("EnsouledDemonHeadAmount");
	if (DemonHeadInput.value !== null) {
		totalExpGained += CalculateExp(DemonHeadInput.value, EnsouledDemon.prayer);
		totalSoulRunes += EnsouledDemon.runes.Soul * DemonHeadInput.value;
		totalNatureRunes += EnsouledDemon.runes.Nature * DemonHeadInput.value;
		totalBloodRunes += EnsouledDemon.runes.Blood * DemonHeadInput.value;
	}
	var AviansieHeadInput = document.getElementById("EnsouledAviansieHeadAmount");
	if (AviansieHeadInput.value !== null) {
		totalExpGained += CalculateExp(AviansieHeadInput.value, EnsouledAviansie.prayer);
		totalSoulRunes += EnsouledAviansie.runes.Soul * AviansieHeadInput.value;
		totalNatureRunes += EnsouledAviansie.runes.Nature * AviansieHeadInput.value;
		totalBloodRunes += EnsouledAviansie.runes.Blood * AviansieHeadInput.value;
	}
	var AbyssalHeadInput = document.getElementById("EnsouledAbyssalHeadAmount");
	if (AbyssalHeadInput.value !== null) {
		totalExpGained += CalculateExp(AbyssalHeadInput.value, EnsouledAbyssal.prayer);
		totalSoulRunes += EnsouledAbyssal.runes.Soul * AbyssalHeadInput.value;
		totalNatureRunes += EnsouledAbyssal.runes.Nature * AbyssalHeadInput.value;
		totalBloodRunes += EnsouledAbyssal.runes.Blood * AbyssalHeadInput.value;
	}
	var DragonHeadInput = document.getElementById("EnsouledDragonHeadAmount");
	if (DragonHeadInput.value !== null) {
		totalExpGained += CalculateExp(DragonHeadInput.value, EnsouledDragon.prayer);
		totalSoulRunes += EnsouledDragon.runes.Soul * DragonHeadInput.value;
		totalNatureRunes += EnsouledDragon.runes.Nature * DragonHeadInput.value;
		totalBloodRunes += EnsouledDragon.runes.Blood * DragonHeadInput.value;
	}
	var NewTotalExp = (parseInt(totalExpGained) + parseInt(CurrentExp) + Bones());
	document.getElementById("TotalExp").innerHTML = NewTotalExp.toLocaleString() + " prayer experience";
	
	var NewLevel = CalculateNewLevel(CurrentExp, totalExpGained, "Prayer");
	document.getElementById("NewPrayerLevel").innerHTML = "Your new prayer level is <span id='NewLevel'>" + NewLevel + "</span>, " + PercentToNewLevel(NewTotalExp) + "% to level " + (NewLevel + 1);
	
	var soulRuneImg = "<img alt='Picture of a soul rune' src='https://vignette.wikia.nocookie.net/2007scape/images/9/9b/Soul_rune.png/revision/latest/scale-to-width-down/20?cb=20151107053235' />";
	var natureRuneImg = "<img alt='Picture of a nature rune' src='https://vignette.wikia.nocookie.net/2007scape/images/8/88/Nature_rune.png/revision/latest/scale-to-width-down/20?cb=20151107053234' />"
	var bodyRuneImg = "<img alt='Picture of a body rune' src='https://vignette.wikia.nocookie.net/2007scape/images/f/f5/Body_rune.png/revision/latest/scale-to-width-down/20?cb=20151107053228' />"
	var bloodRuneImg = "<img alt='Picture of a blood rune' src='https://vignette.wikia.nocookie.net/2007scape/images/2/2a/Blood_rune.png/revision/latest/scale-to-width-down/20?cb=20151107053228' />"
	document.getElementById("Runes").innerHTML = "You will need " + totalSoulRunes + " " + soulRuneImg + ", " + totalNatureRunes + " " + natureRuneImg + ", " + totalBodyRunes + " " + bodyRuneImg + ", " + totalBloodRunes + " " + bloodRuneImg + ".";
}
function CalculateExp(AmountOfHeads, EnsouledHeadExp) {
	return AmountOfHeads * EnsouledHeadExp;
}
function Bones() {
	//Find all the Amount of bones that is used
	var countAmountOfBones = document.getElementsByClassName("TypeOfBone").length;
	var totalBoneExperience = 0;
	
	for (i = 1 ; i < countAmountOfBones + 1 ;i++) {
	var AmountOfBonesNumber = "AmountOfBones" + i;
	var AmountOfBonesString = document.getElementById(AmountOfBonesNumber).value;
	if (AmountOfBonesString === null || AmountOfBonesString === 0 || AmountOfBonesString === "") {
		totalBoneExperience += 0;
		continue;
	}
	var Bones = parseInt(AmountOfBonesString);
	var TypeOfBoneNumber = "TypeOfBones" + i;
	var TypeOfExpNumber = "TypeOfExp" + i;
	var TypeOfBones = document.getElementById(TypeOfBoneNumber).value;
	var TypeOfExp = document.getElementById(TypeOfExpNumber).value;
	if ((TypeOfBones.value === "None" && Bones > 0) || (TypeOfExp === "None" && Bones > 0)) {
		alert("Please choose type of bones or type of exp")
	}else {
			if (TypeOfBones === "BigBones") {
				if (TypeOfExp === "Ectofuntus") {
					totalBoneExperience += Bones * 60;
				}else if (TypeOfExp === "GildedAltar") {
					totalBoneExperience += Bones * 52.5;
				}else if (TypeOfExp === "Bury") {
					totalBoneExperience += Bones * 15;
				}else if (TypeOfExp === "WildyAltar") {
					totalBoneExperience += Bones * 52.5 * 1.5;
				}else {
					alert("Unknown type of exp");
				}
			}else if (TypeOfBones === "BabyDragonBones") {
				if (TypeOfExp === "Ectofuntus") {
					totalBoneExperience += Bones * 120;
				}else if (TypeOfExp === "GildedAltar") {
					totalBoneExperience += Bones * 105;
				}else if (TypeOfExp === "Bury") {
					totalBoneExperience += Bones * 30;
				}else if (TypeOfExp === "WildyAltar") {
					totalBoneExperience += Bones * 105 * 1.5;
				}else {
					alert("Unknown type of exp");
				}
			}else if (TypeOfBones === "DragonBones") {
				if (TypeOfExp === "Ectofuntus") {
					totalBoneExperience += Bones * 288;
				}else if (TypeOfExp === "GildedAltar") {
					totalBoneExperience += Bones * 252;
				}else if (TypeOfExp === "Bury") {
					totalBoneExperience += Bones * 72;
				}else if (TypeOfExp === "WildyAltar") {
					totalBoneExperience += Bones * 252 * 1.5;
				}else {
					alert("Unknown type of exp");
				}
			}else if (TypeOfBones === "DagannothBones") {
				if (TypeOfExp === "Ectofuntus") {
					totalBoneExperience += Bones * 500;
				}else if (TypeOfExp === "GildedAltar") {
					totalBoneExperience += Bones * 437.5;
				}else if (TypeOfExp === "Bury") {
					totalBoneExperience += Bones * 125;
				}else if (TypeOfExp === "WildyAltar") {
					totalBoneExperience += Bones * 437.5 * 1.5;
				}else {
					alert("Unknown type of exp");
				}
			}else if (TypeOfBones === "SuperiorDragonBones") {
				if (TypeOfExp === "Ectofuntus") {
					totalBoneExperience += Bones * 600;
				}else if (TypeOfExp === "GildedAltar") {
					totalBoneExperience += Bones * 525;
				}else if (TypeOfExp === "Bury") {
					totalBoneExperience += Bones * 150;
				}else if (TypeOfExp === "WildyAltar") {
					totalBoneExperience += Bones * 525 * 1.5;
				}else {
					alert("Unknown type of exp");
				}
			}else if (TypeOfBones === "WyrmBones") {
				if (TypeOfExp === "Ectofuntus") {
					totalBoneExperience += Bones * 200;
				}else if (TypeOfExp === "GildedAltar") {
					totalBoneExperience += Bones * 175;
				}else if (TypeOfExp === "Bury") {
					totalBoneExperience += Bones * 50;
				}else if (TypeOfExp === "WildyAltar") {
					totalBoneExperience += Bones * 175 * 1.5;
				}else {
					alert("Unknown type of exp");
				}
			}else if (TypeOfBones === "DrakeBones") {
				if (TypeOfExp === "Ectofuntus") {
					totalBoneExperience += Bones * 320;
				}else if (TypeOfExp === "GildedAltar") {
					totalBoneExperience += Bones * 280;
				}else if (TypeOfExp === "Bury") {
					totalBoneExperience += Bones * 80;
				}else if (TypeOfExp === "WildyAltar") {
					totalBoneExperience += Bones * 280 * 1.5;
				}else {
					alert("Unknown type of exp");
				}
			}else if (TypeOfBones === "HydraBones") {
				if (TypeOfExp === "Ectofuntus") {
					totalBoneExperience += Bones * 440;
				}else if (TypeOfExp === "GildedAltar") {
					totalBoneExperience += Bones * 385;
				}else if (TypeOfExp === "Bury") {
					totalBoneExperience += Bones * 110;
				}else if (TypeOfExp === "WildyAltar") {
					totalBoneExperience += Bones * 385 * 1.5;
				}else {
					alert("Unknown type of exp");
				}
			}else {
				alert("Unknown Bones");
			}
		}
	}return totalBoneExperience;
}
