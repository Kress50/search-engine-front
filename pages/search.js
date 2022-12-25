import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import ImageResults from "../components/Search/ImageResults";
import Pagination from "../components/Search/Pagination";
import SearchHeader from "../components/Search/SearchHeader";
import SearchResults from "../components/Search/SearchResults";
import SearchResultsInfo from "../components/Search/SearchResultsInfo";

export default function search(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { query } = useRouter();
  const dynamicTitle = query.term;
  const searchQueryObject = props.results;

  return (
    <>
      <Head>
        <title>{`${dynamicTitle} - 10JIN`}</title>
      </Head>
      <div className="overflow-hidden">
        <SearchHeader />
        <SearchResultsInfo results={searchQueryObject.searchInformation} />
        {query.searchType === "image" ? (
          <ImageResults results={searchQueryObject} />
        ) : (
          <SearchResults results={searchQueryObject} />
        )}
        <Pagination />
      </div>
    </>
  );
}

//Getting data from Google Programmable Search Engine API
export async function getServerSideProps(cx) {
  const startIndex = cx.query.start || 1;
  //Gets mock data object if true otherwise calls an API
  const dataBlob = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
      process.env.CONTEXT_KEY
    }&q=${cx.query.term}${
      cx.query.searchType && "&searchType=image"
    }&start=${startIndex}`
  )
    .then((res) => res.json())
    .catch((error) => res.status(500).send(`Internal server error: ${error}`));
  return {
    props: {
      results: dataBlob,
    },
  };
}
