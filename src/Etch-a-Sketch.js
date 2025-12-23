const container = document.querySelector('.container');
const divCount =  4; //32

const colors = ['red', 'blue', 'orange', 'brown', 'black', 'pink', 'violet', 'purple', 'yellow'];
// add any color

for (let i = 0; i < divCount; i++) {
	createDivs(divCount);
}

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