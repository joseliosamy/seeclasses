import Head from "next/head";
import { Fragment } from "react";
import Cards from "../../components/Cards";


export default function introProgramacao() {
  return (
    <Fragment>
    <Head>
      <title>Matéria - Introdução a Programação</title>
    </Head>
    <Cards />
  </Fragment>
  );
}