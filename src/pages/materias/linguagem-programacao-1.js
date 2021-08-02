

import Head from "next/head";
import { Fragment } from "react";
import Cards from "../../components/Cards";
import ScrollTop from "../../components/ScrollTop";


export default function LinguagemProgramacao1() {
  return (
    <Fragment>
      <Head>
        <title>Matéria - Linguagem de Programação 1</title>
      </Head>
      <div className="windowName">
        <p>Linguagem de Programação 1</p>
      </div>
      <ScrollTop />
      <Cards />
    </Fragment>
  );
}