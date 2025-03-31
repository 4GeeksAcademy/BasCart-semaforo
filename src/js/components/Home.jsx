import React from "react";
import { useState } from "react";
import { colorLight } from "./colorLight";

export const Home = () => {

	const [color, setcolor] = useState("");

	const colorChange = (newColor) => {
		setcolor((currentColor) => currentColor === newColor ? "" : newColor);

	}

	return (
		<div>
			<div className="d-flex flex-column bg-dark mx-auto p-3 gap-3" style={{ width: "13%" }}>
				<div className="d-flex items-align-center justify-content-center" style={{ width: "100%", ...colorLight("red", color) }}>
					<button type="button" onClick={() => colorChange("red")} className="d-flex btn btn-danger rounded-circle" style={{ height: "150px", width: "100%" }} ></button>
				</div>
				<div className="d-flex items-align-center justify-content-center" style={{ width: "100%", ...colorLight("yellow", color) }}>
					<button type="button" onClick={() => colorChange("yellow")} className="d-flex btn btn-warning rounded-circle " style={{ height: "150px", width: "100%" }}></button>
				</div>
				<div className="d-flex items-align-center justify-content-center" style={{ width: "100%", ...colorLight("green", color) }}>
					<button type="button" onClick={() => colorChange("green")} className="d-flex btn btn-success rounded-circle" style={{ height: "150px", width: "100%" }}></button>
				</div>
			</div>
		</div>
	)
};	