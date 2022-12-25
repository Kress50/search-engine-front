import React from "react";

export default function Logo(props) {
  return (
    <div
      className={`flex font-semibold text-gray-700 dark:text-neutral-50 ${props.select} ${props.textSize} divide-x-4 divide-purple-500`}
    >
      <div className="px-2">10</div>
      <div className="px-2">JIN</div>
    </div>
  );
}
