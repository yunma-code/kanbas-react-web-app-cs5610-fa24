import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import {Routes, Route, Navigate} from "react-router";
import TOC from "./TOC";


export default function Labs() {
	return(
		<div>
			<h1>Labs</h1>
			<h2>Yun Ma</h2>
			<h3>CS5610 Section 1</h3>
			<TOC />
			<Routes>
				<Route path="/" element={<Navigate to="/Labs" />} />
				<Route path="Lab1" element={<Lab1 />} />
				<Route path="Lab2" element={<Lab2 />} />
				<Route path="Lab3" element={<Lab3 />} />
			</Routes>
		</div>
	);
}