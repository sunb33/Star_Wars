import React from "react";
import ReactDOM from "react-dom";

export function CardPl() {
	return (
		<div class="card" style="width: 18rem;">
			<img src="..." class="card-img-top" alt="..." />
			<div class="card-body">
				<h5 class="card-title"> TITLE </h5>
				<p class="card-text">DESCRIPTION</p>
				<a href="#" class="btn btn-primary">
					MORE INFORMATION
				</a>
			</div>
		</div>
	);
}

ReactDOM.render(<CardPl />), document.querySelector("#app");
