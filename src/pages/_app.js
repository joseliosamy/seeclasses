
import '../styles/global.css';
import '../styles/nprogress.css'
// import '../styles/components/cards.css';
import Header from '../components/Header';
import NProgress from 'nprogress';
import Router from 'next/router';

NProgress.configure({
  parent: '#__next',
  showSpinner: false,
  trickleSpeed: 300,
});

Router.events.on("routeChangeStart", (url)=> {
  NProgress.start();
})
Router.events.on("routeChangeComplete", (url)=> {
  NProgress.done();
})
Router.events.on("routeChangeError", (url)=> {
  NProgress.done();
})



function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Header />
      <main>
        <Component {...pageProps} />
      </main> 
    </div>
  );
}

export default MyApp
