import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();


class MyDocument extends Document {
  setGoogleTags() {
    if (publicRuntimeConfig.PRODUCTION) {
      return {
        __html: `

        `
      };
    }
  }

render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="yes"/>
          <meta name="apple-mobile-web-app-title" content="Portfolio"/>
          <meta name="p:domain_verify" content="b2666a47ce2019ef96afa5b4b91da6a2"/>
           <link
            rel="stylesheet"
            defer
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
          />
          <link href="https://fonts.googleapis.com/css?family=Raleway:200&display=swap" rel="stylesheet" />
          <link rel="icon" href="/static/images/" />
          <script defer async src="https://www.googletagmanager.com/gtag/js?id=UA-161776444-1"></script>
          <script  defer dangerouslySetInnerHTML={this.setGoogleTags()} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
