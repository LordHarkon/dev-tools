import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState<string>(typeof window !== "undefined" ? localStorage.theme : "dark");

  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement as HTMLElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]); // eslint-disable-line

  return [colorTheme, setTheme];
}
