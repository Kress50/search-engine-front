import { useRouter } from "next/router";
import React, { useRef } from "react";
import Logo from "../UI/Logo";
import {
	MagnifyingGlassIcon,
	MicrophoneIcon,
	XMarkIcon,
} from "@heroicons/react/24/solid";
import User from "../User";

export default function SearchHeader() {
	const router = useRouter();
	const searchInputRef = useRef(null);
	const defaultInputValue = router.query.query;

	function searchHandler(e) {
		e.preventDefault();
		const query = searchInputRef.current.value.trim();
		if (!query) return;
		router.push(`/search?query=${query}`);
	}

	return (
		<header className="sticky top-0 bg-white">
			<div className="flex w-full p-6 items-center">
				<div className="inline-block" onClick={() => router.push("/")}>
					<Logo textSize="text-4xl" select="cursor-pointer select-none" />
				</div>
				<form className="flex flex-grow max-w-3xl items-center border border-gray-200 rounded-full shadow-lg px-6 py-2 ml-10 mr-5">
					<input
						type="text"
						defaultValue={defaultInputValue}
						ref={searchInputRef}
						className="w-full focus:outline-none"
					/>
					<XMarkIcon
						onClick={() => (searchInputRef.current.value = "")}
						className="sm:mr-3 h-7 text-purple-300 saturate-50 cursor-pointer hover:text-purple-600 hover:saturate-100 active:bg-gray-100 active:rounded-full"
					/>
					<MicrophoneIcon className="hidden sm:inline-flex h-5 text-purple-600 pl-4 border-l-2 border-gray-300 mr-3" />
					<MagnifyingGlassIcon className="hidden sm:inline-flex h-5 text-purple-600" />
					<button type="submit" onClick={searchHandler} hidden></button>
				</form>
				<User className="ml-auto" />
			</div>
		</header>
	);
}
