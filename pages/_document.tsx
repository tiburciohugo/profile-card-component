import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="grid content-center w-full h-screen bg-center bg-cover bg-mobile md:bg-desktop">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
