import { Fragment, useEffect } from "react";
import styles from '../styles/components/ScrollTop.module.css';


export default function ScrollTop(){
  return(
    <Fragment>
      <button className={styles.box} onClick={()=>{
          window.scroll({
            top: 0,
            behavior: "smooth"
          });
      }}>

        <svg height="512pt" viewBox="-21 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m352 234.667969c0 11.730469-9.601562 21.332031-21.332031 21.332031-3.203125 0-6.1875-.640625-8.960938-1.921875l-87.039062-40.746094-87.042969 40.746094c-2.773438 1.28125-5.757812 1.921875-8.957031 1.921875-11.734375 0-21.335938-9.601562-21.335938-21.332031 0-3.203125.640625-5.976563 1.921875-8.746094l96-213.335937c3.199219-7.464844 10.667969-12.585938 19.414063-12.585938 8.746093 0 16.210937 5.121094 19.410156 12.585938l96 213.335937c1.28125 2.769531 1.921875 5.542969 1.921875 8.746094zm0 0" fill="var(--schemma)"/><path d="m234.667969 512c-129.386719 0-234.667969-105.28125-234.667969-234.667969 0-71.144531 31.660156-137.46875 86.890625-181.949219 9.195313-7.425781 22.613281-5.933593 29.996094 3.21875 7.378906 9.175782 5.929687 22.613282-3.242188 29.996094-45.101562 36.351563-70.976562 90.539063-70.976562 148.734375 0 105.855469 86.121093 192 192 192 105.875 0 192-86.144531 192-192 0-58.195312-25.878907-112.382812-70.976563-148.714843-9.195312-7.378907-10.625-20.820313-3.242187-29.992188 7.421875-9.152344 20.839843-10.644531 29.992187-3.222656 55.234375 44.460937 86.890625 110.785156 86.890625 181.929687 0 129.386719-105.277343 234.667969-234.664062 234.667969zm0 0" fill="var(--text)"/></svg>
      </button>
    </Fragment>
  )
}