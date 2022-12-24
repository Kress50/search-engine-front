import React from "react";

export default function ImageResults(props) {
  return (
    <div className="grid-col-1 mr-[24px] ml-3 mb-7 grid gap-4 sm:grid-cols-2 md:pl-[195px] lg:grid-cols-3 xl:grid-cols-4">
      {props.results.items.map((result) => (
        <div key={result.link} className="group hover:bg-gray-100">
          <a href={result.image.contextLink}>
            <img
              className="h-60 w-full object-contain group-hover:shadow-lg"
              src={result.link}
              alt={result.title}
            ></img>
          </a>
          <a
            className="group-hover:text-purple-700 group-hover:underline"
            href={result.image.contextLink}
          >
            <p className="truncate text-sm text-gray-600 group-hover:text-purple-700">
              {result.displayLink}
            </p>
            <h2 className="truncate text-xl group-hover:text-purple-700">
              {result.title}
            </h2>
          </a>
        </div>
      ))}
    </div>
  );
}
