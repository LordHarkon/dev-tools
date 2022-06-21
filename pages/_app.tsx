import type { AppProps, NextWebVitalsMetric } from "next/app";
import Head from "next/head";
import "@styles/globals.css";
import { appWithTranslation } from "next-i18next";
import SEO from "@components/SEO";
import { useEffect } from "react";
import Navbar from "@components/Navbar";
import FormatIcon from "@components/icons/Format";
import { useLocale } from "@libs/hooks/useLocale";

function App({ Component, pageProps }: AppProps) {
  const { t } = useLocale();

  const menuItems = [
    {
      label: t("json_format_validate"),
      href: "/json",
      icon: <FormatIcon size={4} />,
    },
  ];

  return (
    <>
      <SEO title="Infinity Dev Tools" />
      <div className="flex flex-col md:flex-row">
        <Navbar menuItems={menuItems} />
        <div className="flex-1 p-3 m-1 md:p-5 md:m-5 bg-slate-900 md:rounded-xl min-h-[calc(100vh-68px)] md:min-h-full">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric);
// }

export default appWithTranslation(App);
