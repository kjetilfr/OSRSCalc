var lvl2 = 83;
var lvl3 = 174;
var lvl4 = 276;
var lvl5 = 388;
var lvl6 = 512;
var lvl7 = 650;
var lvl8 = 801;
var lvl9 = 969;
var lvl10 = 1154;
var lvl11 = 1358;
var lvl12 = 1584;
var lvl13 = 1833;
var lvl14 = 2107;
var lvl15 = 2411;
var lvl16 = 2746;
var lvl17 = 3115;
var lvl18 = 3523;
var lvl19 = 3973;
var lvl20 = 4470;
var lvl21 = 5018;
var lvl22 = 5624;
var lvl23 = 6291;
var lvl24 = 7028;
var lvl25 = 7842;
var lvl26 = 8740;
var lvl27 = 9730;
var lvl28 = 10824;
var lvl29 = 12031;
var lvl30 = 13363;
var lvl31 = 14833;
var lvl32 = 16456;
var lvl33 = 18247;
var lvl34 = 20224;
var lvl35 = 22406;
var lvl36 = 24815;
var lvl37 = 27473;
var lvl38 = 30408;
var lvl39 = 33648;
var lvl40 = 37224;
var lvl41 = 41171;
var lvl42 = 45529;
var lvl43 = 50339;
var lvl44 = 55649;
var lvl45 = 61512;
var lvl46 = 67983;
var lvl47 = 75127;
var lvl48 = 83014;
var lvl49 = 91721;
var lvl50 = 101333;
var lvl51 = 111945;
var lvl52 = 123660;
var lvl53 = 136594;
var lvl54 = 150872;
var lvl55 = 166636;
var lvl56 = 184040;
var lvl57 = 203254;
var lvl58 = 224466;
var lvl59 = 247886;
var lvl60 = 273742;
var lvl61 = 302288;
var lvl62 = 333804;
var lvl63 = 368599;
var lvl64 = 407015;
var lvl65 = 449428;
var lvl66 = 496254;
var lvl67 = 547953;
var lvl68 = 605032;
var lvl69 = 668051;
var lvl70 = 737627;
var lvl71 = 814445;
var lvl72 = 899257;
var lvl73 = 992895;
var lvl74 = 1096278;
var lvl75 = 1210421;
var lvl76 = 1336443;
var lvl77 = 1475581;
var lvl78 = 1629200;
var lvl79 = 1798808;
var lvl80 = 1986068;
var lvl81 = 2192818;
var lvl82 = 2421087;
var lvl83 = 2673114;
var lvl84 = 2951373;
var lvl85 = 3258594;
var lvl86 = 3597792;
var lvl87 = 3972294;
var lvl88 = 4385776;
var lvl89 = 4842295;
var lvl90 = 5346332;
var lvl91 = 5902831;
var lvl92 = 6517253;
var lvl93 = 7195629;
var lvl94 = 7944614;
var lvl95 = 8771558;
var lvl96 = 9684577;
var lvl97 = 10692629;
var lvl98 = 11805606;
var lvl99 = 13034431;

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
		}if (newExp < lvl2) {
			return 1;
		}if (newExp < lvl3) {
			return 2;
		}if (newExp < lvl4) {
			return 3;
		}if (newExp < lvl5) {
			return 4;
		}if (newExp < lvl6) {
			return 5;
		}if (newExp < lvl7) {
			return 6;
		}if (newExp < lvl8) {
			return 7;
		}if (newExp < lvl9) {
			return 8;
		}if (newExp < lvl10) {
			return 9;
		}if (newExp < lvl11) {
			return 10;
		}if (newExp < lvl12) {
			return 11;
		}if (newExp < lvl13) {
			return 12;
		}if (newExp < lvl14) {
			return 13;
		}if (newExp < lvl15) {
			return 14;
		}if (newExp < lvl16) {
			return 15;
		}if (newExp < lvl17) {
			return 16;
		}if (newExp < lvl18) {
			return 17;
		}if (newExp < lvl19) {
			return 18;
		}if (newExp < lvl20) {
			return 19;
		}if (newExp < lvl21) {
			return 20;
		}if (newExp < lvl22) {
			return 21;
		}if (newExp < lvl23) {
			return 22;
		}if (newExp < lvl24) {
			return 23;
		}if (newExp < lvl25) {
			return 24;
		}if (newExp < lvl26) {
			return 25;
		}if (newExp < lvl27) {
			return 26;
		}if (newExp < lvl28) {
			return 27;
		}if (newExp < lvl29) {
			return 28;
		}if (newExp < lvl30) {
			return 29;
		}if (newExp < lvl31) {
			return 30;
		}if (newExp < lvl32) {
			return 31;
		}if (newExp < lvl33) {
			return 32;
		}if (newExp < lvl34) {
			return 33;
		}if (newExp < lvl35) {
			return 34;
		}if (newExp < lvl36) {
			return 35;
		}if (newExp < lvl37) {
			return 36;
		}if (newExp < lvl38) {
			return 37;
		}if (newExp < lvl39) {
			return 38;
		}if (newExp < lvl40) {
			return 39;
		}if (newExp < lvl41) {
			return 40;
		}if (newExp < lvl42) {
			return 41;
		}if (newExp < lvl43) {
			return 42;
		}if (newExp < lvl44) {
			return 43;
		}if (newExp < lvl45) {
			return 44;
		}if (newExp < lvl46) {
			return 45;
		}if (newExp < lvl47) {
			return 46;
		}if (newExp < lvl48) {
			return 47;
		}if (newExp < lvl49) {
			return 48;
		}if (newExp < lvl50) { 
			return 49;
		}if (newExp < lvl51) {
			return 50;
		}if (newExp < lvl52) {
			return 51;
		}if (newExp < lvl53) {
			return 52;
		}if (newExp < lvl54) {
			return 53;
		}if (newExp < lvl55) {
			return 54;
		}if (newExp < lvl56) {
			return 55;
		}if (newExp < lvl57) {
			return 56;
		}if (newExp < lvl58) {
			return 57;
		}if (newExp < lvl59) {
			return 58;
		}if (newExp < lvl60) {
			return 59;
		}if (newExp < lvl61) {
			return 60;
		}if (newExp < lvl62) {
			return 61;
		}if (newExp < lvl63) {
			return 62;
		}if (newExp < lvl64) {
			return 63;
		}if (newExp < lvl65) {
			return 64;
		}if (newExp < lvl66) {
			return 65;
		}if (newExp < lvl67) {
			return 66;
		}if (newExp < lvl68) {
			return 67;
		}if (newExp < lvl69) {
			return 68;
		}if (newExp < lvl70) {
			return 69;
		}if (newExp < lvl71) {
			return 70;
		}if (newExp < lvl72) {
			return 71;
		}if (newExp < lvl73) {
			return 72;
		}if (newExp < lvl74) {
			return 73;
		}if (newExp < lvl75) {
			return 74;
		}if (newExp < lvl76) {
			return 75;
		}if (newExp < lvl77) {
			return 76;
		}if (newExp < lvl78) {
			return 77;
		}if (newExp < lvl79) {
			return 78;
		}if (newExp < lvl80) {
			return 79;
		}if (newExp < lvl81) {
			return 80;
		}if (newExp < lvl82) {
			return 81;
		}if (newExp < lvl83) {
			return 82;
		}if (newExp < lvl84) {
			return 83;
		}if (newExp < lvl85) {
			return 84;
		}if (newExp < lvl86) {
			return 85;
		}if (newExp < lvl87) {
			return 86;
		}if (newExp < lvl88) {
			return 87;
		}if (newExp < lvl89) {
			return 88;
		}if (newExp < lvl90) {
			return 89;
		}if (newExp < lvl91) {
			return 90;
		}if (newExp < lvl92) {
			return 91;
		}if (newExp < lvl93) {
			return 92;
		}if (newExp < lvl94) {
			return 93;
		}if (newExp < lvl95) {
			return 94;
		}if (newExp < lvl96) {
			return 95;
		}if (newExp < lvl97) {
			return 96;
		}if (newExp < lvl98) {
			return 97;
		}if (newExp < lvl99) {
			return 98;
		}if (newExp => lvl99) {
			return 99;
	}
}