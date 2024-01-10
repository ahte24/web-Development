console.log("Lets work with js");

// Create a new audio object
let currentSong = new Audio();

// Define a function that converts seconds to minutes in the format mm:ss
function secondsToMinutes(seconds) {
	// Check if the input is a valid number and not negative
	if (isNaN(seconds) || seconds < 0) {
		return "Invalid input";
	}

	// Calculate the number of minutes and remaining seconds
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = Math.floor(seconds % 60);

	// Format the minutes and seconds with leading zeros if needed
	const formattedMinutes = String(minutes).padStart(2, "0");
	const formattedSeconds = String(remainingSeconds).padStart(2, "0");

	// Return the formatted string
	return `${formattedMinutes}:${formattedSeconds}`;
}

// Define an async function that fetches the songs from a server
async function getSongs() {
	// Send a GET request to the server
	let a = await fetch("http://192.168.1.6:5000/musics/");
	// Get the response as text
	let response = await a.text();
	// Create a div element and set its innerHTML to the response
	let div = document.createElement("div");
	div.innerHTML = response;
	// Get all the anchor elements in the div
	let as = div.getElementsByTagName("a");
	// Initialize an empty array to store the song names
	let songs = [];
	// Loop through the anchor elements
	for (let i = 0; i < as.length; i++) {
		// Get the current element
		const element = as[i];
		// Check if the element's href ends with .mp3
		if (element.href.endsWith(".mp3")) {
			// Extract the song name from the href and push it to the array
			songs.push(element.href.split("/musics/")[1]);
		}
	}
	// Return the array of song names
	return songs;
}

// Define a function that plays a given track
const playMusic = (track, pause = false) => {
	// Set the source of the audio object to the track
	currentSong.src = "/musics/" + track;
	// Check if the pause parameter is false
	if (pause == false) {
		// Play the audio
		currentSong.play();
		// Change the play button's source to the pause icon
		play.src = "imgs/pause.svg";
	}
};

// Define an async function that runs the main logic
async function main() {
	// Get the songs from the server
	let songs = await getSongs();
	// Play the first song and pause it
	playMusic(songs[0], true);
	// Get the unordered list element in the song list
	let songUL = document
		.querySelector(".songList")
		.getElementsByTagName("ul")[0];
	// Loop through the songs
	for (const song of songs) {
		// Append a list item element to the unordered list with the song's information
		songUL.innerHTML =
			songUL.innerHTML +
			`<li>
			<img
				class="library-thumbnail"
				src="imgs/musics.svg"
				alt="thumbnail"
			/>
			<div class="info">
				<h3>${decodeURI(song)}</h3>
				<p>Allah ka banda</p>
			</div>
			<img
				class="play-btn"
				src="imgs/play-btn.svg"
				alt="hello world"
			/>
		</li>`;
	}

	// Convert the list items to an array and loop through them
	Array.from(
		document.querySelector(".songList").getElementsByTagName("li")
	).forEach((e) => {
		// Add a click event listener to each list item
		e.addEventListener("click", () => {
			// Play the song that corresponds to the list item
			playMusic(e.querySelector(".info").firstElementChild.innerHTML);
		});
	});

	// Add a click event listener to the play button
	play.addEventListener("click", () => {
		// Check if the audio is paused
		if (currentSong.paused) {
			// Play the audio
			currentSong.play();
			// Change the play button's source to the pause icon
			play.src = "imgs/pause.svg";
		} else {
			// Pause the audio
			currentSong.pause();
			// Change the play button's source to the play icon
			play.src = "imgs/play-btn.svg";
		}
	});

	// Add a time update event listener to the audio
	currentSong.addEventListener("timeupdate", () => {
		// Print the current time and duration of the audio to the console
		console.log(currentSong.currentTime, currentSong.duration);
		// Set the current time element's innerHTML to the formatted current time
		document.querySelector(".current-time").innerHTML = `${secondsToMinutes(
			currentSong.currentTime
		)}`;
		// Set the song info element's innerHTML to the song's information
		document.querySelector(".songinfo").innerHTML = `
			<img
			class="thumbnail"
			src="imgs/musics.svg"
			alt="thumbnail"
			/>
			<div class="content">
			<h3>${decodeURI(currentSong.src).split("/musics/")[1]}</h3>
			<p>Allah ka banda</p>
			</div>
			`;

		document.querySelector(".songinfo2").innerHTML = `
			<img
			class="thumbnail"
			src="imgs/musics.svg"
			alt="thumbnail"
			/>
			<div class="content">
			<h3>${decodeURI(currentSong.src).split("/musics/")[1]}</h3>
			<p>Allah ka banda</p>
			</div>
			`;
		// Set the duration element's innerHTML to the formatted duration
		document.querySelector(".duration").innerHTML = `${secondsToMinutes(
			currentSong.duration
		)}`;
		// Set the bar element's width to the percentage of the audio's progress
		document.querySelector(".bar").style.width =
			(currentSong.currentTime / currentSong.duration) * 100 + "%";

		// Add a click event listener to the seek bar
		document.querySelector(".seekbar").addEventListener("click", (e) => {
			// Calculate the percentage of the click position relative to the seek bar's width
			let precent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
			// Set the bar element's width to the percentage
			document.querySelector(".bar").style.width = precent + "%";
			// Set the audio's current time to the corresponding percentage of the duration
			currentSong.currentTime = (currentSong.duration * precent) / 100;
		});
	});
	// add a addEventListener for hamburger

	document.querySelector(".hamburger").addEventListener("click", () => {
		document.querySelector(".left").style.left = "1px";
	});

	document.querySelector(".close").addEventListener("click", ()=>{
		document.querySelector(".left").style.left = "-600px"
	})
}
// Call the main function
main();
