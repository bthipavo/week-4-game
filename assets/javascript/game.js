var lightplayers = {
	luke: {
		name: "luke",
		healthPower: 100,
		attackPower: 10,
		picture: "assets/images/lukeSkywalker.jpg"
	},
	obi: {
		name: "obi",
		healthPower: 100,
		attackPower: 10,
		picture: "assets/images/obiWanKenobi.jpg"
	},
	yoda: {
		name: "yoda",
		healthPower: 100,
		attackPower: 10,
		picture: "assets/images/yoda.jpg"
	}
}

var darkplayers = {
	storm: {
		name: "storm",
		healthPower: 100,
		attackPower: 10,
		picture: "assets/images/stormTroopers.jpg"
	},
	vader: {
		name: "vader",
		healthPower: 100,
		attackPower: 10,
		picture: "assets/images/darthVader.jpg"
	},
	sidious: {
		name: "sidious",
		healthPower: 100,
		attackPower: 10,
		picture: "assets/images/darthSidious.jpg"
	}
}

var oppHealth = 0;
var oppAttack = 0;
var playerOneAttack = 0;
var playerOneHealth = 0;
var totalAttack = 0;
var opponents = [];
var totOppHealth =0;
var counter = 0;

function getDarkOpp(playername) {

	// if(!playerone) {
		for (var i in lightplayers){
			console.log(lightplayers[i].name);
			if (lightplayers[i].name == playername){
			console.log(lightplayers[i].name);
			playerOneAttack = lightplayers[i].attackPower;
			playerOneHealth = lightplayers[i].healthPower;

			$('#one').html('<img class="img-responsive d-print-inline-block" src="'+lightplayers[i].picture+'">');
		}
	}
		$('#vs').html('<h1>VS</h1>');
		$('#selectPlayer').html('<h1>Select who to attack</h1>')
		

		for(var i in darkplayers) {
			opponents[i]=darkplayers[i];
			$('#opp').append('<div class="col-sm-4"><button class="btn btn-default btn-lg normal-button" id="'+opponents[i].name+'" onclick="getEnemyData(this.id)"><span><img class="img-responsive d-print-inline-block" src="'+ darkplayers[i].picture+'"></span></button></div>');
			// console.log('<button class="btn btn-default btn-lg normal-button"><span><img class="img-responsive d-print-inline-block" src="'+ darkForce[i]+'"></span></button>');
		}

 

		// }	
}

function getEnemyData(elementId) {
	console.log(elementId);
	if(elementId ==="luke") {
		oppHealth = lightplayers.luke.healthPower;
		oppAttack = lightplayers.luke.attackPower;
		totalAttack +=playerOneAttack;

	}
	else if(elementId ==="obi") {
		oppHealth = lightplayers.obi.healthPower;
		oppAttack = lightplayers.obi.attackPower;
		totalAttack +=playerOneAttack;

	}
	else if(elementId ==="yoda") {
		oppHealth = lightplayers.yoda.healthPower;
		oppAttack = lightplayers.yoda.attackPower;
		totalAttack +=playerOneAttack;

	}
	else if(elementId ==="storm") {
		oppHealth = darkplayers.storm.healthPower;
		oppAttack = darkplayers.storm.attackPower;
		totalAttack +=playerOneAttack;
		playerOneHealth -=oppAttack;

		attackOpp();
		checkHealth(elementId);
		console.log("element id: " + elementId);

	}
	else if(elementId ==="vader") {
		oppHealth = darkplayers.vader.healthPower;
		oppAttack = darkplayers.vader.attackPower;
		totalAttack +=playerOneAttack;
		console.log("in darthVader");

	}
	else if(elementId ==="sidious") {
		oppHealth = darkplayers.sidious.healthPower;
		oppAttack = darkplayers.sidious.attackPower;
		totalAttack +=playerOneAttack;

	}
	console.log("opponent Health: " + oppHealth);
	console.log("initial attack: " + playerOneAttack);
	console.log("player attack: " + totalAttack);
	console.log("player one health: " + playerOneHealth);
	console.log("opp remaining health: " + totOppHealth);
	 
}
function attackOpp() {
		if(counter == 0 ) {
			totOppHealth = oppHealth - totalAttack;
			counter++;
		}
		else {
			totOppHealth -= totalAttack;
			counter++;
		}
}
function checkHealth(elementId) {
	if (totOppHealth>0) {
		$('#opp').html('<button class="btn btn-default btn-lg normal-button" id="'+darkplayers[elementId].name+'" onclick="getEnemyData(this.id)"><span><img class="img-responsive d-print-inline-block" src="'+ darkplayers[elementId].picture+'"></span></button>');
		$('#selectPlayer').hide();
		console.log("checking troopers");
	}
	else
		if(totOppHealth<=0 ) {
			counter = 0;
			for(var i in darkplayers) {
				if (elementId != darkplayers[i].name){
					$('#'+elementId).remove();
					$('#opp').append('<div class="col-sm-4"><button class="btn btn-default btn-lg normal-button" id="'+darkplayers[i].name+'" onclick="getEnemyData(this.id)"><span><img class="img-responsive d-print-inline-block" src="'+ darkplayers[i].picture+'"></span></button></div>');
					// $('#opp').append('<div class="col-sm-4"><button class="btn btn-default btn-lg normal-button" id="'+darkplayers[i].name+'" onclick="getEnemyData(this.id)"><span><img class="img-responsive d-print-inline-block" src="'+ darkplayers[i].picture+'"></span></button></div>');
				}
			}		
		}
}

// function getOppId(){
// 	console.log(oppId);
// 	return oppId;
// }

function getLightOpp(playername) {

	// if(!playerone) {
		for (var i in darkplayers){
			if (darkplayers[i].name == playername){
			console.log(darkplayers[i].name);
			playerOneAttack = darkplayers[i].attackPower;
			$('#one').html('<img class="img-responsive d-print-inline-block" src="'+darkplayers[i].picture+'">');
		}
	}
		$('#vs').html('<h1>VS</h1>');
		$('#selectPlayer').html('<h1>Select who to attack</h1>')
		

		for(var i in lightplayers) {
			// oppId[i]=("opp"+i);
			$('#opp').append('<div class="col-sm-4"><button class="btn btn-default btn-lg normal-button" id="opp2'+lightplayers[i].name+'" onclick="getEnemyData(this.id)"><span><img class="img-responsive d-print-inline-block" src="'+ lightplayers[i].picture+'"></span></button></div>');
			// console.log('<button class="btn btn-default btn-lg normal-button"><span><img class="img-responsive d-print-inline-block" src="'+ darkForce[i]+'"></span></button>');
		}

		// }	
}