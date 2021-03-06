

import Link from 'next/link';
import { Fragment } from 'react';
import Head from 'next/head';
import styles from '../styles/pages/Materias.module.css'

export default function Materias() {
  return (

    <Fragment>
      <Head>
        <title>Matérias</title>
      </Head>
      <div className={styles.wrapper}>
      <div className={styles.apresentation}>
        <h2>Bem vindo ao See Classes!</h2>
        <p>Veja as matérias disponíveis a seguir.</p>
      </div>
    
        <div className={styles.cardsWrapper}>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>Cálculo I</h2>
            </div>{/* CARDHEADER */}
            <div className={styles.cardBody}>
              <div className={styles.image}>
                <img src="https://www.youtz.com.br/wp-content/uploads/2019/10/YOUTZ-MATEMATICA-ENEM.jpg" alt=""/>
              </div>{/* IMAGE */}
              <div className={styles.descrip}>
                <p>Cálculo I está sendo ministrado por Fred, um professor virado no giraia que confunde todos com seu geogebra.</p>
              </div>{/* DESCRIP */}
              <div className={styles.redirect}>
                <Link href="/materias/calculo">
                  <a>Aulas</a>
                </Link>
              </div>{/* REDIRECT */}
            </div>{/* CARDBODY */}
          </div>{/* CARD CALCULO ------------------ */}

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>Física I</h2>
            </div>{/* CARDHEADER */}
            <div className={styles.cardBody}>
              <div className={styles.image}>
                <img src="https://blog.explicae.com.br/wp-content/uploads/2019/05/f%C3%ADsica-estudo-dica-enem-800x500.png" alt=""/>
              </div>{/* IMAGE */}
              <div className={styles.descrip}>
                <p>Física I está sendo ministrado por Doug, da UFPR. obs: Não é nosso professor, mas é melhor ir por ele, confia!</p>
              </div>{/* DESCRIP */}
              <div className={styles.redirect}>
                <Link href="/materias/fisica">
                  <a>Aulas</a>
                </Link>
              </div>{/* REDIRECT */}
            </div>{/* CARDBODY */}
          </div>{/* CARD FISICA ------------------ */}


          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>Cálculo Vetorial</h2>
            </div>{/* CARDHEADER */}
            <div className={styles.cardBody}>
              <div className={styles.image}>
                <img src="https://s3-sa-east-1.amazonaws.com/manual-do-enem-test/7cef79000baf422683c9fdf4489f31c3-C%C3%B3pia%20de%20Figura%209.JPG" alt=""/>
              </div>{/* IMAGE */}
              <div className={styles.descrip}>
                <p>Cálculo Vetorial está sendo ministrado por Valdeniza, a professora mais fofa da UFPB.</p>
              </div>{/* DESCRIP */}
              <div className={styles.redirect}>
                <Link href="/materias/calculo-vetorial">
                  <a>Aulas</a>
                </Link>
              </div>{/* REDIRECT */}
            </div>{/* CARDBODY */}
          </div>{/* CARD CALCULO VETORIAL ------------------ */}


          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>Introdução ao Computador</h2>
            </div>{/* CARDHEADER */}
            <div className={styles.cardBody}>
              <div className={styles.image}>
                <img src="https://static.vakinha.com.br/uploads/vakinha/image/340357/setup.jpg?ims=700x410" alt=""/>
              </div>{/* IMAGE */}
              <div className={styles.descrip}>
                <p>Introdução ao Computado está sendo ministrado por Hamilton, um dos melhores professores da instituição.</p>
              </div>{/* DESCRIP */}
              <div className={styles.redirect}>
                <Link href="/materias/intro-computador">
                  <a>Aulas</a>
                </Link>
              </div>{/* REDIRECT */}
            </div>{/* CARDBODY */}
          </div>{/* INTRODUÇÃO AO COMPUTADOR ------------------ */}


          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>Introdução a Programação</h2>
            </div>{/* CARDHEADER */}
            <div className={styles.cardBody}>
              <div className={styles.image}>
                <img src="https://computerworld.com.br/wp-content/uploads/2020/12/9-conte%C3%BAdos-para-quem-quer-se-familiarizar-com-a-%C3%A1rea-de-programa%C3%A7%C3%A3o-e-desenvolvimento.jpg" alt=""/>
              </div>{/* IMAGE */}
              <div className={styles.descrip}>
                <p>Introdução a Programação está sendo ministrado por Carlos(bidu), o DJ.</p>
              </div>{/* DESCRIP */}
              <div className={styles.redirect}>
                <Link href="/materias/intro-programacao">
                  <a>Aulas</a>
                </Link>
              </div>{/* REDIRECT */}
            </div>{/* CARDBODY */}
          </div>{/* INTRODUÇÃO A PROGRAMAÇÃO ------------------ */}


          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>Linguagem de Programação 1</h2>
            </div>{/* CARDHEADER */}
            <div className={styles.cardBody}>
              <div className={styles.image}>
                <img src="https://th.bing.com/th/id/OIP.C9vJh79XyZNnNgNyz9mRLgHaEK?pid=ImgDet&rs=1" alt=""/>
              </div>{/* IMAGE */}
              <div className={styles.descrip}>
                <p>Linguagem de Programação 1 está sendo ministrado por Alan.</p>
              </div>{/* DESCRIP */}
              <div className={styles.redirect}>
                <Link href="/materias/linguagem-programacao-1">
                  <a>Aulas</a>
                </Link>
              </div>{/* REDIRECT */}
            </div>{/* CARDBODY */}
          </div>{/* LINGUAGEM A PROGRAMAÇÃO ------------------ */}

        </div>{/* CARDSWRAPPER */}
      </div>
    </Fragment>
  );
}