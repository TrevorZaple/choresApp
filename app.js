const chores = [
	{name: 'Do the dishes', points: 5},
	{name: 'Vaccuum the living room', points: 10},
	{name: 'Take out the trash', points: 3},
	{name: 'Fold the laundry', points: 8},
	{name: 'Clean the bathroom', points: 12}
];

//get login elements from DOM
const loginContainer = document.querySelector('.login');


//get chores elements from DOM
const choresContainer = document.querySelector('.chores');
const choresList = document.querySelector('#chores-list');
const totalPoints = document.querySelector('#total-points');
const rewardMsg = document.querySelector('#reward-msg');

//add event listener to login button
document.addEventListener('DOMContentLoaded', () => {
	const loginBtn = document.querySelector('#login-btn');
	loginBtn.addEventListener('click', () => {
		//get username and password input values
		const username = document.querySelector('#username').value;
		const password = document.querySelector('#password').value;
	
		//check if username and password are correct
		if (username === 'admin' && password==='12345') {
			//hide login container and show chores container
			loginContainer.classList.add('hidden');
			choresContainer.classList.remove('hidden');
		
			//loop thorugh chores array and create list items
			for (let i=0; i < chores.length; i++) {
				const chore = chores[i];
			
				//create list item element 
				const listItem = document.createElement('li');
			
				//set text content of list item to chore name and points
				listItem.textContent = '${chore.name} - ${chore.points} points';
			
				//add event listener to list item 
				listItem.addEventListener('click', () => {
					//add chore points to total points 
					const currentPoints = parseInt(totalPoints.textContent);
					totalPoints.textContent = currentPoints + chore.points;
				});
			
				//add list item to list
				choresList.appendChild(listItem);
			}
		} else {
			//if login in incorrect, display error message
			alert('Incorrect username or password. Please try again.');
		}
	});
});

	//check total points and display reward message 
	setInterval(() => {
		const currentPoints = parseInt(totalPoints.textContent);
		if (currentPoints >= 30) {
			rewardMsg.textContent = 'Congratulations! You have earned $10 on Steam!';
		} else if (currentPoints >= 20) {
			rewardMsg.textContent = 'Congratulations! You have earned $5 on Steam!';
		} else if (currentPoints >= 10) {
			rewardMsg.textContent = 'Congratulations! You have earned $2 on Steam!';
		} else {
			rewardMsg.textContent = '';
		}
	}, 1000);
