

import Head from "next/head";
import { Fragment } from "react";
import Cards from "../../components/Cards";
import ScrollTop from "../../components/ScrollTop";


export default function LogicaProgramacao() {
  return (
    <Fragment>
      <Head>
        <title>Matéria - Lógica de Programação</title>
      </Head>
      <div className="windowName">
        <p>Lógica de Programação</p>
      </div>
      <ScrollTop />
      <Cards />
    </Fragment>
  );
}