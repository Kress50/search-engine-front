import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import SearchHeader from "../components/Search/SearchHeader";
import SearchResults from "../components/Search/SearchResults";
import response from "./response";

export default function search(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { query } = useRouter();
  const dynamicTitle = query.term;
  console.log(props);

  return (
    <div>
      <Head>
        <title>{`${dynamicTitle} - 10JIN`}</title>
      </Head>
      <SearchHeader />
      <SearchResults />
    </div>
  );
}

//Getting data from Google Programmable Search Engine API
export async function getServerSideProps(cx) {
  //Gets mock data object if true otherwise calls an API
  const fakeData = true;
  const dataBlob = fakeData
    ? response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${cx.query.term}${
          cx.query.searchType && "&searchType=image"
        }`
      )
        .then((res) => res.json())
        .catch((error) =>
          res.status(500).send(`Internal server error: ${error}`)
        );
  return {
    props: {
      results: dataBlob,
    },
  };
}
