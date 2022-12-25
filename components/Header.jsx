import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ThemeButton from "./UI/ThemeButton";
import User from "./User";

export default function Header() {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <header className="dark-theme flex justify-between p-5 text-sm text-gray-700">
      <div className="flex items-center space-x-4">
        <Link className="hover:underline" href="/about">
          About
        </Link>
        {session && (
          <Link className="hover:underline" href="https://store.google.com">
            Store
          </Link>
        )}
      </div>
      <div className="flex items-center space-x-4">
        {session && (
          <Link className="hover:underline" href="https://mail.google.com">
            Email
          </Link>
        )}
        <a
          className="cursor-pointer hover:underline"
          onClick={() =>
            router.push(
              `/search?term=${router.query.term || "vercel"}& qsearchType=image`
            )
          }
        >
          Images
        </a>
        <ThemeButton />
        <User />
      </div>
    </header>
  );
}
