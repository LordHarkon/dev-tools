import Document, { Head, Html, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="h-screen antialiased bg-white text-slate-500 dark:text-slate-400 dark:bg-slate-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
