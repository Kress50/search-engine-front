import HTMLReactParser from "html-react-parser";
import React from "react";

export default function SearchResults(props) {
  return (
    <div className="mx-3 mb-7 flex flex-col gap-8 text-left md:pl-[195px]">
      {props.results.items.map((result) => (
        <div key={result.link} className="max-w-2xl">
          <div className="group ">
            <a className="text-ellipsis text-sm" href={result.link}>
              {result.formattedUrl}
            </a>
            <a
              className="decoration-purple-600 group-hover:underline"
              href={result.link}
            >
              <h2 className="truncate text-xl font-medium text-purple-800 group-hover:text-purple-600 dark:text-purple-200">
                {result.title}
              </h2>
            </a>
          </div>
          <p className="dark-theme text-gray-600">
            {HTMLReactParser(result.htmlSnippet)}
          </p>
        </div>
      ))}
    </div>
  );
}
