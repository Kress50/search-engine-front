import React from "react";
import Logo from "./UI/Logo";
import { MagnifyingGlassIcon, MicrophoneIcon } from "@heroicons/react/24/solid";

export default function Search(props) {
  return (
    <>
      <form className="mt-10 flex flex-col items-center sm:mt-40">
        <Logo textSize="text-7xl" select="select-none" />
        <div className="mx-auto mt-5 flex w-full max-w-[90%] items-center rounded-full border border-gray-200 px-5 py-3 focus-within:shadow-lg hover:shadow-lg sm:max-w-xl lg:max-w-2xl">
          <MagnifyingGlassIcon className="mr-3 h-5 text-purple-600" />
          <input
            ref={props.searchInputRef}
            type="text"
            className="flex grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5 text-purple-600" />
        </div>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
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
