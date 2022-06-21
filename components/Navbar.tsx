import { useEffect, useState } from "react";
import { useLocale } from "@libs/hooks/useLocale";
import { classNames } from "react-extras";
import Link from "next/link";
import NavbarButton from "./NavbarButton";
import TerminalIcon from "./icons/Terminal";
import MenuIcon from "./icons/Menu";
import HomeIcon from "./icons/Home";
import FormatIcon from "./icons/Format";
import { useRouter } from "next/router";
import DarkModeIcon from "./icons/DarkMode";
import useDarkMode from "@libs/hooks/useDarkMode";
import { Transition } from "@headlessui/react";

interface NavbarProps {
  menuItems?: {
    href: string;
    label: string;
    icon?: React.ReactNode;
  }[];
}

export default function Navbar(props: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();
  const router = useRouter();
  const { t } = useLocale();

  return (
    <div className="md:flex md:flex-row md:min-h-screen">
      <div className="flex-col flex-shrink-0 w-full text-gray-700 transition ease-in-out bg-white md:w-72 dark:text-gray-200 dark:bg-gray-800 200ms">
        <div className="flex flex-row items-center justify-between flex-shrink-0 px-6 py-4 h-[60px]">
          <Link href="/">
            <a className="flex items-center text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg md:mx-auto dark:text-white focus:outline-none focus:shadow-outline">
              <TerminalIcon size={6} />
              <span className="ml-2">Infinity Dev Tools</span>
            </a>
          </Link>
          <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" onClick={(e) => setIsOpen(!isOpen)}>
            <MenuIcon isOpen={isOpen} />
          </button>
        </div>
        <Transition
          className="block md:hidden"
          show={isOpen}
          enter="transition ease-in-out duration-200 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-200 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <nav
            className={classNames(
              "h-[calc(100%-120px)] flex justify-between flex-col md:block px-4 pb-4 md:pb-0 md:overflow-y-auto text-center duration-200 ease-in-out transition-all",
            )}
          >
            <NavbarButton active={router.pathname === "/"} label={t("home")} href="/" icon={<HomeIcon size={4} />} />
            {props?.menuItems?.map((menuItem, index) => (
              <NavbarButton
                key={index}
                label={menuItem.label}
                icon={menuItem?.icon ? menuItem.icon : null}
                href={menuItem.href}
                active={router.pathname === menuItem.href}
              />
            ))}
          </nav>
          <div className="h-[60px] p-4 md:pb-0 flex flex-row items-center justify-around">
            <span onClick={(_) => setTheme(colorTheme)}>
              <DarkModeIcon isDarkMode={colorTheme !== "dark"} />
            </span>
          </div>
        </Transition>
        <div className="hidden md:block">
          <nav className="h-[calc(100vh-120px)] flex justify-between flex-col md:block px-4 pb-4 md:pb-0 md:overflow-y-auto text-center duration-200 ease-in-out transition-all">
            <NavbarButton active={router.pathname === "/"} label={t("home")} href="/" icon={<HomeIcon size={4} />} />
            {props?.menuItems?.map((menuItem, index) => (
              <NavbarButton
                key={index}
                label={menuItem.label}
                icon={menuItem?.icon ? menuItem.icon : null}
                href={menuItem.href}
                active={router.pathname === menuItem.href}
              />
            ))}
          </nav>
          <div className="h-[60px] p-4 md:pb-0 flex flex-row items-center justify-around">
            <span onClick={(_) => setTheme(colorTheme)}>
              <DarkModeIcon isDarkMode={colorTheme !== "dark"} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
