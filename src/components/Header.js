
import Link from 'next/link';
import styles from '../styles/components/Header.module.css';
import DarkmodeButton from '../components/DarkmodeButton';

export default function Header() {
  function removeVideo(){
    if(document.querySelector('.videoFull')){
      document.querySelector('.videoFull').parentElement.removeChild(document.querySelector('.videoFull'));
    }
  }
  return(
    // header
    <header className={styles.header}>
      {/* title */}
      <div className={styles.title}>
        <Link href="/">
          <a onClick={removeVideo}> 
            <svg className={styles.headerSvg} id="Capa_1" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" width="35" height="35"><g><circle cx="256" cy="85" r="85"/><path d="m318.459 181.515c-17.997 11.687-39.448 18.485-62.459 18.485s-44.462-6.798-62.459-18.485c-19.895 7.603-38.341 18.82-54.38 33.216l116.839 43.815 116.839-43.815c-16.039-14.396-34.485-25.614-54.38-33.216z"/><path d="m436 310h-10c-8.284 0-15 6.716-15 15v40c0 8.284 6.716 15 15 15h10c19.33 0 35-15.67 35-35 0-19.33-15.67-35-35-35z"/><path d="m87.456 234.276c-4.044 2.803-6.456 7.409-6.456 12.329v33.395h5c24.813 0 45 20.187 45 45v40c0 24.813-20.187 45-45 45h-5v31.605c0 6.253 3.879 11.85 9.733 14.045l150.267 56.35v-227.04l-139.733-52.4c-4.607-1.729-9.768-1.088-13.811 1.716z"/><path d="m381 365v-40c0-24.813 20.187-45 45-45h5v-33.395c0-4.92-2.412-9.526-6.456-12.329-4.044-2.804-9.206-3.445-13.811-1.716l-139.733 52.4v227.04l150.267-56.35c5.854-2.195 9.733-7.792 9.733-14.045v-31.605h-5c-24.813 0-45-20.187-45-45z"/><path d="m101 365v-40c0-8.284-6.716-15-15-15h-10c-19.33 0-35 15.67-35 35 0 19.33 15.67 35 35 35h10c8.284 0 15-6.716 15-15z"/></g></svg>
          </a>
        </Link>
      </div>
      {/* nav */}
      <nav className={styles.nav}>
        {/* calculo */}
        <div className={styles.anchor}>
          <Link href="/materias/calculo">
            <a onClick={removeVideo}>
              <svg className={styles.headerSvg} id="Capa_1" x="0px" y="0px"
              viewBox="0 0 215.76 215.76">
              <polygon points="151.493,2.877 83.055,149.641 45.907,89.106 0.113,88.931 0,118.931 29.079,119.042 86.665,212.883 170.604,32.877 
                215.76,32.877 215.76,2.877 "/>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              </svg>
            </a>
          </Link>
          <p>Cálculo</p>
        </div>
        
        {/* fisica */}
        <div className={styles.anchor}>
          <Link href="/materias/fisica">
            <a onClick={removeVideo}>
            <svg className={styles.headerSvg} viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
              <g>
                <g>
                  <path d="m457.3,257.8c49.8-87.3 57.8-171 13.5-216-51.4-52.3-136.2-31.3-213.3,13.1-87.7-50.3-172.4-58.3-215.7-12.5-52.4,55.4-30.9,139.2 12.2,213.7-49.5,87.1-57.2,171.1-11.6,214.1 55.3,52.3 138.9,30.9 213.3-12 86.7,49 169.7,56.6 214.5,12.6 52.2-51.3 31.3-135.9-12.9-213zm-22.2-180.3c21.4,22.8 17.5,71.3-10.7,129.8-17.5-23.9-36.3-46-54.6-64.6-20.9-21.3-42.7-40.2-64.7-56.6 53.6-25.4 105.6-34.7 130-8.6zm-357.6,.6c21.7-22.5 70.1-18.3 128.8,10.2-23.5,17.2-45.2,35.8-63.5,53.8-21.6,21.3-40.8,43.4-57.4,65.8-24.9-51.4-34.5-102.3-7.9-129.8zm.6,356.4c-22.3-21.5-18.4-69.3 9.6-127.4 17.8,23.9 36.7,45.6 54.4,63.4 21.2,21.2 43.2,40.1 65.4,56.4-51.3,24.7-101.9,34.1-129.4,7.6zm99.7-99.7c-21.1-19.6-43.5-46.4-63-75.7 17.1-26.4 38.4-53.9 63.6-81.3 20.1-21.7 46.6-43.6 75.3-62.5 26.1,17 53.3,38.1 80.4,63.1 22,20.3 44.2,47.3 63.2,76.4-16.8,25.8-37.7,52.6-62.6,79.3-19.9,21.3-47.1,44.1-76.8,63.8-25.9-16.9-53-37.9-80.1-63.1zm256.7,100.3c-22.7,21.2-70.5,17.6-128.4-10 24.4-18 46.4-37.2 64.4-55.2 20.9-20.9 39.4-42.5 55.5-64.2 25.4,53.3 34.6,105.1 8.5,129.4z"/>
                  <circle cx="256" cy="256" r="29.9"/>
                </g>
              </g>
            </svg>
            </a>
          </Link>
          <p>Física</p>
        </div>

        {/* vetorial */}
        <div className={styles.anchor}>
          <Link href="/materias/calculo-vetorial">
            <a onClick={removeVideo}>
            <svg className={styles.headerSvg} id="Layer_1" x="0px" y="0px"
              viewBox="0 0 347.537 347.537" enableBackground="new 0 0 347.537 347.537" fill="#8b949e">
            <polygon points="347.537,0 154.44,0 240.382,85.942 0,326.324 21.213,347.537 261.595,107.155 347.537,193.097 "/>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            </svg>
            </a>
          </Link>
          <p>Cálculo Vetorial</p>
        </div>

        {/* intro prog */}
        <div className={styles.anchor}>
          <Link href="/materias/intro-programacao">
            <a onClick={removeVideo}>
              <svg className={styles.headerSvg} id="Capa_1"  x="0px" y="0px"
                viewBox="0 0 384.974 384.974" enableBackground="new 0 0 384.974 384.974;" fill="#8b949e">
              <g>
                <g id="Double_Chevron">
                  <path d="M381.463,183.891L273.166,75.631c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179l99.707,99.671
                    l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261
                    C386.143,196.391,386.143,188.571,381.463,183.891z"/>
                  <path d="M129.031,75.631c-4.752-4.74-12.463-4.74-17.215,0L3.519,183.891c-4.692,4.68-4.692,12.499,0,17.191l108.297,108.261
                    c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179l-99.707-99.683l99.695-99.671
                    C133.783,88.07,133.783,80.371,129.031,75.631z"/>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              </svg>
            </a>
          </Link>
          <p>Introdução a Programação</p>
        </div>

        {/* intro comp */}
        <div className={styles.anchor}>
          <Link href="/materias/intro-computador">
            <a onClick={removeVideo}>
              <svg className={styles.headerSvg} id="Capa_1"  x="0px" y="0px"
                viewBox="0 0 487.8 487.8" enableBackground="new 0 0 487.8 487.8;" fill="#8b949e">
              <g>
                <g>
                  <path d="M468.4,198H339.9c-10.7,0-19.4,8.7-19.4,19.4v192.9c0,10.7,8.7,19.4,19.4,19.4h128.5c10.7,0,19.4-8.7,19.4-19.4V217.5
                    C487.8,206.7,479.1,198,468.4,198z M365.6,405.1h-20.4V222.7h20.4V405.1z M463.1,405.1h-57.4V222.7h57.4V405.1z"/>
                  <path d="M44.8,102.9h317.4v66.8H407V90.9c0-18.2-14.7-32.9-32.9-32.9H32.9C14.7,58,0,72.7,0,90.9v230.7
                    c0,18.2,14.7,32.9,32.9,32.9h133.9v36.7h-26.1c-4.4,0-7.9,3.5-7.9,7.9v22.8c0,4.4,3.5,7.9,7.9,7.9h125.8c4.4,0,7.9-3.5,7.9-7.9
                    V399c0-4.4-3.5-7.9-7.9-7.9h-26.1v-36.7h49.3v-45.2H44.8V102.9z"/>
                </g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              </svg>
            </a>
          </Link>
          <p>Introdução ao Computador</p>
        </div>

        <DarkmodeButton />
      </nav> {/* nav */}
    </header> // header
  );
}