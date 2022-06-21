import Link from "next/link";
import { classNames } from "react-extras";

export interface NavbarButtonProps {
  active?: boolean;
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export default function NavbarButton(props: NavbarButtonProps) {
  return (
    <Link href={props.href}>
      <a
        className={classNames(
          { "bg-gray-200": props.active, "bg-transparent": !props.active },
          { "dark:bg-slate-500": props.active, "dark:bg-slate-700": !props.active },
          "block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",
        )}
      >
        <span className="flex items-center">
          {props?.icon && <span className="mr-2">{props.icon}</span>}
          {props.label}
        </span>
      </a>
    </Link>
  );
}
