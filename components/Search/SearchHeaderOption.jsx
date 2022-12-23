import { useRouter } from "next/router";
import React from "react";

export default function SearchHeaderOption({ title, Icon, selected }) {
	const router = useRouter();

	function selectTab(title) {
		router.push(
			`/search?term=${router.query.term}&searchType=${
				title === "Images" ? "image" : ""
			}`
		);
	}

	return (
		<div
			onClick={() => selectTab(title)}
			className={`flex items-center gap-1 border-b-4 border-transparent cursor-pointer pb-2 hover:border-purple-500 hover:text-purple-500 ${
				selected && "text-purple-500 border-purple-500"
			}`}
		>
			<p>{title}</p>
			<Icon className="h-4" />
		</div>
	);
}
