var lightplayers = {
	luke: {
		name: "luke",
		healthPower: 100,
		attackPower: 10,
		done: false,
		picture: "assets/images/lukeSkywalker.jpg"
	},
	obi: {
		name: "obi",
		healthPower: 100,
		attackPower: 10,
		done: false,
		picture: "assets/images/obiWanKenobi.jpg"
	},
	yoda: {
		name: "yoda",
		healthPower: 100,
		attackPower: 10,
		done: false,
		picture: "assets/images/yoda.jpg"
	}
}

var darkplayers = {
	storm: {
		name: "storm",
		healthPower: 100,
		attackPower: 10,
		done: false,
		picture: "assets/images/stormTroopers.jpg"
	},
	vader: {
		name: "vader",
		healthPower: 100,
		attackPower: 10,
		done: false,
		picture: "assets/images/darthVader.jpg"
	},
	sidious: {
		name: "sidious",
		healthPower: 100,
		attackPower: 10,
		done: false,
		picture: "assets/images/darthSidious.jpg"
	}
}

var oppHealth = 0;
var oppAttack = 0;
var playerOneAttack = 0;
var playerOneHealth = 0;
var totalAttack = 0;
var totOppHealth =0;
var counter = 0; 
var oppCount = 0;
// var lukeHealth = darkplayers.luke.healthPower;
// var stormHealth = darkplayers.storm.healthPower;
// var vaderHealth = darkplayers.vader.healthPower;
// var sidiousHealth = darkplayers.sidious.healthPower;
// var obiHealth = darkplayers.obi.healthPower;
// var yodaHealth = darkplayers.yoda.healthPower;
console.log( Object.keys(lightplayers).length + "size of object" );
console.log(lightplayers.name);
function getDarkOpp(playername) {
	console.log("getDarkOpp");
		$('#vs').show();
		$('#opp').show();
		$('#one').show();
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
			$('#opp').append('<div class="col-sm-4"><button class="btn btn-default btn-lg normal-button" id="'+darkplayers[i].name+'" onclick="getEnemyData(this.id)"><span><img class="img-responsive d-print-inline-block" src="'+ darkplayers[i].picture+'"></span></button></div>');
			// console.log('<button class="btn btn-default btn-lg normal-button"><span><img class="img-responsive d-print-inline-block" src="'+ darkForce[i]+'"></span></button>');
		}
}

function getLightOpp(playername) {
	console.log("getLightOpp");
		$('#vs').show();
		// $('#opp').show();
		$('#one').show();
	// if(!playerone) {
		for (var i in darkplayers){
			console.log(darkplayers[i].name);
			if (darkplayers[i].name == playername){
			console.log(darkplayers[i].name);
			playerOneAttack = darkplayers[i].attackPower;
			playerOneHealth = darkplayers[i].healthPower;

			$('#one').html('<img class="img-responsive d-print-inline-block" src="'+darkplayers[i].picture+'">');
		}
	}
		$('#vs').html('<h1>VS</h1>');
		$('#selectPlayer').html('<h1>Select who to attack</h1>')
		

		for(var i in lightplayers) {
			$('#opp').append('<div class="col-sm-4"><button class="btn btn-default btn-lg normal-button" id="'+lightplayers[i].name+'" onclick="getEnemyData2(this.id)"><span><img class="img-responsive d-print-inline-block" src="'+ lightplayers[i].picture+'"></span></button></div>');
			// console.log('<button class="btn btn-default btn-lg normal-button"><span><img class="img-responsive d-print-inline-block" src="'+ darkForce[i]+'"></span></button>');
		}	
}

function getEnemyData(elementId) {
	console.log("getEnemyData");
		$('#opp').show();
	// $('#one').hide();
	console.log(elementId);
	oppHealth = darkplayers[elementId].healthPower;
	oppAttack = darkplayers[elementId].attackPower;
	totalAttack +=playerOneAttack;

	attackOpp();
	checkHealth(elementId);
	checkWin();

	console.log("element id: " + elementId);
	console.log("opponent Health: " + oppHealth);
	console.log("initial attack: " + playerOneAttack);
	console.log("player attack: " + totalAttack);
	console.log("player one health: " + playerOneHealth);
	console.log("opp remaining health: " + totOppHealth);
	 
}

function getEnemyData2(elementId) {
	console.log("getEnemyData2");
		$('#opp').show();
	// $('#one').hide();
	console.log(elementId);
	oppHealth = lightplayers[elementId].healthPower;
	oppAttack = lightplayers[elementId].attackPower;
	totalAttack +=playerOneAttack;

	attackOpp();
	checkHealth2(elementId);
	checkWin2();
	
	console.log("element id: " + elementId);
	console.log("opponent Health: " + oppHealth);
	console.log("initial attack: " + playerOneAttack);
	console.log("player attack: " + totalAttack);
	console.log("player one health: " + playerOneHealth);
	console.log("opp remaining health: " + totOppHealth);
	 
}

function checkWin() {
	console.log("checkWin");
	if (playerOneHealth <= 0) {
		console.log("you lose!");
		$('#vs').hide();
		$('.restart').show();
	}
	else
		if (oppCount >= Object.keys(darkplayers).length){
			console.log("you win!");
			$('#vs').hide();
			$('.restart').show();
		}
}
function checkWin2() {
	console.log("checkWin2");
	if (playerOneHealth <= 0) {
		console.log("you lose!");
		$('#vs').hide();
		$('.restart').show();
	}
	else
		if (oppCount >= Object.keys(lightplayers).length){
			console.log("you win!");
			$('#vs').hide();
			$('.restart').show();
		}
}

function restartGame() {
	console.log("restartGame");
	$('.restart').hide();
	oppHealth = 0;
	oppAttack = 0;
	playerOneAttack = 0;
	playerOneHealth = 0;
	totalAttack = 0;
	totOppHealth =0;
	counter = 0; 
	oppCount = 0;
	// $('#opp').hide();
	$('#one').hide();
	$('#vs').hide();
	for (var i in lightplayers) {
		lightplayers[i].done = false;
	}
	for (var i in darkplayers) {
		darkplayers[i].done = false;
	}
	$('#selectPlayer').html('<h1>Select Player</h1>');
	$('.vis').show();
}

function attackOpp() {
	console.log("attackOpp");
		if(counter == 0 ) {
			totOppHealth = oppHealth - totalAttack;
			playerOneHealth -=oppAttack;
			counter++;
		}
		else {
			totOppHealth -= totalAttack;
			playerOneHealth -= oppAttack;
			counter++;
		}
}
function checkHealth(elementId) {
console.log("checkHealth");
	if (totOppHealth>0) {
		$('#opp').html('<button class="btn btn-default btn-lg normal-button" id="'+darkplayers[elementId].name+'" onclick="getEnemyData(this.id)"><span><img class="img-responsive d-print-inline-block" src="'+ darkplayers[elementId].picture+'"></span></button>');
		$('#selectPlayer').hide();
		console.log("checking troopers");
	}
	else
		if(totOppHealth<=0 ) {
			counter = 0;
			darkplayers[elementId].done = true;
			oppCount++;
			$('#'+elementId).remove();
			for(var i in darkplayers) {
				if (elementId != darkplayers[i].name && darkplayers[i].done != true){
					
					$('#opp').append('<div class="col-sm-4"><button class="btn btn-default btn-lg normal-button" id="'+darkplayers[i].name+'" onclick="getEnemyData(this.id)"><span><img class="img-responsive d-print-inline-block" src="'+ darkplayers[i].picture+'"></span></button></div>');
					// $('#opp').append('<div class="col-sm-4"><button class="btn btn-default btn-lg normal-button" id="'+darkplayers[i].name+'" onclick="getEnemyData(this.id)"><span><img class="img-responsive d-print-inline-block" src="'+ darkplayers[i].picture+'"></span></button></div>');
				}
			}		
		}
}

function checkHealth2(elementId) {
console.log("checkHealth2");
	if (totOppHealth>0) {
		$('#opp').html('<button class="btn btn-default btn-lg normal-button" id="'+lightplayers[elementId].name+'" onclick="getEnemyData2(this.id)"><span><img class="img-responsive d-print-inline-block" src="'+ lightplayers[elementId].picture+'"></span></button>');
		$('#selectPlayer').hide();
		console.log("checking troopers");
	}
	else
		if(totOppHealth<=0 ) {
			counter = 0;
			lightplayers[elementId].done = true;
			oppCount++;
			$('#'+elementId).remove();
			for(var i in lightplayers) {
				if (elementId != lightplayers[i].name && lightplayers[i].done != true){
					
					$('#opp').append('<div class="col-sm-4"><button class="btn btn-default btn-lg normal-button" id="'+lightplayers[i].name+'" onclick="getEnemyData2(this.id)"><span><img class="img-responsive d-print-inline-block" src="'+ lightplayers[i].picture+'"></span></button></div>');
				}
			}		
		}
}



// 