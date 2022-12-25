import Head from "next/head";
import React from "react";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function about() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <AboutContent />
      <Footer />
    </>
  );
}
