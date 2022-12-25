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

  async function randomHandler(e) {
    e.preventDefault();
    const randomWord = await fetch("https://random-word-api.herokuapp.com/word")
      .then((result) => result.json())
      .catch((error) => {
        console.log(error);
        return "Vercel";
      });
    router.push(`/search?term=${randomWord}&searchType=`);
  }

  return (
    <>
      <Head>
        <title>10JIN</title>
        <meta name="description" content="10JIN Web Search Engine" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
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
