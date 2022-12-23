import Head from "next/head";
import Header from "../components/Header";
import Search from "../components/Search";

export default function Home() {
	return (
		<>
			<Head>
				<title>10JIN</title>
				<meta name="description" content="10JIN Web Search Engine" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<body>
				<Header />
				<Search />
			</body>
		</>
	);
}
