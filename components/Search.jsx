import React from "react";
import Logo from "./UI/Logo";
import { MagnifyingGlassIcon, MicrophoneIcon } from "@heroicons/react/24/solid";

export default function Search(props) {
	return (
		<>
			<form className="flex flex-col items-center mt-40 sm:mt-20">
				<Logo />
				<div className="flex mt-5 w-full mx-auto max-w-[90%] px-5 py-3 border border-gray-200 rounded-full items-center hover:shadow-lg focus-within:shadow-lg sm:max-w-xl lg:max-w-2xl">
					<MagnifyingGlassIcon className="h-5 text-purple-600 mr-3" />
					<input
						ref={props.searchInputRef}
						type="text"
						className="flex grow focus:outline-none"
					/>
					<MicrophoneIcon className="h-5 text-purple-600" />
				</div>
				<div className="flex mt-5 flex-col sm:flex-row gap-3">
					<button onClick={props.searchHandler} className="search-button">
						Web Search
					</button>
					<button onClick={props.randomHandler} className="search-button">
						Show Random Result
					</button>
				</div>
			</form>
		</>
	);
}
