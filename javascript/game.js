
	var wincounter = 0;
 	var lossCounter = 0;
 	var scoreCounter = 0;
 	var randomNum = Math.floor((Math.random() * 100) + 19);
 	
 	var crystalFour = Math.floor((Math.random() * 12) + 1);
 	var crystalThree = Math.floor((Math.random() * 12) + 1);
 	var crystalTwo = Math.floor((Math.random() * 12) + 1);
 	var crystalOne = Math.floor((Math.random() * 12) + 1);



 	var counters = function () {
 		$('#scoreCounter').empty();
 		$('#scoreCounter').append(scoreCounter);

 		$('#wincounter').empty();
 		$('#wincounter').append(wincounter);

 		$('#lossCounter').empty();
 		$('#lossCounter').append(lossCounter);
 	}


 // restart game
 		var restart = function (){
			 scoreCounter = 0;
			 randomNum = Math.floor((Math.random() * 100) + 19);
			 
				$('.randomNum').empty();
				$('.randomNum').append(randomNum);

		var crystalFour = Math.floor((Math.random() * 12) + 1);
 		var crystalThree = Math.floor((Math.random() * 12) + 1);
 		var crystalTwo = Math.floor((Math.random() * 12) + 1);
 		var crystalOne = Math.floor((Math.random() * 12) + 1);
 			counters();
 		}	


 	var game = function (){
 		if (scoreCounter == randomNum) {
			 wincounter = wincounter + 1;
			 alert("You win!");
 			restart();
 		} else if (scoreCounter > randomNum) {
			 lossCounter = lossCounter + 1;
			 alert("You lost");
 			restart();
 		} else {
 			counters();
 		}
 	}

 	$('#randomNum').append(randomNum);
 	$('#scoreCounter').append(scoreCounter);

 	$( document ).ready(function() {
 		$('#crystalFour').click(function(){
 			scoreCounter = scoreCounter + crystalFour;
 			game();
 		})

 		$('#crystalThree').click(function(){
 			scoreCounter = scoreCounter + crystalThree;
 			game();
 		})

 		$('#crystalTwo').click(function(){
 			scoreCounter = scoreCounter + crystalTwo;
 			game();
 		})

 		$('#crystalOne').click(function(){
 			scoreCounter = scoreCounter + crystalOne;
 			game();
 		})
 	});