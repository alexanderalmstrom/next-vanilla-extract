import { useTheme } from "../../hooks/theme";
import { Button } from "../ui/button/Button";
import { header } from "./Header.css";

export function Header() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <>
      <header className={header}>
        <Button color="primary" onClick={toggleTheme}>
          Current theme: {theme}
        </Button>
      </header>
    </>
  );
}
