import { useRouter } from "next/router";
import React, { useRef } from "react";
import Logo from "../UI/Logo";
import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import User from "../User";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const defaultInputValue = router.query.query;

  function searchHandler(e) {
    e.preventDefault();
    const query = searchInputRef.current.value.trim();
    if (!query) return;
    router.push(`/search?term=${query}&searchType=`);
  }

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full items-center p-6">
        <div className="inline-block" onClick={() => router.push("/")}>
          <Logo textSize="text-4xl" select="cursor-pointer select-none" />
        </div>
        <form className="ml-10 mr-5 flex max-w-3xl flex-grow items-center rounded-full border border-gray-200 px-6 py-2 shadow-lg">
          <input
            type="text"
            defaultValue={defaultInputValue}
            ref={searchInputRef}
            className="w-full focus:outline-none"
          />
          <XMarkIcon
            onClick={() => (searchInputRef.current.value = "")}
            className="h-7 cursor-pointer text-purple-300 saturate-50 hover:text-purple-600 hover:saturate-100 active:rounded-full active:bg-gray-100 sm:mr-3"
          />
          <MicrophoneIcon className="mr-3 hidden h-5 border-l-2 border-gray-300 pl-4 text-purple-600 sm:inline-flex" />
          <MagnifyingGlassIcon className="hidden h-5 text-purple-600 sm:inline-flex" />
          <button type="submit" onClick={searchHandler} hidden></button>
        </form>
        <User className="ml-auto" />
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
