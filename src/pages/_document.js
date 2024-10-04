
import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/common/header";
import Footer from "@/common/footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
