import React from "react";
import ReactDOM from "react-dom";

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
			</div>
		</div>
	);
}

ReactDOM.render(<CardPl />, document.querySelector("#app"));
