var experienceArray = [0, 83, 174, 276, 388, 512, 650, 801, 969, 1154, 1358, 1584, 1833, 2107, 2411, 
2746, 3115, 3523, 3973, 4470, 5018, 5624, 6291, 7028, 7828, 8740, 9730, 10824, 12031, 13363, 14833, 
16456, 18247, 20224, 22406, 24815, 27473, 30408, 33648, 37224, 41171, 45529, 50339, 55649, 61512, 
67983, 75127, 83014, 91721, 101333, 111945, 123660, 136594, 150872, 166636, 184040, 203254, 224466, 
247886, 273742, 302288, 333804, 368599, 407015, 449428, 496254, 547953, 605032, 668051, 737627, 
814445, 899257, 992895, 1096278, 1210421, 1336443, 1475581, 1629200, 1798808, 1986068, 2192818, 
2421087, 2673114, 2951373, 3258594, 3597792, 3972294, 4385776, 4842295, 5346332, 5902831, 6517253, 
7195629, 7944614, 8771558, 9684577, 10692629, 11805606, 13034431];

//Take the current xp and the total xp gained and add them,
//then take the xp and match it to the current level
//Also checks what skill to add additional xp
function CalculateNewLevel(CurrentExp, totalExpGained, skill) {
	if (skill === "Herblore") {
		var newExp = (parseInt(CurrentExp) + parseInt(totalExpGained));
	}
	if (skill === "Prayer") {
		var newExp = (parseInt(CurrentExp) + parseInt(totalExpGained) + Bones());
	}
	
	if (isNaN(newExp) === true) {
		alert("Something went wrong");
		return 0;
		}if (newExp < experienceArray[1]) {
			return 1;
		}if (newExp < experienceArray[2]) {
			return 2;
		}if (newExp < experienceArray[3]) {
			return 3;
		}if (newExp < experienceArray[4]) {
			return 4;
		}if (newExp < experienceArray[5]) {
			return 5;
		}if (newExp < experienceArray[6]) {
			return 6;
		}if (newExp < experienceArray[7]) {
			return 7;
		}if (newExp < experienceArray[8]) {
			return 8;
		}if (newExp < experienceArray[9]) {
			return 9;
		}if (newExp < experienceArray[10]) {
			return 10;
		}if (newExp < experienceArray[11]) {
			return 11;
		}if (newExp < experienceArray[12]) {
			return 12;
		}if (newExp < experienceArray[13]) {
			return 13;
		}if (newExp < experienceArray[14]) {
			return 14;
		}if (newExp < experienceArray[15]) {
			return 15;
		}if (newExp < experienceArray[16]) {
			return 16;
		}if (newExp < experienceArray[17]) {
			return 17;
		}if (newExp < experienceArray[18]) {
			return 18;
		}if (newExp < experienceArray[19]) {
			return 19;
		}if (newExp < experienceArray[20]) {
			return 20;
		}if (newExp < experienceArray[21]) {
			return 21;
		}if (newExp < experienceArray[22]) {
			return 22;
		}if (newExp < experienceArray[23]) {
			return 23;
		}if (newExp < experienceArray[24]) {
			return 24;
		}if (newExp < experienceArray[25]) {
			return 25;
		}if (newExp < experienceArray[26]) {
			return 26;
		}if (newExp < experienceArray[27]) {
			return 27;
		}if (newExp < experienceArray[28]) {
			return 28;
		}if (newExp < experienceArray[29]) {
			return 29;
		}if (newExp < experienceArray[30]) {
			return 30;
		}if (newExp < experienceArray[31]) {
			return 31;
		}if (newExp < experienceArray[32]) {
			return 32;
		}if (newExp < experienceArray[33]) {
			return 33;
		}if (newExp < experienceArray[34]) {
			return 34;
		}if (newExp < experienceArray[35]) {
			return 35;
		}if (newExp < experienceArray[36]) {
			return 36;
		}if (newExp < experienceArray[37]) {
			return 37;
		}if (newExp < experienceArray[38]) {
			return 38;
		}if (newExp < experienceArray[39]) {
			return 39;
		}if (newExp < experienceArray[40]) {
			return 40;
		}if (newExp < experienceArray[41]) {
			return 41;
		}if (newExp < experienceArray[42]) {
			return 42;
		}if (newExp < experienceArray[43]) {
			return 43;
		}if (newExp < experienceArray[44]) {
			return 44;
		}if (newExp < experienceArray[45]) {
			return 45;
		}if (newExp < experienceArray[46]) {
			return 46;
		}if (newExp < experienceArray[47]) {
			return 47;
		}if (newExp < experienceArray[48]) {
			return 48;
		}if (newExp < experienceArray[49]) { 
			return 49;
		}if (newExp < experienceArray[50]) {
			return 50;
		}if (newExp < experienceArray[51]) {
			return 51;
		}if (newExp < experienceArray[52]) {
			return 52;
		}if (newExp < experienceArray[53]) {
			return 53;
		}if (newExp < experienceArray[54]) {
			return 54;
		}if (newExp < experienceArray[55]) {
			return 55;
		}if (newExp < experienceArray[56]) {
			return 56;
		}if (newExp < experienceArray[57]) {
			return 57;
		}if (newExp < experienceArray[58]) {
			return 58;
		}if (newExp < experienceArray[59]) {
			return 59;
		}if (newExp < experienceArray[60]) {
			return 60;
		}if (newExp < experienceArray[61]) {
			return 61;
		}if (newExp < experienceArray[62]) {
			return 62;
		}if (newExp < experienceArray[63]) {
			return 63;
		}if (newExp < experienceArray[64]) {
			return 64;
		}if (newExp < experienceArray[65]) {
			return 65;
		}if (newExp < experienceArray[66]) {
			return 66;
		}if (newExp < experienceArray[67]) {
			return 67;
		}if (newExp < experienceArray[68]) {
			return 68;
		}if (newExp < experienceArray[69]) {
			return 69;
		}if (newExp < experienceArray[70]) {
			return 70;
		}if (newExp < experienceArray[71]) {
			return 71;
		}if (newExp < experienceArray[72]) {
			return 72;
		}if (newExp < experienceArray[73]) {
			return 73;
		}if (newExp < experienceArray[74]) {
			return 74;
		}if (newExp < experienceArray[75]) {
			return 75;
		}if (newExp < experienceArray[76]) {
			return 76;
		}if (newExp < experienceArray[77]) {
			return 77;
		}if (newExp < experienceArray[78]) {
			return 78;
		}if (newExp < experienceArray[79]) {
			return 79;
		}if (newExp < experienceArray[80]) {
			return 80;
		}if (newExp < experienceArray[81]) {
			return 81;
		}if (newExp < experienceArray[82]) {
			return 82;
		}if (newExp < experienceArray[83]) {
			return 83;
		}if (newExp < experienceArray[84]) {
			return 84;
		}if (newExp < experienceArray[85]) {
			return 85;
		}if (newExp < experienceArray[86]) {
			return 86;
		}if (newExp < experienceArray[87]) {
			return 87;
		}if (newExp < experienceArray[88]) {
			return 88;
		}if (newExp < experienceArray[89]) {
			return 89;
		}if (newExp < experienceArray[90]) {
			return 90;
		}if (newExp < experienceArray[91]) {
			return 91;
		}if (newExp < experienceArray[92]) {
			return 92;
		}if (newExp < experienceArray[93]) {
			return 93;
		}if (newExp < experienceArray[94]) {
			return 94;
		}if (newExp < experienceArray[95]) {
			return 95;
		}if (newExp < experienceArray[96]) {
			return 96;
		}if (newExp < experienceArray[97]) {
			return 97;
		}if (newExp < experienceArray[98]) {
			return 98;
		}if (newExp => experienceArray[98]) {
			return 99;
	}
}

//Find percent to the new level
//Parameter 'xp': total xp that u got from the inputs
function PercentToNewLevel(xp) {
	//find closest matching lvl xp
	for (i = 0 ; i < experienceArray.length ; i++) {
		if (xp > experienceArray[i]) {
			continue;
		}
		else {
			//Check if exp is equal to the exact lvl experience
			if (xp === experienceArray[i]) {
				return 0;
			}
			else {
				//Current experience minus the previous lvl experience to get the current % repeat for next lvl
				//To get the % to next level from the current experience instead of % to next level from total experience
				return ((xp - experienceArray[i-1]) / (experienceArray[i] - experienceArray[i-1]) * 100).toFixed(2);
			}
		}
	}
}