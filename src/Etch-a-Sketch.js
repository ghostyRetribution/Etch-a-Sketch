const container = document.querySelector('#container');
const divCount =  prompt('Please enter a number between 1 - 32: ');

if (divCount > 32 || divCount < 0) {
	alert('Please choose a valid number');
} else {
	for (let i = 0; i <= divCount; i ++) {
		createDivs(divCount);
	}
	function createDivs(num) {	
		for (let i = 0; i <= num; i++) {
			const div = document.createElement('div');
			div.addEventListener('mouseover', () => {
				div.classList.add('hovered');
			});
			div.classList.add('box');
			container.appendChild(div);
		}
	}
}
