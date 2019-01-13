window.onload = run;

function run() {
	document.getElementById("CalculateExp").onclick = function() {
		CalculateExp()
	};
}

var CurrentExp = 0;

var Logs = {
	ArrowJavelinShafts: 5,
	Shortbow: 10,
	Longbow: 20
	}
	
var OakLogs = {
	Shortbow: 33,
	Longbow: 50
	}
	
var WillowLogs = {
	Shortbow: 66.6,
	Longbow: 83
	}
	
var MapleLogs = {
	Shortbow: 100,
	Longbow: 116.6
	}
	
var YewLogs = {
	Shortbow: 135,
	Longbow: 150
	}
	
var MagicLogs = {
	Shortbow: 166.6,
	Longbow: 183
	}
	
var Arrows = {
	HeadlessArrows: 15,
	BroadArrows: 150,
	AdamantArrows: 150,
	RuneArrows: 187.5,
	AmethystArrows: 202.5,
	DragonArrows: 225
	}

var Bolts = {
	BroadBolts: 30,
	AdamantiteBolts: 70,
	RuniteBolts: 100,
	DragonstoneBolts: 82,
	AmethystBroadBolts: 106,
	RubyBolts: 63,
	DiamondBolts: 70
	}

var Darts = {
	BronzeDarts: 1.8,
	IronDarts: 3.8,
	SteelDarts: 7.5,
	MithrilDarts: 11.2,
	AdamantDarts: 15,
	RuneDarts: 18.8,
	DragonDarts: 25
	}

var Javelins = {
	BronzeJavelins: 15,
	IronJavelins: 30,
	SteelJavelins: 75,
	MithrilJavelins: 120,
	AdamantJavelins: 150,
	RuneJavelins: 186,
	AmethystJavelins: 202.5,
	DragonJavelins: 225
	}
