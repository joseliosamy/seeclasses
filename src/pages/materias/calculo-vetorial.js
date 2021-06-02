

import Head from "next/head";
import { Fragment } from "react";
import Cards from "../../components/Cards";
import ScrollTop from "../../components/ScrollTop";


export default function Vetorial() {
  return (
    <Fragment>
      <Head>
        <title>Matéria - Cálculo Vetorial</title>
      </Head>
      <div className="windowName">
        <p>Cálculo Vetorial</p>
      </div>
      <ScrollTop />
      <Cards />
    </Fragment>
  );
}