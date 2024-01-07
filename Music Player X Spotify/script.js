console.log("Lets work with js");

async function getSongs() {
	let a = await fetch("http://192.168.1.6:5000/musics/");
	let response = await a.text();
	let div = document.createElement("div");
	div.innerHTML = response;
	let aTag = div.getElementsByTagName("a");
	let songs = [];
	for (let i = 0; i < aTag.length; i++) {
		const song = aTag[i];
		if (song.href.endsWith(".mp3")) {
			songs.push(song.href);
		}
	}
	return songs;
}

async function main() {
	let songs = await getSongs();
	console.log(songs);
}

main();
