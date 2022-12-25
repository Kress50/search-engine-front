import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Logo from "../UI/Logo";

export default function Pagination() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 1;

  return (
    <div className="mx-3 mb-7 flex w-full items-center justify-center gap-3 md:justify-start md:pl-[195px]">
      {startIndex > 10 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex - 10}`}
        >
          <div className="dark-theme flex cursor-pointer flex-col text-sm text-gray-500 hover:text-purple-600 hover:underline">
            <ChevronLeftIcon className="h-5 " />
            <p>Prev</p>
          </div>
        </Link>
      )}
      <div>
        <Logo textSize="text-xl" select="select-none" />
      </div>
      {startIndex < 90 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex + 10}`}
        >
          <div className="dark-theme flex cursor-pointer flex-col text-sm text-gray-500 hover:text-purple-600 hover:underline">
            <ChevronRightIcon className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}
