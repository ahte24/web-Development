console.log("Challange Accepted.");

// Function to change the image
function changeImage() {
	let imageElement = document.getElementById("img");
	let h3 = document.getElementById("h3");
	let span1 = document.getElementById("channel-name");

	imageElement.src =
		"https://i.ytimg.com/vi/ognrhoi0C-w/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDgeqfhd6yCgUzQOVgxyXHRArCXWQ";
	h3.textContent =
		"CSS Object-fit and Object-cover | Sigma Web Development Course - Tutorial #49";
	span1.textContent="CodeWithHarry";
}
