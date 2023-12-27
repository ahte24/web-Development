let btn = document.getElementById("btn");
btn.addEventListener("dblclick", () => {
	// alert("I was clicked.");
	document.querySelector(".box").innerHTML =
		"<b>you have been clicked.</b> enjoy";
});
btn.addEventListener("contextmenu", () => {
	alert("Pro coder dont copy.");
});
btn.addEventListener("keydown", (e) => {
	console.log(e, e.key, e.keyCode);
});
