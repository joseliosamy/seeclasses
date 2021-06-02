
import Cards from '../../components/Cards';
import { Fragment } from 'react';
import Head from 'next/head';
import ScrollTop from '../../components/ScrollTop';

export default function Calculo() {
  return (
    <Fragment>
      <Head>
        <title>Matéria - Cálculo</title>
      </Head>
      <div className="windowName">
        <p>Cálculo I</p>
      </div>
      <ScrollTop />
      <Cards />
    </Fragment>
  )
}