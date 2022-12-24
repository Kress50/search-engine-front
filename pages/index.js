import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Search from "../components/HeroSectionSearch";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  function searchHandler(e) {
    e.preventDefault();
    const query = searchInputRef.current.value.trim();
    if (!query) return;
    router.push(`/search?term=${query}&searchType=`);
  }

  function randomHandler(e) {
    e.preventDefault();
  }

  return (
    <>
      <Head>
        <title>10JIN</title>
        <meta name="description" content="10JIN Web Search Engine" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Search
        searchInputRef={searchInputRef}
        searchHandler={searchHandler}
        randomHandler={randomHandler}
      />
      <Footer />
    </>
  );
}
