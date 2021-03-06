

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
   
    return { ...initialProps }
  }
  render() {
    return (
      <Html>
          <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="shortcut icon" href="icons/header/seeclasses.svg" type="image/svg"/>
            <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;500;600;800&family=Rajdhani:wght@600;800&display=swap" rel="stylesheet" />
          </Head>

          <body>
            <Main />
            <NextScript />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.js"></script>
          </body>
      </Html>
    )
  }
}

export default MyDocument