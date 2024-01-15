function createCard(title, cName, views, monthsOld, duration, thumbnail) {
	let viewStr;
	if (views < 1000) {
		viewStr = views;
	} else if (views >= 1000000) {
		viewStr = views / 1000000 + "M";
	} else if (views < 1000000) {
		viewStr = views / 1000 + "K ";
	}
	let html = `
        <div class="card">
            <div class="image">
                <img
                    id="img"
                    src="${thumbnail}"
                    alt="Thumb Nali"
                />
                <div class="duration">
                    <span>${duration}</span>
                </div>
            </div>
            <div class="content">
                <h3 id="h3">
                    ${title}
                </h3>
                <div class="channel">
                    <span id="channel-name">${cName}</span>
                    <span>•</span>
                    <span id="views">${viewStr} views</span>
                    <span>•</span>
                    <span id="months-ago">${monthsOld} months ago</span>
                </div>
            </div>
        </div>
    `;
	document.querySelector(".container").innerHTML =
		document.querySelector(".container").innerHTML + html;
}

createCard(
	"Async/Await & Fetch API in JavaScript with Examples | Sigma Web Development Course - Tutorial #76",
	"CodeWithHarry",
	560000,
	7,
	"31:22",
	"https://i.ytimg.com/vi/gRLdHSabW3o/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB21Dwm3c7yoXYuR2rb5vPT7YxK1A"
);
