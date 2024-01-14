// Create a new audio object
let currentSong = new Audio();
let currFolder;
let songs;
// Define a function that converts seconds to minutes in the format mm:ss
function secondsToMinutes(seconds) {
	// Check if the input is a valid number and not negative
	if (isNaN(seconds) || seconds < 0) {
		return "00:00";
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
async function getSongs(folder) {
	currFolder = folder;
	// Send a GET request to the server
	let a = await fetch(`http://192.168.1.6:5000/${folder}/`);
	// Get the response as text
	let response = await a.text();
	// Create a div element and set its innerHTML to the response
	let div = document.createElement("div");
	div.innerHTML = response;
	// Get all the anchor elements in the div
	let as = div.getElementsByTagName("a");
	// Initialize an empty array to store the song names
	songs = [];
	// Loop through the anchor elements
	for (let i = 0; i < as.length; i++) {
		// Get the current element
		const element = as[i];
		// Check if the element's href ends with .mp3
		if (element.href.endsWith(".mp3")) {
			// Extract the song name from the href and push it to the array
			songs.push(element.href.split(`/${folder}/`)[1]);
		}
	}
	// Get the unordered list element in the song list
	let songUL = document
		.querySelector(".songList")
		.getElementsByTagName("ul")[0];

	songUL.innerHTML = "";
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

	return songs;
}

// Define a function that plays a given track
const playMusic = (track, pause = false) => {
	// Set the source of the audio object to the track
	currentSong.src = `http://192.168.1.6:5000/${currFolder}/` + track;
	// Check if the pause parameter is false
	if (pause == false) {
		// Play the audio
		currentSong.play();
		// Change the play button's source to the pause icon
		play.src = "imgs/pause.svg";
	}
	// Set the song info element's innerHTML to the song's information
	document.querySelector(".songinfo").innerHTML = `
	<img
	class="thumbnail"
	src="imgs/musics.svg"
	alt="thumbnail"
	/>
	<div class="content">
	<h3>${decodeURI(currentSong.src).split(`http://192.168.1.6:5000/${currFolder}/`)[1]}</h3>
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
	<h3>${decodeURI(currentSong.src).split(`/${currFolder}/`)[1]}</h3>
	<p>Allah ka banda</p>
	</div>
	`;
};

async function displayAlbums() {
	let a = await fetch(`/musics/`);
	let response = await a.text();
	let div = document.createElement("div");
	div.innerHTML = response;
	let anchor = div.getElementsByTagName("a");
	let cardContainer = document.querySelector(".cardContainer");
	let array = Array.from(anchor);
	for (let index = 0; index < array.length; index++) {
		const e = array[index];

		if (e.href.includes("/musics/") && !e.href.includes(".htaccess")) {
			let folder = e.href.split("/").slice(-2)[0];
			// Get the meta data of the folder
			let a = await fetch(`/musics/${folder}/info.json`);
			let response = await a.json();
			cardContainer.innerHTML =
				cardContainer.innerHTML +
				`<div data-folder="${folder}" class="card">
			<div class="play">
				<img src="imgs/play.svg" alt="" />
			</div>
			<img src="/musics/${folder}/cover.jpg" alt="" />
			<h2>${response.title}</h2>
			<p>${response.description}</p>
		</div>`;
		}
	}
	// Load the liberary when ever card is clicked
	Array.from(document.getElementsByClassName("card")).forEach((e) => {
		e.addEventListener("click", async (item) => {
			songs = await getSongs(`musics/${item.currentTarget.dataset.folder}`);
			playMusic(songs[0]);
		});
	});
}

// Define an async function that runs the main logic
async function main() {
	// Get the songs from the server
	await getSongs("musics/songs");
	// Play the first song and pause it
	playMusic(songs[0], true);

	// Display all the albums on the page dinamically
	displayAlbums();

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
		// Set the current time element's innerHTML to the formatted current time
		document.querySelector(".current-time").innerHTML = `${secondsToMinutes(
			currentSong.currentTime
		)}`;

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
			let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
			// Set the bar element's width to the percentage
			document.querySelector(".bar").style.width = percent + "%";
			// Set the audio's current time to the corresponding percentage of the duration
			currentSong.currentTime = (currentSong.duration * percent) / 100;
		});
	});
	// add a addEventListener for hamburger

	document.querySelector(".hamburger").addEventListener("click", () => {
		document.querySelector(".left").style.left = "1px";
	});

	// addEventListener to close the hamburger

	document.querySelector(".close").addEventListener("click", () => {
		document.querySelector(".left").style.left = "-600px";
	});

	// addEventListener to previous and next

	document.getElementById("previous").addEventListener("click", () => {
		// currentSong.pause();
		let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
		if (index > 0) {
			playMusic(songs[index - 1]);
		}
	});

	document.getElementById("next").addEventListener("click", () => {
		// currentSong.pause();

		let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
		if (index + 1 < songs.length) {
			playMusic(songs[index + 1]);
		}
	});

	document.querySelector(".volume-seekbar").addEventListener("click", (e) => {
		let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
		currentSong.volume = percent / 100;
		document.querySelector(".volume-bar").style.width = percent + "%";
	});

	// addEventListener to mute the track
	document.querySelector(".volume").addEventListener("click", (e) => {
		if (e.target.src.includes("volume.svg")) {
			e.target.src = e.target.src.replace("volume.svg", "mute.svg");
			currentSong.volume = 0;
			document.querySelector(".volume-bar").style.width = 0 + "%";
		} else {
			e.target.src = e.target.src.replace("mute.svg", "volume.svg");
			currentSong.volume = 0.5;
			document.querySelector(".volume-bar").style.width = 50 + "%";
		}
	});
}
// Call the main function
main();