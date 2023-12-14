let boxes = document.body.getElementsByClassName("box");

function getRandomColor() {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

for (let i = 0; i < boxes.length; i++) {
	boxes[i].style.backgroundColor = getRandomColor();
}
