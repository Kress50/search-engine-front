import { useRouter } from "next/router";
import React from "react";
import Logo from "./UI/Logo";

export default function AboutContent() {
  const router = useRouter();

  return (
    <div className="mx-5 mt-10 flex flex-col items-center justify-around gap-10 sm:mt-40 md:flex-row-reverse">
      <div className="inline-block" onClick={() => router.push("/")}>
        <Logo
          textSize="text-7xl"
          select="select-none cursor-pointer"
          href="/"
        />
      </div>
      <div className="flex max-w-2xl flex-col gap-5">
        <p>
          This is a study project trying to replicate the core front-end
          functionality of a Google-style web search engine!
        </p>
        <p>
          To use some of the additional functionality of the website you have to
          login to your Google account through OAuth.
        </p>
        <p>
          This site has to affiliation with Google and uses the Custom Search
          JSON API provided by Google Developers website. You can read more
          about the Programmable Search Engine API here:
        </p>
        <a href="https://developers.google.com/custom-search/docs/overview">
          <button className="auth-button max-w-xs">Google Docs</button>
        </a>
      </div>
    </div>
  );
}
