import React, { useState } from "react";

export default function Footer() {
	const currentData = new Date().getFullYear();

	return (
		<footer className="absolute inset-x-0 bottom-0">
			<div className="flex justify-between p-5 text-gray-500 text-sm bg-white">
				<p>Copyright &copy; {currentData} Kress50</p>
				<p>
					This project was done for personal use / studying purposes and has no
					affiliation with any existing corporate entities
				</p>
			</div>
		</footer>
	);
}
