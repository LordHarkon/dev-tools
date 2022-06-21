import { useLocale } from "@libs/hooks/useLocale";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Navbar from "@components/Navbar";

const JSONPage: NextPage = () => {
  const { t } = useLocale();
  const router = useRouter();

  return <div>Test JSON Component</div>;
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default JSONPage;
