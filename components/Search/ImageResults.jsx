/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function ImageResults(props) {
  return (
    <div className="grid-flow-col-1 mx-3 mb-7 grid gap-4 sm:mr-[24px] sm:grid-cols-2 md:pl-[195px] lg:grid-cols-3 xl:grid-cols-4">
      {props.results.items.map((result) => (
        <div
          key={result.link}
          className="group hover:bg-gray-100 dark:hover:bg-zinc-800"
        >
          <a href={result.image.contextLink}>
            <img
              className="h-52 w-full object-contain group-hover:shadow-lg sm:h-60"
              src={result.link}
              alt={result.title}
            ></img>
          </a>
          <a
            className="max-w-sm group-hover:text-purple-600 group-hover:underline"
            href={result.image.contextLink}
          >
            <p className="text-ellipsis text-sm text-gray-600 group-hover:text-purple-600 dark:text-neutral-400">
              {result.displayLink}
            </p>
            <h2 className="text-ellipsis text-xl group-hover:text-purple-600">
              {result.title}
            </h2>
          </a>
        </div>
      ))}
    </div>
  );
}
