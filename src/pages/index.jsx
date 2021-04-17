
import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';
import Footer from '../components/Footer';

import styles from '../styles/pages/Home.module.css';


export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>See Classes</title>
      </Head>
      <div className={styles.apresentation}>
        <div className={styles.banner}>
          <div className={styles.fade}>
            <h1>See Classes</h1>
            <Link href="/materias">
              <a>Descobrir</a>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
