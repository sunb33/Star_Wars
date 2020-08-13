import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export function CardPl() {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title"> TITLE </h5>
				<p className="card-text">DESCRIPTION</p>
				<a href="#" className="btn btn-primary">
					MORE INFORMATION
				</a>
				<button type="button" className="btn btn-outline-warning">
					<FontAwesomeIcon icon={faHeart} />
				</button>
			</div>
		</div>
	);
}

ReactDOM.render(<CardPl />, document.querySelector("#app"));
