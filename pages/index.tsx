import { useLocale } from "@libs/hooks/useLocale";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Navbar from "@components/Navbar";
import DarkModeIcon from "@components/icons/DarkMode";

const Home: NextPage = () => {
  const { t } = useLocale();
  const router = useRouter();

  return <div>Test Home Component</div>;
};

interface staticProps {
  locale: string;
}

export const getStaticProps = async ({ locale }: staticProps) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
