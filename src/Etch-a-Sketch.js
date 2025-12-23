const container = document.querySelector('#container');
const divCount =  32;

const colors = ['red', 'blue', 'orange', 'brown','gray', 'black', 'pink', 'aliceblue', 'violet', 'purple', 'yellow'];
// add any color

for (let i = 0; i <= divCount; i ++) {
	createDivs(divCount);
}
function createDivs(divCount) {	
	for (let i = 0; i <= divCount; i++) {
		const div = document.createElement('div');
		div.addEventListener('mouseover', () => {
			const randomColor = Math.floor(Math.random() * colors.length);
			div.setAttribute('style', `background-color: ${colors[randomColor]}`);
		});
		div.classList.add('box');
		container.appendChild(div);
	}
}

