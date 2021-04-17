

import styles from '../styles/components/Footer.module.css';

export default function Footer(){
  return(
    <footer className={styles.footer}>
        <a className={styles.icon} href="https://github.com/joseliosamy" target="_blank">
          <i className='bx bxl-github'></i>
        </a>
        <a className={styles.icon} href="https://www.instagram.com/_joseliot/" target="_blank">
          <i className='bx bxl-instagram'></i>
        </a>
    </footer>
  );
}