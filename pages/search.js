import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import SearchHeader from "../components/Search/SearchHeader";
import SearchResults from "../components/Search/SearchResults";

export default function search() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { query } = useRouter();
	const dynamicTitle = query.query;

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
