import Head from "next/head";
import { Fragment } from "react";
import Cards from "../../components/Cards";


export default function introComputador() {
  return (
    <Fragment>
    <Head>
      <title>Matéria - Introdução ao Computador</title>
    </Head>
    <div className="windowName">
      <p>Introdução ao Computador</p>
    </div>
    <Cards />
  </Fragment>
  );
}