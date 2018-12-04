/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

   while (true){
    height = prompt("Please enter a height between 1 and 23");
    height = Number(height);
    if(height>=1 && height<=23 && Number.isInteger(height)){
      break;
    };
  };
  let m = 1;
  let hashtag = '##';
  let santa = "<code>";
  let space = height-2;

  while (m<=height){
    let d ='';
    for(let t = 0;t<=space;t++) {
      d + ='&nbsp;';
    }
    space--;
    hashtag = hashtag + '##';
    santa = santa + d + hashtag + "</br>";
    m++;
  }
  document.getElementById("mario-easy-output").innerHTML = santa;
  santa = santa + "</code>"

  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

   while (true){
    height = prompt("Please enter a valid height");
    height = Number(height);
    if(height>=1 && height<=23 && Number.isInteger(height)){
      break;
    };
  };
  let m = 1;
  let hashtag='##';
  let santa = "<code>";
  let before = height-2;
  let after = '&nbsp'+'&nbsp';
  while (m<=height){
    let d = '';
    for(let f = 0;f<=before;f++) {
      d + = '&nbsp;';
    }
    before--;
    hashtag = hashtag + '##';
    santa = santa + d + hashtag + after + hashtag + "</br>";
    m++;
  }
  document.getElementById("mario-hard-output").innerHTML = santa;
  santa = santa + "</code>"

  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  let oddNumber = 0;
  let evenNumber = 0;
  while (true){
    card=prompt("Please enetr your credit card number ");
    if ((card.length==16 || card.length==15 || card.length==13) && Number.isInteger(Number(card))){
      break;
    }
  }
  for(let m = card.length-2;m>=0;m-=2) {
    let d = Number(card[m])*2;
    let g = num.toString();
    let sumNumber = 0;
    for (let k = 0;k<g.length;k++){
      sumNumber = sumNumber+Number(g[k]);
    }
    evenNumber = sumNumber+evenNumber;
    console.log(evenNumber);
  }
  for(let t = card.length-1; t>=0;t-=2){
   	oddNumber = oddNumber + Number(card[t])
  }
  console.log(oddNumber);

  if (card.length==15 && (card[0]==3 &&(card[1]==7 || card[1]==4)) && (oddNumber+evenNumber)%10==0){
    document.getElementById("credit-output").innerHTML="<img src ='./images/amex.png'/>";
  }
  else if ((card.length==13 || card.length==16) && card[0]==4 && (oddNumber+evenNumber)%10==0){
    document.getElementById("credit-output").innerHTML="<img src ='./images/visa.png'/>";
  }
  else if (card.length==16 && (card[0]==5 && (card[1]==1 || card[1]==2 || card[1]==4 || card[1]==5)) && (oddNumber+evenNumber)%10==0){
    document.getElementById("credit-output").innerHTML="<img src ='./images/mastercard.png'/>";
  }
  else {
    document.getElementById("credit-output").innerHTML="<img src ='./images/invalid.png'/>";
  }

  card = Number(card);


  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

  // WRITE YOUR EXERCISE 4 CODE HERE
  let mommar = Math.floor(Math.random()*999)+1;
  let molly = 0;
  let maddox = false;
  while (maddox==false) {
    let guess=prompt("Please enter your guess")
    if(guess> = 1 && guess<=1000 && Number.isInteger(Number(guess))){
      console.log("1");
      if (mommar==guess){
        molly++;
        maddox = true;
        alert("This is the correct answer!")
        document.getElementById('guess-output').innerHTML="Number: "+mommar+"</br>Attempts: "+molly;
      }
      else if(guess>mommar){
        molly++;
        alert("This value is too high!")
      }
      else if(guess<mommar){
        molly++;
        alert("This value is too low!")
      }
    }
  }
  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY
do {
    windspeed = prompt('Please enter a windspeed between 1 and 1000');
    windspeed = Number(windspeed);
  } while (windspeed < 1 || windspeed > 1000 || Number.isNaN(windspeed) || !Number.isInteger(windspeed));

  if (windspeed >= 157) {
    document.getElementById('hurricane-output').innerHTML='Category 5 Hurricane.';
  } else if (windspeed >= 130) {
    document.getElementById('hurricane-output').innerHTML='Category 4 Hurricane.';
  } else if (windspeed >= 111) {
    document.getElementById('hurricane-output').innerHTML='Category 3 Hurricane.';
  } else if (windspeed >= 96) {
    document.getElementById('hurricane-output').innerHTML='Category 2 Hurricane.';
  } else if (windspeed >= 74) {
    document.getElementById('hurricane-output').innerHTML='Category 1 Hurricane.';
  } else if (windspeed >= 39) {
    document.getElementById('hurricane-output').innerHTML='Tropical Storm.';
  } else if (windspeed <= 38) {
    document.getElementById('hurricane-output').innerHTML='The skies are calm...';
  }
	
  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */
	let m=1;
	while(m<=6){
		let inputScore=Number(prompt("Please enter your score"));
		if (inputScore>=1 && inputScore<=10 && Number.isInteger(inputScore)){
			scores.push(inputScore);
		i++;
		}
	}
	scores.sort(function(a,b){return a-b;})
	let big = scores[5];
	let small = scores[0];
	let judgeScores = [];
	for(let d=1;d<5;d++){
		judgeScores.push(scores[d]);
	}
	let averageScore=((judgeScores[0]+judgeScores[1]+judgeScores[2]+judgeScores[3])/4).toFixed(2);
	document.getElementById("gymnastics-output").innerHTML="Discarded: "+small+", "+big+"</br>Score: "+averageScore;
  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */
 let testsInput = prompt("Please enter your test score");
   if (testsInput == -1) {
   	}

   if (Number(testsInput) >= 0 && Number(testsInput <= 100)) {
   		testTotal = Number(testsInput) + testTotal;
   		tests++;
   }

   while (true) {
     let quizInput=prompt("Please enter your quiz score");
     if (quizInput == -1){
     }

     if (Number(quizInput) >= 0 && Number(quizInput) <= 100) {
       quizTotal = Number(quizInput) + quizTotal;
       quizzes++;
   		}
    }

    while (true) {
      let homeworkInput = prompt("Please enter your homework score");
      if (homeworkInput == -1){
   		}

      if (Number(homeworkInput) >= 0 && Number(homeworkInput) <= 100) {
        homeworkTotal = Number(homeworkInput) + homeworkTotal;
   			homeworks++;
   		}
   	}

   	let testAverage = (testTotal / tests).toFixed(2);
   	let quizAverage = (quizTotal / quizzes).toFixed(2);
   	let homeworksAverage = (homeworkTotal / homeworks).toFixed(2);
   	grade = (.6 * testAverage + .3 * quizAverage + .1 * homeworksAverage).toFixed(2);

   	document.getElementById("report-card-output").innerHTML="Tests: "+testAverage+"</br>Quizzes: "+quizAverage+"</br>Homework: "+homeworksAverage+"</br>Grade: "+grade;

		
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
