
import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';

import Header from '../components/Header';


export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>See Classes</title>
      </Head>
      <p>Home</p>
    </Fragment>
  )
}
