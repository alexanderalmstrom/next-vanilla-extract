import { useTheme } from "../../hooks/theme";
import { header } from "./Header.css";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <header className={header}>
        <button
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          Toggle theme
        </button>
      </header>
    </>
  );
}
