import Head from "next/head";

export default function SEO(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="application-name" content="Infinity Dev Tools" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
