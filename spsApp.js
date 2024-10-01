let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let winCounter = document.querySelector(".winCounter");
let whoWon = document.querySelector(".whoWon");

let r, p, s;//values for rock paper scissors
let you=0 , comp=0; //calculate score

rock.addEventListener("click" , () => {
	r = 1 ;
	p = 2 ; 
	s = 0 ;

	let compChoice = getValueFromComputer(); //stores computer's choice
	checkWinner(compChoice);
});

paper.addEventListener("click" , () => {
	r = 0 ;
	p = 1 ; 
	s = 2 ;

	let compChoice = getValueFromComputer(); //stores computer's choice
	
	checkWinner(compChoice);
});

scissors.addEventListener("click" , () => {
	r = 2 ;
	p = 0 ; 
	s = 1 ;

	let compChoice = getValueFromComputer(); //stores computer's choice
	checkWinner(compChoice);
});

 const getValueFromComputer = () => {
 	//return choice by computer
 	const randomNum = Math.floor(Math.random() * 3);
 	return randomNum;
};

const checkWinner = (i) => {

	whoWon.classList.remove('win', 'loss' ,'draw');

	if (i < 1) {
			//winner
			you++;
			updateScore();
			whoWon.innerText = "You Won";
			whoWon.classList.add('win');
		}
	else if (i > 1){
		//loser
		comp++;
		updateScore();
		whoWon.innerText = "You Lost";
		whoWon.classList.add('loss');
	}
	else{
			//draw
			whoWon.innerText = "It's a Draw";
			whoWon.classList.add('draw');
		}
};

const updateScore = () => {
winCounter.innerText = (`You: ${you}	Computer: ${comp}`);
};

