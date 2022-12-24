import React from "react";

export default function SearchResultsInfo(props) {
  const totalResults = props.results.formattedTotalResults;
  const searchTime = props.results.formattedSearchTime;

  return (
    <div className="mx-3 text-center sm:pl-[195px] sm:text-left">
      <p className="mt-3 mb-5 text-sm text-gray-600">
        About {totalResults} results ({searchTime} seconds)
      </p>
    </div>
  );
}
