import React from "react";
import "./Card.css"

function card(props) {
	return (
		<div className="card">
            <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706486400&semt=sph" alt="" />
			<h1>{props.title}</h1>
			<p>{props.description}</p>
		</div>
	);
}

export default card;
