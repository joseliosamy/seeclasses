import Head from "next/head";
import { Fragment } from "react";
import Cards from "../../components/Cards";
import ScrollTop from "../../components/ScrollTop";


export default function Fisica() {
  return (
    <Fragment>
    <Head>
      <title>Matéria - Física</title>
    </Head>
    <div className="windowName">
      <p>Física I</p>
    </div>
    <ScrollTop />
    <Cards />
  </Fragment>
  );
}