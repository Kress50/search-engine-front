import {
  MagnifyingGlassCircleIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import React from "react";
import SearchHeaderOption from "./SearchHeaderOption";

export default function SearchHeaderOptions() {
  const router = useRouter();
  const allSelected =
    router.query.searchType === "" || !router.query.searchType;
  const imagesSelected = router.query.searchType === "image";

  return (
    <div className="dark-theme flex w-full select-none justify-center gap-8 text-sm text-gray-700 sm:justify-start sm:pl-52">
      <SearchHeaderOption
        title="All"
        Icon={MagnifyingGlassCircleIcon}
        selected={allSelected}
      />
      <SearchHeaderOption
        title="Images"
        Icon={PhotoIcon}
        selected={imagesSelected}
      />
    </div>
  );
}
