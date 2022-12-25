import React from "react";

export default function SearchResultsInfo(props) {
  const totalResults = props.results.formattedTotalResults;
  const searchTime = props.results.formattedSearchTime;

  return (
    <div className="mx-3 w-full text-center sm:text-left md:pl-[195px]">
      <p className="mt-3 mb-5 text-sm text-gray-600 dark:text-neutral-400">
        About {totalResults} results ({searchTime} seconds)
      </p>
    </div>
  );
}
