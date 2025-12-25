const container = document.querySelector('.container');
const input = document.querySelector('.input');
const enterBtn = document.querySelector('.enterBtn');
let divCount = 1;
createDivs(divCount);
enterBtn.addEventListener('click', () => {
	container.innerHTML = ''; //the container becomes empty first, then runs the loop again to create divs.
	if (input.value > 64 || input.value < 0) {
		alert('Choose a number between 1 - 64');
		input.value = 64;
		createDivs(1);
	}
	else {
		divCount = input.value;	
		for (let i = 0; i < divCount; i++) {
			createDivs(divCount);
		} // copy this loop outside if you want to have more than 1 box whenever the page is first loaded.
	}
});

const colors = ['red', 'blue', 'orange', 'brown', 'black', 'pink', 'violet', 'purple', 'yellow'];
// add any color

function createDivs(divCount) {	
	for (let i = 0; i < divCount; i++) {
		const box = document.createElement('div');
    	box.style.width = `calc(100% / ${divCount})`;
    	box.style.height = `calc(100% / ${divCount})`;
		box.addEventListener('mouseover', () => {
			const randomColor = Math.floor(Math.random() * colors.length);
			box.style.backgroundColor = colors[randomColor]; 
		});
		box.classList.add('box');
		container.appendChild(box);
	}
}