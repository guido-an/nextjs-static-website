import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width" />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>
          {`
            body {
              font-family: "Montserrat", sans-serif;
              margin: 0;
            font-size: 110%;
            background: #f0f0f0
            }
          `}
        </style>
      </html>
    );
  }
}

export default MyDocument;
