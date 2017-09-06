window.onload = function() {
	$("#timer-div").on("click", timer.start);
};

var questionArr = ["2 + 3 = 5", "5 * 23 = 115", "2 - 9 = 7", "54 / 6 = 8", "1 - 5 + 3 = -1", "99 % 3 = 0", "24 - 60 = -36", "3 * 8 = 16", "23 - 3 * 4 = 11", "2 / 3 * 4 = 8/3"];
var answerArr = [false, true, false, false, false, true, false, true, false, true, false];
var userArr = [];
var numCorrect = 0;
var numIncorrect = 0;
var numUnanswered = 0;

var intervalId;
var clockRunning = false;

//checks if user click (true or false) matches data attribute (correct answer) of indivQUest
//if matches (user is correct) than numCorrect++; else numIncorrect++; numUnanswered = questionArr.length - userInput.length

var timer = {

	time: 10,

	start: function() {
		if (!clockRunning) {
	        intervalId = setInterval(timer.countdown, 1000);
	        clockRunning = true;

	        for (var i = 0; i < questionArr.length; i++) {
	        	var indivQuest = $("<h3>");
	        	indivQuest.attr("data-answer", answerArr[i]);
	        	indivQuest.text(questionArr[i]);

	        	var userInput;
	        	var indivTrue = $("<button>");
	        	indivTrue.text("True");

	        	var indivFalse = $("<button>");
	        	indivFalse.text("False");


	        	$("#question-div").append(indivQuest);
	        	$("#question-div").append(indivTrue);
	        	$("#question-div").append(indivFalse);

				$(indivTrue).on("click", function() {
	        		userInput = true;
	        		// clicked = true;
	        		// if (clicked === true) {

	        		// }
	        		userArr[i] = userInput;
	        		console.log(userArr);
	        	});

	        	$(indivFalse).on("click", function() {
	        		userInput = false;
	        		userArr[i] = userInput;
	        		console.log(userArr);
	        	});

	        	
	        	
	        };
	    }
	},

	//div has true and false buttons
	//if one of the buttons clicked, var is assigned the boolean and var is added to userinput arr
	//at the end, the booleans are compared with correct answer array


	countdown: function() {
		timer.time--;
		if (timer.time === 0) {
			clearInterval(intervalId);
		    clockRunning = false;

		    //check if answers are correct
		    for (var i = 0; i < answerArr.length; i++) {
		    	if (userArr[i] == undefined) {
		    		numUnanswered++;
		    	} else if (userArr[i] === answerArr[i]) {
		    		numCorrect++;
		    	} else {
		    		numIncorrect++;
		    	}
		    }

			$("#timer-div").html("<h2>Time is Out!</h2>");
			$("#question-div").html("<h2>Correct: " + numCorrect + "</h2><h2>Incorrect: " + numIncorrect + "</h2><h2>Unanswered: " + numUnanswered + "</h2>");
		} else {
			$("#timer-div").html("<h2>" + timer.time + " seconds left!</h2>");
		};
	}
};